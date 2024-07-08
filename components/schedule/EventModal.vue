<!-- Modal containing event information -->
<template>
    <VueFinalModal class="event-modal" :content-class="`event-modal-content ${event?.category}-event`"
        overlay-transition="vfm-fade" content-transition="vfm-fade">
        <div class="event-modal-header">
            <h1 class="event-title">
                {{ event?.name }}
                <img v-if="isFavorite" class="favorite-button" src="/icons/star-solid.svg"
                    @click="$emit('unfavorite', event?.name)" />
                <img v-else class="favorite-button" src="/icons/star-regular.svg"
                    @click="$emit('favorite', event?.name)" />
            </h1>
            <img class="close-modal-button" src="/icons/plus.svg" @click="$emit('close')" />
        </div>
        <div class="event-modal-body">
            <p class="event-category">{{ formatCategory(event?.category) }}</p>
            <div>
                <p class="event-time">
                    {{
        formatTime(
            event?.prevDayStartTime ?? event?.startTime,
            event?.endTime
        )
    }}
                </p>
                <a v-if="isLink(event?.location)" class="event-location-link" :href="locationMap.get(event?.location!)"
                    target="_blank">
                    <span class="event-location">{{
        event?.location || 'Location TBD'
    }}</span>
                </a>
                <p v-else class="event-location">
                    {{ event?.location || 'Location TBD' }}
                </p>
            </div>
            <p class="event-description" :class="{ empty: !event?.description }">
                {{ event?.description }}
            </p>
        </div>
    </VueFinalModal>
</template>
<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal';
import dayjs from 'dayjs';
import type { Event } from './event';
defineProps<{
    isFavorite: boolean;
    event?: Event;
}>();
const locationMap = new Map([
    ['Virtual A', 'https://gotechnica.org/virtuala'],
    ['Virtual B', 'https://gotechnica.org/virtualb'],
    [
        'Gather',
        'https://app.gather.town/app/2x7GW9NhurfCG9pf/Technica%202023-2024?spawnToken=QI7w-uGPQl2TDjSy4kcz',
    ],
]);
function isLink(location?: string) {
    return location && locationMap.has(location);
}
function formatCategory(category: string | undefined) {
    if (!category) return '';
    switch (category) {
        case 'main':
            return 'Main Event';
        case 'workshop':
            return 'Workshop';
        case 'mini':
            return 'Mini-Event';
        case 'chat':
            return 'Techni-Chat';
        case 'food':
            return 'Food';
        case 'virtual':
            return 'Virtual Event';
        default:
            return '';
    }
}
function formatTime(startTime?: string, endTime?: string) {
    if (!startTime || !endTime) return;
    const formattedStartDay = dayjs(startTime).format('dddd');
    const formattedStartTime = dayjs(startTime).format('h:mm A');
    const formattedEndDay = dayjs(endTime).format('dddd');
    const formattedEndTime = dayjs(endTime).format('h:mm A');
    const formattedStart = `${formattedStartDay}, ${formattedStartTime}`;
    const formattedEnd = `${formattedStartDay !== formattedEndDay && formattedEndTime !== '12:00 AM'
            ? `${formattedEndDay}, `
            : ''
        }${formattedEndTime}`;
    return `${formattedStart} - ${formattedEnd}`;
}
</script>
<style lang="scss">
@import '../../assets/styles/_schedule.scss';
.event-modal {
    display: flex;
    justify-content: center;
    align-items: center;
    color: $COLOR_LIGHT_TEXT;
}
.event-modal-content {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    border-style: solid;
    border-radius: 0.5rem;
    border-width: 0.25rem;
    box-shadow: 0.3rem 0.3rem 0.7rem rgba(black, 0.5);
    width: 50rem;
    margin: 2rem;
    &.main-event {
        background-color: $COLOR_MAIN_EVENT;
        border-color: $COLOR_MAIN_EVENT_BORDER;
    }
    &.workshop-event {
        background-color: $COLOR_WORKSHOP;
        border-color: $COLOR_WORKSHOP_BORDER;
    }
    &.mini-event {
        background-color: $COLOR_MINI_EVENT;
        border-color: $COLOR_MINI_EVENT_BORDER;
    }
    &.chat-event {
        background-color: $COLOR_TECHNI_CHAT;
        border-color: $COLOR_TECHNI_CHAT_BORDER;
    }
    &.food-event {
        background-color: $COLOR_FOOD;
        border-color: $COLOR_FOOD_BORDER;
    }
    &.virtual-event {
        background-color: $COLOR_VIRTUAL;
        border-color: $COLOR_VIRTUAL_BORDER;
    }
}
.event-modal-content>*+* {
    margin: 0.5rem 0;
}
.event-modal-header {
    display: flex;
    gap: 1rem;
}
.favorite-button {
    min-width: 2rem;
    min-height: 2rem;
    max-width: 2rem;
    max-height: 2rem;
    margin-top: -0.5rem;
    margin-left: 0.5rem;
    cursor: pointer;
}
.close-modal-button {
    min-width: 2rem;
    min-height: 2rem;
    max-width: 2rem;
    max-height: 2rem;
    transform: rotate(45deg);
    cursor: pointer;
    transition: opacity 0.2s;
    &:hover {
        opacity: 0.5;
    }
}
.event-title {
    flex: 1;
    display: inline;
    margin-bottom: 0.25rem;
}
.event-category {
    font-size: 1.125rem;
    color: rgba($COLOR_LIGHT_TEXT, 0.9);
    margin-top: -0.25rem;
    margin-bottom: 1rem;
}
.event-time {
    font-size: 0.875rem;
    color: rgba($COLOR_LIGHT_TEXT, 0.8);
    margin-bottom: 0.25rem;
}
.event-location-link {
    color: rgba($COLOR_LIGHT_TEXT, 0.8);
}
.event-location {
    margin-bottom: 0;
    font-size: 0.875rem;
    color: rgba($COLOR_LIGHT_TEXT, 0.8);
}
.event-description {
    margin-top: 1rem;
    font-size: 1rem;
    margin-bottom: 0;
    &.empty {
        margin-top: 0;
    }
}
</style>