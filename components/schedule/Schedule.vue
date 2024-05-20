<!-- Events calendar that pulls events from Google Calendar -->
<template>
  <div id="schedule">
    <h1 class="section-title">Schedule</h1>
    <div class="schedule-page">
      <div class="row schedule-list">
        <!-- LEGEND AND TIMEZONE -->
        <div class="schedule-legend">
          <div>
            <div class="schedule-legend-filter">
              <b style="white-space: nowrap">Event Categories:&nbsp;</b>
              <Multiselect
                v-model="selectedEventCategories"
                mode="tags"
                placeholder="Filter by event category"
                :append-new-option="false"
                :close-on-select="false"
                :searchable="false"
                :options="eventCategories"
              />
            </div>
            <div class="schedule-favorite-filter">
              <b>Show favorited events only:</b>
              <input
                class="favorite-checkbox form-check-input"
                type="checkbox"
                v-model="showFavorites"
              />
            </div>
          </div>
          <span> <b>Timezone:</b> {{ timezoneDisplayName }} </span>
        </div>

        <!-- FULL SCHEDULE -->
        <div v-if="dataLoaded" class="col pl-5" style="min-height: 0">
          <div no-body class="card h-100">
            <div class="column-card">
              <div class="schedule-header">
                <div
                  v-for="day in days"
                  :key="getDayOfTheWeek(day)"
                  class="schedule-header-day"
                  @click="selectTitleItem(day)"
                >
                  <div>
                    <div class="schedule-day">
                      <span class="day"
                        >{{ getDayOfTheWeek(day).substring(0, 3) }},
                        {{ '' }}
                      </span>
                      <span class="date">October {{ day.getDate() }}</span>
                    </div>
                    <div
                      class="schedule-header-day-bar"
                      :class="{ active: day === selectedDay }"
                    />
                  </div>
                </div>
              </div>

              <!-- SCHEDULE SCROLL -->
              <div class="list-wrapper" v-if="dayHasEvents">
                <div class="schedule-body">
                  <div class="schedule-time">
                    <div
                      v-for="timeWindow in displayTimeWindows"
                      :key="timeWindow"
                      class="timewindow"
                    >
                      <span v-if="timeWindow.startsWith('0')">
                        {{ timeWindow.slice(1) }}
                      </span>
                      <span v-else>
                        {{ timeWindow }}
                      </span>
                    </div>
                  </div>
                  <div
                    class="schedule-content"
                    :style="{
                      gridTemplateColumns: `repeat(${scheduleColumns[selectedDay as any]}, minmax(${isSmallScreen ? 4 : 6}rem, 1fr))`,
                    }"
                  >
                    <div
                      v-for="scheduleColumn in scheduleColumns[selectedDay as any]"
                      :key="scheduleColumn"
                      Schedule
                      class="schedule-column"
                    >
                      <div
                        v-for="timeWindow in displayTimeWindows"
                        :key="timeWindow"
                        class="timewindow"
                      >
                        <div
                          v-if="
                            formattedEvents[selectedDay as any][timeWindow].find(
                              (event: any) =>
                                event.column === scheduleColumn &&
                                event.display &&
                                event.displayMode
                            )
                          "
                          class="schedule-content-item"
                          :class="[
                            formattedEvents[selectedDay as any][timeWindow].find(
                              (event: any) => event.column === scheduleColumn
                            ).class,
                            {
                              favorite: !!nuxtStorage.localStorage.getData(
                                formattedEvents[selectedDay as any][timeWindow].find(
                                  (event: any) => event.column === scheduleColumn
                                ).name
                              )
                            }
                          ]"
                          data-toggle="modal"
                          data-target="#scheduleEventModal"
                          @click="
                            openEventModal(
                              selectedDay as Date,
                              timeWindow,
                              scheduleColumn
                            )
                          "
                        >
                          <div class="schedule-content-item-title">
                            {{
                              formattedEvents[selectedDay as any][
                                timeWindow
                              ].find(
                                (event: any) => event.column === scheduleColumn
                              ).name
                            }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="no-favorites" v-else>No favorited events</div>
            </div>
          </div>
        </div>
        <div v-else class="loading-text">
          <p>Schedule loading...</p>
        </div>
      </div>
    </div>
  </div>
  <ModalsContainer />
  <EventModal
    v-model="showEventModal"
    :event="selectedEvent"
    :isFavorite="isFavorite"
    @favorite="(eventName) => favoriteEvent(eventName, true)"
    @unfavorite="(eventName) => favoriteEvent(eventName, false)"
    @close="closeEventModal"
  />
</template>

<script setup lang="ts">
import Multiselect from '@vueform/multiselect';
import { useMediaQuery } from '@vueuse/core';
import { ModalsContainer } from 'vue-final-modal';
import nuxtStorage from 'nuxt-storage';
import EventModal from './EventModal.vue';
import type { Event, EventCategory } from './event';

// Environment variables
const config = useRuntimeConfig();

// Responsiveness
const isSmallScreen = useMediaQuery('(max-width: 850px)');

// Events
const rawEvents = ref<Event[]>([]);
const filteredRawEvents = ref<Event[]>([]);
const formattedEvents = ref<any>({});
const selectedDay = ref<Date>();
const days = ref<Date[]>([]);
const timeWindows = ref<any[]>([]);
const timeWindowColumns = ref<any>({});
const scheduleColumns = ref<any>({});
const dataLoaded = ref(false);
const selectedEvent = ref<Event>();
const startDate = ref(new Date('2023-10-21T09:00:00-04:00'));
const endDate = ref(new Date('2023-10-22T16:00:00-04:00'));
const showEventModal = ref(false);
const showFavorites = ref(false);
const isFavorite = ref(false);
const dayHasEvents = ref(true);

// Event categories
const selectedEventCategories = ref<EventCategory[]>([
  'main',
  'workshop',
  'mini',
  'chat',
  'food',
  'virtual',
]);
const eventCategories = [
  { value: 'main', label: 'Main Events' },
  { value: 'workshop', label: 'Workshops' },
  { value: 'mini', label: 'Mini-Events' },
  { value: 'chat', label: 'Techni-Chats' },
  { value: 'food', label: 'Food' },
  { value: 'virtual', label: 'Virtual' },
];
watch(
  [selectedEventCategories, showFavorites, selectedDay],
  (
    [newSelectedEventCategories, newShowFavorites, newSelectedDay],
    [oldSelectedEventCategories, oldShowFavorites, oldSelectedDay]
  ) => {
    if (
      newSelectedEventCategories.length !== oldSelectedEventCategories.length ||
      newShowFavorites !== oldShowFavorites
    ) {
      prepareTimeWindows();
      populateFormattedEvents();
    }
    if (oldSelectedDay) {
      computeDayHasEvents();
    }
  }
);

// Get formatted time zone
const timezoneDisplayName = (() => {
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  if (tz) {
    return tz.replace('_', ' ');
  }
  return '';
})();

// Create schedule on mount
onMounted(async () => {
  populateDays();
  prepareTimeWindows();
  await fetchRawEvents();
  processRawEvents();
  populateFormattedEvents();
  dataLoaded.value = true;
});

// Pick which time windows to display
const displayTimeWindows = computed(() => {
  const timeWindowCols = timeWindowColumns.value[selectedDay.value as any];
  const keys = Object.keys(timeWindowCols);
  const topExtraRows = 1;
  const bottomExtraRows = 1;
  let startCutoff = 0;
  let endCutoff = -1;
  // 1. trim at the top
  for (let i = 0; i < keys.length; i += 1) {
    if (timeWindowCols[keys[i]].length > 0) {
      startCutoff = Math.max(i - topExtraRows, 0);
      break;
    }
  }
  // 2. trim at the bottom
  const newTimes = [];
  for (let i = keys.length - 1; i >= 0; i -= 1) {
    if (timeWindowCols[keys[i]].length > 0) {
      /* Check for events that overflow the end of the time windows */
      endCutoff = i + bottomExtraRows + 1;
      if (endCutoff >= timeWindows.value.length) {
        // Add additional time windows to the end to support long events (up to 1 hour over)
        const midnight = new Date();
        midnight.setHours(0, 0, 0, 0);
        const currentTime = new Date(midnight);
        // Go through every possible 30 minute increment in a day
        while (endCutoff >= keys.length + newTimes.length) {
          newTimes.push(formatAMPM(currentTime));
          currentTime.setMinutes(currentTime.getMinutes() + 30);
        }
      }
      break;
    }
  }
  endCutoff = Math.min(endCutoff, 48);
  return timeWindows.value.concat(newTimes).slice(startCutoff, endCutoff);
});

function computeDayHasEvents() {
  const timeWindowCols = timeWindowColumns.value[selectedDay.value as any];
  const keys = Object.keys(timeWindowCols);
  // 1. trim at the top
  for (let i = 0; i < keys.length; i += 1) {
    if (timeWindowCols[keys[i]].length > 0) {
      dayHasEvents.value = true;
      return;
    }
  }
  dayHasEvents.value = false;
}

/** Create a list of days in the schedule */
function populateDays() {
  const currentDate = new Date(startDate.value);

  // This code might not work at the end of the month
  while (currentDate.getDate() <= endDate.value.getDate()) {
    days.value.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  // Make schedule start on the current day
  const nowString = new Date().toDateString();
  const today = days.value.find((day) => day.toDateString() === nowString);
  selectedDay.value = today || days.value[0];
}

/** Create a list of 30-minute time windows for each day */
function prepareTimeWindows() {
  timeWindows.value = [];

  const midnight = new Date();
  midnight.setHours(0, 0, 0, 0);
  const currentTime = new Date(midnight);

  days.value.forEach((day) => {
    timeWindowColumns.value[day as any] = {};
  });

  // Go through every possible 30 minute increment in a day
  do {
    timeWindows.value.push(formatAMPM(currentTime));
    days.value.forEach((day) => {
      timeWindowColumns.value[day as any][formatAMPM(currentTime)] = [];
    });
    currentTime.setMinutes(currentTime.getMinutes() + 30);
  } while (formatAMPM(currentTime) !== formatAMPM(midnight));
}

/** Fetch events from Google Calendar */
async function fetchRawEvents() {
  try {
    const eventsRes = await fetch(
      'https://www.googleapis.com/calendar/v3/calendars/' +
        config.public.calendarID +
        '/events?key=' +
        config.public.googleApiKey +
        '&singleEvents=true&orderBy=startTime&timeMin=' +
        startDate.value.toISOString() +
        '&timeMax=' +
        endDate.value.toISOString()
    );
    const eventsBody = await eventsRes.json();
    const events = eventsBody.items.map((event: any) => {
      const { category, name } = parseEventName(event.summary);
      const description = event.description;
      const location = event.location;
      const startTime = event.start.dateTime;
      const endTime = event.end.dateTime;
      return { name, description, category, location, startTime, endTime };
    });
    rawEvents.value = events;
  } catch (error) {
    rawEvents.value = [];
  }
}

/** Parse event name from Google Calendar */
function parseEventName(eventName: string) {
  let category, name;
  const regex = /\[.*\]/;
  const matches = eventName.match(regex);
  if (matches) {
    // eventName in format: '[Workshop] Event Name'
    category = matches[0].slice(1, -1);
    name = eventName.slice(eventName.indexOf(']') + 1).trim();
  } else {
    // eventName in format: 'Workshop Event Name'
    category = eventName.slice(0, eventName.indexOf(' '));
    name = eventName.slice(eventName.indexOf(' ') + 1);
  }
  category = category.toLowerCase();
  return { category, name };
}

/** Add formatting to events */
function processRawEvents() {
  const numEvents = rawEvents.value.length;
  for (let i = 0; i < numEvents; i++) {
    // Deep clone object
    rawEvents.value[i].class = `${rawEvents.value[i].category}-event`;
    const start = new Date(rawEvents.value[i].startTime);
    const end = new Date(rawEvents.value[i].endTime);

    // Handle events that go past midnight (multiple days)
    if (
      start.getDay() != end.getDay() &&
      !(end.getHours() == 0 && end.getMinutes() == 0)
    ) {
      // Create a new event starting at midnight on the next day
      const newEvent = { ...rawEvents.value[i] };
      newEvent.prevDayStartTime = newEvent.startTime;
      const start = new Date(end);
      start.setHours(0, 0, 0, 0);
      newEvent.startTime = start.toISOString();
      newEvent.class += ` length-${getDurationOfEvent(start, end)}-min`;
      newEvent.class += ' starts-on-prev-day';
      rawEvents.value.push(newEvent);
    }

    // Set event length
    rawEvents.value[i].class += ` length-${getDurationOfEvent(start, end)}-min`;

    // Handle events starting/ending at xx:15 or xx:45
    if (start.getMinutes() === 15 || start.getMinutes() === 45) {
      rawEvents.value[i].class += ' offset-15-min';
    }
  }
}

/** Add formatted events */
function populateFormattedEvents() {
  getFilteredRawEvents();

  days.value.forEach((day) => {
    formattedEvents.value[day as any] = {};
    timeWindows.value.forEach((timeWindow) => {
      formattedEvents.value[day as any][timeWindow] = getEventsForTimeWindow(
        timeWindow,
        day
      );
    });
  });

  // set number of columns to display in schedule
  days.value.forEach((day) => {
    scheduleColumns.value[day as any] = Math.max(
      1,
      ...[].concat(
        ...(Object.values(timeWindowColumns.value[day as any]) as any[])
      )
    );
  });
}

/** Filter raw events based on selected event types and favorites */
function getFilteredRawEvents() {
  let events = [...rawEvents.value];

  // Filter by event type
  if (
    0 < selectedEventCategories.value.length &&
    selectedEventCategories.value.length < eventCategories.length
  ) {
    events = events.filter((rawEvent: any) => {
      return selectedEventCategories.value.includes(rawEvent.category);
    });
  }

  // Filter by favorites
  if (showFavorites.value) {
    events = events.filter((rawEvent: any) => {
      return !!nuxtStorage.localStorage.getData(rawEvent?.name);
    });
  }

  filteredRawEvents.value = events;
}

/** Get all events starting in a time window */
function getEventsForTimeWindow(timeWindow: any, day: Date) {
  const eventsForWindow = filteredRawEvents.value.filter((rawEvent: any) => {
    const rawEventStart = new Date(rawEvent.startTime);
    const rawEventStartMinus15 = new Date(rawEventStart.getTime());
    rawEventStartMinus15.setMinutes(rawEventStartMinus15.getMinutes() - 15);
    return (
      (formatAMPM(rawEventStart) === timeWindow ||
        formatAMPM(rawEventStartMinus15) === timeWindow) &&
      rawEventStart.getDate() === day.getDate()
    );
  });

  eventsForWindow.forEach((event: any) => {
    event.display = true;
    event.displayMode = true;

    const midnight = new Date();
    midnight.setHours(0, 0, 0, 0);

    const eventStart = new Date(event.startTime);
    const eventEnd = new Date(event.endTime);
    let column = 1;

    // handle events starting/ending at xx:15 or xx:45
    if (eventStart.getMinutes() === 15 || eventStart.getMinutes() === 45) {
      eventStart.setMinutes(eventStart.getMinutes() - 15);
    }
    if (eventEnd.getMinutes() === 15 || eventEnd.getMinutes() === 45) {
      eventEnd.setMinutes(eventEnd.getMinutes() + 15);
    }

    // find the first column that the event fits into the schedule
    while (column < 20) {
      const currentTime = new Date(eventStart);
      let validColumn = true;
      do {
        if (
          timeWindowColumns.value[day as any][formatAMPM(currentTime)].includes(
            column
          )
        ) {
          validColumn = false;
        }
        currentTime.setMinutes(currentTime.getMinutes() + 30);
      } while (
        formatAMPM(currentTime) !== formatAMPM(eventEnd) &&
        formatAMPM(currentTime) !== formatAMPM(midnight) &&
        validColumn
      );
      if (validColumn) {
        break;
      }
      column++;
    }
    event.column = column;

    // update occupied columns
    const currentTime = new Date(eventStart);
    do {
      timeWindowColumns.value[day as any][formatAMPM(currentTime)].push(column);
      currentTime.setMinutes(currentTime.getMinutes() + 30);
    } while (
      formatAMPM(currentTime) !== formatAMPM(eventEnd) &&
      formatAMPM(currentTime) !== formatAMPM(midnight)
    );
  });
  return eventsForWindow;
}

function formatAMPM(date: Date) {
  // Convert to AM/PM local time
  return date.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
}

function getDayOfTheWeek(date: Date) {
  const weekday = new Array(7);
  weekday[0] = 'Sunday';
  weekday[1] = 'Monday';
  weekday[2] = 'Tuesday';
  weekday[3] = 'Wednesday';
  weekday[4] = 'Thursday';
  weekday[5] = 'Friday';
  weekday[6] = 'Saturday';
  return weekday[date.getDay()];
}

function getDurationOfEvent(start: Date, end: Date) {
  const diff = end.getTime() - start.getTime();
  return diff / 60000;
}

function selectTitleItem(day: Date) {
  selectedDay.value = day;
}

function favoriteEvent(eventName: string | undefined, favorite: boolean) {
  isFavorite.value = favorite;
  if (favorite) {
    nuxtStorage.localStorage.setData(eventName, favorite, 60 * 24 * 30); // 30 days
  } else {
    nuxtStorage.localStorage.removeItem(eventName);
  }
  if (showFavorites.value) {
    prepareTimeWindows();
    populateFormattedEvents();
  }
}

function openEventModal(selectedDay: Date, timeWindow: any, column: any) {
  selectedEvent.value = formattedEvents.value[selectedDay as any][
    timeWindow
  ].find((event: any) => event.column === column);
  if (selectedEvent.value) {
    selectedEvent.value.selectedDay = selectedDay;
    selectedEvent.value.timeWindow = timeWindow;
    selectedEvent.value.column = column;
    isFavorite.value = !!nuxtStorage.localStorage.getData(
      selectedEvent.value?.name
    );
  }
  showEventModal.value = true;
}

function closeEventModal() {
  showEventModal.value = false;
}
</script>

<script lang="ts">
export default {
  name: 'SchedulePage',
};
</script>

<style lang="scss">
@import '../../assets/styles/_schedule.scss';

.multiselect {
  min-width: 40rem;
  @media only screen and (max-width: 850px) {
    min-width: 0;
  }

  &.is-active {
    box-shadow: 0 0 0 var(--ms-ring-width, 3px) rgba($DARK_PURPLE, 0.2) !important;
  }

  & .multiselect-dropdown {
    max-height: 20rem !important;
  }

  & .multiselect-tag[aria-label~='Main'] {
    background: $COLOR_MAIN_EVENT;
  }
  & .multiselect-tag[aria-label~='Workshops'] {
    background: $COLOR_WORKSHOP;
  }
  & .multiselect-tag[aria-label~='Mini-Events'] {
    background: $COLOR_MINI_EVENT;
  }
  & .multiselect-tag[aria-label~='Techni-Chats'] {
    background: $COLOR_TECHNI_CHAT;
  }
  & .multiselect-tag[aria-label~='Food'] {
    background: $COLOR_FOOD;
  }
  & .multiselect-tag[aria-label~='Virtual'] {
    background: $COLOR_VIRTUAL;
  }
}
</style>

<style scoped lang="scss">
@import '../../assets/styles/_schedule.scss';

#calendar {
  position: relative;
  width: 100%;
  z-index: 10;
}
.section-title {
  text-align: center;
  font-weight: bold;
  font-size: 2em;
  color: $DARK_PURPLE;
}
.card {
  border: 0;
  overflow: hidden;
  background-color: $COLOR_FOREGROUND;
  border-radius: $BORDER_RADIUS;
  border: 2px solid darken($COLOR_HEADER, 30%);
  color: $COLOR_LIGHT_TEXT;
  font-family: Poppins;
}
.schedule-header {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: $COLOR_HEADER;
  border-bottom: 2px solid darken($COLOR_HEADER, 30%);
}
.schedule-header-day {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem;
  padding-bottom: 0.65rem;
  cursor: pointer;

  & .schedule-day {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    column-gap: 0.25rem;
    text-align: center;
    font-size: 1rem;
    font-weight: bold;
  }
}
.schedule-header-day-bar {
  margin-top: 0.1rem;
  height: 0.2rem;
  background-color: transparent;
  border-radius: 2rem;

  &.active {
    background-color: $COLOR_LIGHT_TEXT;
  }
}
.list-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
  overflow-x: hidden;
  overflow-y: auto;
  backdrop-filter: blur(35px);
}
.no-favorites {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}
.loading-text {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
}
.column-card {
  display: flex;
  height: 100%;
  flex-direction: column;
  min-height: 0;
}
.schedule-page {
  align-items: center;
}
.schedule-list {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  height: 85vh;
  margin: 0;
  margin-top: 1rem;
  padding: 0 1rem;
  width: 100%;
}
.schedule-legend {
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  gap: 0.25rem 3rem;
  margin-top: 1rem;
  margin-bottom: 0.75rem;
}
.schedule-legend-filter {
  margin-bottom: 0.5rem;
  @media only screen and (max-width: 850px) {
    width: 100%;
  }
}
.schedule-favorite-filter {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
.favorite-checkbox {
  margin-top: 0;
  border: 2px solid #a464d8;
}
.schedule-body {
  border-radius: 0;
  height: fit-content;
  width: 100%;
  display: flex;
  justify-content: flex-start;
}
.schedule-time {
  display: flex;
  flex-flow: column;
  width: 15%;
  max-width: 6rem;
  min-width: 3rem;
}
.schedule-content {
  display: grid;
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  padding-left: 0.25rem;
  margin-left: -0.25rem;

  & .schedule-column {
    min-width: 4rem;
  }
}
.timewindow {
  font-size: 1.25rem;
  height: 7.5vh;
  text-align: center;
  color: $COLOR_LIGHT_TEXT;

  &:not(:first-child) {
    border-top: 2px solid $COLOR_BORDER;
  }
}
.schedule-content-item {
  height: 4.5vh;
  border-radius: 8px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  width: 90%;
  padding: min(1rem, 4%) 4%;
  font-size: 18px;
  position: relative;
  line-height: 20px;
  border: 2px solid $COLOR_BORDER;
  border-radius: 8px;
  color: $COLOR_LIGHT_TEXT;
  cursor: pointer;

  &.favorite {
    box-shadow: 0 0 4px 2px $COLOR_FAVORITE;
  }
}
.length-30-min,
.length-45-min {
  font-size: 16px;
}
.schedule-content-item-title {
  flex-grow: 1;
  text-align: center;
  max-width: 80%;
  min-width: 80%;
  max-height: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
.schedule-time-line {
  width: 60vw;
  position: absolute;
  height: 2px;
  margin-left: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.schedule-time-line-inner {
  width: 100%;
  border: 1px solid rgba($COLOR_PRIMARY, 0.8);
}
.schedule-time-line-header {
  border-radius: 50%;
  padding: 8px;
  background-color: rgba($COLOR_PRIMARY, 0.8);
  border: 1px solid rgba($COLOR_PRIMARY, 0.8);
}
.event-passed {
  opacity: 0.5;
}
.offset-15-min {
  margin-top: 3.5vh !important;
}
.length-0-min {
  margin-top: -3.5vh !important;
  height: 7vh !important;
}
/* Event length */
$event-length: 30;
@while $event-length <= 1000 {
  .length-#{$event-length}-min {
    height: -0.25vh + calc(7.5vh * $event-length / 30);
  }
  $event-length: $event-length + 15;
}
.starts-on-prev-day {
  border-top: none;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
/* Coloring by Category */
.main-event-text {
  color: $COLOR_MAIN_EVENT;
}
.workshop-text {
  color: $COLOR_WORKSHOP;
}
.mini-event-text {
  color: $COLOR_MINI_EVENT;
}
.chat-text {
  color: $COLOR_TECHNI_CHAT;
}
.food-text {
  color: $COLOR_FOOD;
}
.virtual-text {
  color: $COLOR_VIRTUAL;
}
.main-event {
  background-color: $COLOR_MAIN_EVENT;
  border-color: $COLOR_MAIN_EVENT_BORDER;
}
.workshop-event {
  background-color: $COLOR_WORKSHOP;
  border-color: $COLOR_WORKSHOP_BORDER;
}
.mini-event {
  background-color: $COLOR_MINI_EVENT;
  border-color: $COLOR_MINI_EVENT_BORDER;
}
.chat-event {
  background-color: $COLOR_TECHNI_CHAT;
  border-color: $COLOR_TECHNI_CHAT_BORDER;
}
.food-event {
  background-color: $COLOR_FOOD;
  border-color: $COLOR_FOOD_BORDER;
}
.virtual-event {
  background-color: $COLOR_VIRTUAL;
  border-color: $COLOR_VIRTUAL_BORDER;
}
@media only screen and (min-width: 1101px) {
  #schedule {
    padding: 0 1.5rem;
  }
  .schedule-content-item {
    font-size: 14px !important;
    line-height: 17px !important;
  }
  .length-30-min,
  .length-45-min {
    /* font-size: 12px !important; */
    /* line-height: 15px !important; */
    & > .schedule-content-item-title {
      -webkit-line-clamp: 2;
    }
  }
  .timewindow,
  .btn {
    font-size: 17px !important;
  }
}
@media only screen and (min-width: 851px) and (max-width: 1100px) {
  #schedule {
    padding: 0 3rem;
  }
  .schedule-list-title-item {
    font-size: 16px !important;
  }
  .schedule-content-item {
    font-size: 11px !important;
    line-height: 13px !important;
  }
  .length-30-min,
  .length-45-min {
    /* font-size: 8px !important; */
    /* line-height: 10px !important; */
    & > .schedule-content-item-title {
      -webkit-line-clamp: 3;
    }
  }
  .timewindow,
  .btn {
    font-size: 14px !important;
  }
}
@media only screen and (max-width: 850px) {
  .schedule-list-title-item {
    font-size: 14px !important;
  }
  .schedule-content-item {
    font-size: 8px !important;
    line-height: 10px !important;
  }
  .length-30-min,
  .length-45-min {
    /* font-size: 6px !important; */
    /* line-height: 8px !important; */
    & > .schedule-content-item-title {
      -webkit-line-clamp: 4;
    }
  }
  .timewindow,
  .btn {
    font-size: 10px !important;
  }
}
.loading-spinner-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>

<style src="@vueform/multiselect/themes/default.css"></style>
