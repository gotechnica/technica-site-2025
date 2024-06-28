<template>
  <div class="additional-info-container" v-if="mounted">
    <Header>Additional Information</Header>
    <div class="cards-container">
      <div class="card" :class="tab.class" v-for="(tab) in AdditionalInfoTabs" :key="tab.index">
        <div class="card-header">{{ tab.title }}</div>
        <div class="card-content">{{ tab.content }}</div>
        <VineButton text="Learn More" link="/register" :img=tab.img :hover=tab.hover :click=tab.click as string/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useWindowSize } from '@vueuse/core';

interface InfoTab {
  index: number;
  title: string;
  content: string;
  link: string;
  color: string;
  displayed: boolean;
  class: string;
  img: string;
  hover: string;
  click: string;
}

const AdditionalInfoTabs: InfoTab[] = [
  { index: 0, img:"green-button-regular.svg", hover:"green-on-click.svg", click:"green-visited.svg", class: "fellows", title: 'Fellowship Program', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', link: '/fellows', color: '#FFFFFF', displayed: true },
  { index: 1, img:"purple-button-regular.svg", hover:"purple-on-click.svg",  click:"purple-visited.svg", class: "mentors", title: 'Mentors and Volunteers', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', link: '/mentors', color: '#FFFFFF', displayed: false },
  { index: 2, img:"pink-button-regular.svg", hover:"pink-on-click.svg", click:"pink-visited.svg", class: "ambassadors", title: 'Ambassadors', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', link: '/ambassadors', color: '#FFFFFF', displayed: false },
  { index: 3, img:"yellow-button-regular.svg", hover:"yellow-on-click.svg", click:"yellow-visited.svg", class: "travel", title: 'Travel Info', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', link: '/travel', color: '#FFFFFF', displayed: false },
];

const mounted = ref(false);
onMounted(() => {
  mounted.value = true;
});

const { width } = useWindowSize();
const isMobile = ref(false);

width.value <= 768 ? (isMobile.value = true) : (isMobile.value = false);
</script>

<style scoped lang="scss">
.additional-info-container {
  display: flex;
  flex-direction: column;
  color: white;
  font-family: 'Poppins';
  margin-bottom: 1rem;
}

.cards-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin: 5rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-left: 5%;
    margin-right: 5%;
  }
}

.card {
  border-radius: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
}

.card-header {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  border: none;
  align-self: baseline;
  padding-left: 0;
  background-color: transparent;
  color: white;
  width: 100%;
  text-align: center;
  font-weight: bold;
}

.card-content {
  font-size: 0.7rem;
  margin-bottom: 0.5rem;
  color: white;
}

.learn-more-button {
  margin-top: 0.7rem;
  background-color: #B097C0;
  color: white;
  font-size: 0.7rem;
  padding: 0.5rem 1.5rem 0.5rem 1.5rem;
  border: none;
  border-radius: 0.5rem;
}

.fellows {
  background-color: $LIGHTGREEN;
  border: $DARKGREEN solid 5px;

  .card-header  {
    -webkit-text-stroke: 1px $DARKGREEN;
    text-shadow: $DARKGREEN;
  }
}
.ambassadors {
  background-color: $LIGHTPINK;
  border: $DARKPINK solid 5px;
  .card-header  {
    -webkit-text-stroke: 1px $DARKPINK;
    text-shadow: $DARKPINK;
  }
}
.mentors {
  background-color: $LIGHTPURPLE;
  border: $DARKPURPLE solid 5px;
  .card-header  {
    -webkit-text-stroke: 1px $DARKPURPLE;
    text-shadow: $DARKPURPLE;
  }
}
.travel {
  background-color: $LIGHTYELLOW;
  border: $DARKYELLOW solid 5px;
  .card-header  {
    -webkit-text-stroke: 2px $DARKYELLOW;
    text-shadow: $DARKYELLOW;
  }
}
</style>
