<template>
  <div class="flex-container">
    <Environments
      v-for="environment in environments"
      class="flex-item"
      :key="environment.id"
      :circle="environment.circle"
      :color="environment.color"
      :heading="environment.heading"
      :textArray="environment.textArray"
    />
    <div class="line" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const environments = ref([
  {
    id: 1,
    circle: '/environment/in-person.svg',
    color: '#0490BB',
    heading: 'In-Person',
    textArray: [
      'Held at The Hotel at UMD (eligible for hotel rooms if traveling)',
      'Receive swag (such as t-shirts, stickers, etc.)',
      'Visit sponsor booths face to face',
      'Live workshops',
      'Catered food service and snacks',
    ],
  },
  {
    id: 2,
    circle: '/environment/hybrid.svg',
    color: '#7937AE',
    heading: 'Hybrid',
    textArray: [
      'Judging and expo will be held in person',
      'Request mentor for technical help',
      'Resume will be shared with sponsors',
      'Mini events and games',
      'Access event through the Technica virtual platform',
      'Win a prize for hacking categories (Digital gift card only for online hackers)',
    ],
  },
  {
    id: 3,
    circle: '/environment/virtual.svg',
    color: '#D7316E',
    heading: 'Virtual',
    textArray: [
      'Visit sponsor booths virtually',
      'Slack community to make friends and discuss your project',
      'Chat with the Technica community on Discord and Slack',
      'Attend recorded or streamed workshops',
      'Receive swag depending on participation level if based in the U.S.',
    ],
  },
]);
</script>

<style scoped lang="scss">
.flex-container {
  display: flex;
  position: relative;
  justify-content: center;
  margin-top: 1.5rem;
  flex-direction: row;
  background-color: transparent;
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-bottom: 10rem;
  padding: 0;
}
.line {
  position: absolute;
  justify-content: center;
  width: 66%;
  height: 1rem;
  background-color: black;
  top: 5.5rem;
  z-index: -1;
}

.flex-item {
  flex: 1;
}

@media screen and (max-width: 768px) {
  .flex-container {
    display: flex;
    justify-content: center;
    margin-top: 1.5rem;
    flex-direction: column;
    background-color: transparent;
    align-items: center;
  }
  .line {
    visibility: hidden;
  }
}
</style>
