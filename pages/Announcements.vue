<template>
    <div class="announcements-container">
        <h1 class="title">
        Time Left to Hack
        </h1>
        <client-only placeholder="loading...">
        <vue-countdown
            :time="timeLeft"
            v-slot="{ hours, minutes, seconds }"
        >
            <h1 class="countdown">{{ hours }} Hours {{ minutes }} Minutes</h1>
        </vue-countdown>
        </client-only>

        <div class="progress-bar" data-label="">
            <div class="gradient-bar">
                <img class="progress-heart" src="/announcements/heart.png">
            </div>
        </div>
        <div class="row">
        <div class="col-lg-7 mb-5">
            <div class = "card">
                <h4 class="section-title">Event Bulletin</h4>
                <div class = "content">
                    <EventCard
                        v-for="(event, index) in events"
                        :startTime="event.startTime"
                        :title="event.name"
                        :description="event.description"
                        :color="colors[index % 3]"
                    />
                </div>
            </div>
        </div>
        <div class="col-lg-5">
            <div class = "card">
                <h4 class="section-title">Announcements</h4>
                <div class = "content">
                    <template v-if="announcements.length > 0">
                        <div
                        class="announcement-item"
                        v-for="announcement in announcements">
                        <h5 v-html="announcement.text"></h5>
                        </div>
                    </template>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>
  
<script setup lang="ts">

import VueCountdown from '@chenfengyuan/vue-countdown';

definePageMeta({
  layout: "nonav",
});

interface Event {
    name: string
    description: string 
    category: string 
    location: string 
    startTime: string 
    endTime: string
}

interface Announcement {
    id: string
    text: string
    timestamp: Date
}

// $DARK_PURPLE: #4E23AA;

const { performGetRequest, getEnvVariable } = useUtils();

const timeLeft = new Date("2023-10-22T15:15:00Z").getTime() - new Date().getTime()
const announcements = ref<Announcement[]>([])
const events = ref<Event[]>([])
const endDate = new Date("2023-10-22T23:00:00Z")
const colors = ["#D7316E", "#7937AE", "#0490BB"]
const config = useRuntimeConfig();
let startDate = new Date()
let timer: ReturnType<typeof setInterval> 

function parseEventName (eventName: String) {
    let category, name
    const regex = /\[.*\]/
    const matches = eventName.match(regex)
    if (matches) {
        // eventName in format: '[Workshop] Event Name'
        category = matches[0].slice(1, -1)
        name = eventName.slice(eventName.indexOf(']') + 1).trim()
    } else {
        // eventName in format: 'Workshop Event Name'
        category = eventName.slice(0, eventName.indexOf(' '))
        name = eventName.slice(eventName.indexOf(' ') + 1)
    }
    category = `${category.toLowerCase()}-event`
    return { category, name }
}
async function getAnnouncements() {
    let response: any = await performGetRequest(
        'https://api.alpha.gotechnica.org/',
        'admin/announcements-inperson',
    );
    const formattedAnnouncements: Announcement[] = Object.values(response)[3] as Announcement[];
    // sort the ISO time strings lexicographigally in descending order
    formattedAnnouncements.sort((a1: any, a2: any) => String(a2.timestamp).localeCompare(String(a1.timestamp)));
    announcements.value = formattedAnnouncements;
    console.log(announcements)
}

async function getEvents() {
    try {
        // fetch events from Google Calendar
        const calendarID = config.public.calendarID 
        const googleApiKey = config.public.googleApiKey

        const eventsRes = await fetch(
        'https://www.googleapis.com/calendar/v3/calendars/' + calendarID +
        '/events?key=' + googleApiKey +
        '&singleEvents=true&orderBy=startTime&timeMin=' + startDate.toISOString() +
        '&timeMax=' + endDate.toISOString()
        )
        
        const eventsBody = await eventsRes.json()
        events.value = eventsBody.items.map((event: any) => {
            // const name = event.summary
            const { category, name } = parseEventName(event.summary)
            const description = event.description
            const location = event.location
            const endTime = event.end.dateTime
            let startTime = new Date(event.start.dateTime).toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
            });

            return { name, description, category, location, startTime, endTime }
        })

        console.log(events)
    } catch (error) {
        console.log(error)
        events.value = []
    }
}

onMounted(() => {
    getAnnouncements()
    getEvents()

    timer = setInterval(() => {
        startDate = new Date()
        getAnnouncements()
        getEvents()
        
        const progressBar: any = document.querySelector('.progress-bar')
        const startTime = new Date("2023-10-21T16:00:00Z").getTime()
        const endTime = new Date("2023-10-22T15:15:00Z").getTime()

        if (progressBar != null) {
            let time = (new Date().getTime() - startTime) / (endTime - startTime)
            progressBar.style.setProperty('--width', time)
        }
    }, 10000)
})

onUnmounted(() => {
    clearInterval(timer)
})

</script>
  
<style lang="scss" scoped>
@import '~/assets/styles/_variables.scss';


.section-title {
    padding: 1rem;
    font-size: 300%;
    text-align: center;
    color: $DARK-PURPLE;
}

.announcements-container {
    margin: 0 auto;
    width: 95%;
    margin-top: 3%;
}

.title {
    font-size: 3rem;
    text-align: center;
    color: $PINK;
    position: relative;
    text-decoration: underline;
}

.countdown {
    position: relative;
    color: $DARK_PURPLE;
}

.announcement-item {
    border-top: 3px solid $GOLD;
    padding: 3%;
    color: black;
    
}

.announcement-item h5 {
    font-weight: bold;
}
.content {
    overflow-y: scroll;
    height: 75vh;
    border-radius: 0px 0px 8px 8px;
}

.content {
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */
}
.content::-webkit-scrollbar {
    display: none;  /* Safari and Chrome */
}

h1 {
    text-align: center;
    font-size: 525%;
}

h5 {
    font-size: 150%;
}
.card {
    border-radius: 15px !important;
    border: 7px solid $GOLD;
    background-color: transparent;
}

figure {
    margin: 0;
}

.progress-bar {
    width: 90%;
    height: 3em;
    border: #402C69 0.5em solid;
    border-radius: 1.5em;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 3%;
    position: relative;
}

.gradient-bar {
    display: flex;
    align-items: center;
    position: absolute;
    left: 0.5em;
    top: 0.3em;
    bottom: 0.3em;
    width: calc(100% - var(--width, 0) * 100%);
    min-width: 1.5em;
    max-width: calc(100% - 1.5em);
    background: linear-gradient(.25turn, #00FFFF, #B6A1C4, #FF7BAC);
    border-radius: 1em;
}

.progress-heart {
    width: 2em;
    position: absolute;
    right: 0;   
    transform: translate(0.7em);
}

@media (max-width: 1200px) {
    .section-title {
        font-size: 225%;
    }
}

@media (max-width: 991px) {
    h1 {
        font-size: 300%;
    }
}
</style>
  