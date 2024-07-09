<template>
  <div class="additional-info-container" v-if="mounted">
    <div style="margin-top: 5rem;"></div>
    <Header>Additional Information</Header>
    <div class="cards-container">
      <div class="card" :class="tab.class" v-for="(tab) in AdditionalInfoTabs" :key="tab.index">
        <div class="card-header">{{ tab.title }}</div>
        <div class="card-content">{{ tab.content }}</div>
        <VineButton :text="'Learn More'" :link="tab.link" :img="tab.img" :hover="tab.hover" :click="tab.click" />
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
  { index: 0, img: "green-button-regular.svg", hover: "green-on-click.svg", click: "green-visited.svg", class: "fellows", title: 'Fellowship Program', content: 'The Technica Fellowship Program gives rising college freshman opportunity to work on a coding project impacting Technica. Fellows will gain real industry experience and impact thousands of users!', link: '/fellows', color: '#FFFFFF', displayed: true },
  { index: 1, img: "purple-button-regular.svg", hover: "purple-on-click.svg", click: "purple-visited.svg", class: "mentors", title: 'Mentors and Volunteers', content: 'Bring hackers\' ideas to life by sharing your Technica knowledge or help with event operations at Technica! Anyone 18 years or older and of any gender can volunteer and help make Technica a success!', link: '/mentors-volunteers', color: '#FFFFFF', displayed: false },
  { index: 2, img: "pink-button-regular.svg", hover: "pink-on-click.svg", click: "pink-visited.svg", class: "ambassadors", title: 'Ambassadors', content: 'Technica Campus Ambassadors have the unique opportunity to help foster our community beyond Technica weekend at UMD. As a representative of your school, you\'ll spread the word about Technica 2023 on your campus and promote inclusion in STEM!', link: '/ambassadors', color: '#FFFFFF', displayed: false },
  { index: 3, img: "yellow-button-regular.svg", hover: "yellow-on-click.svg", click: "yellow-visited.svg", class: "travel", title: 'Travel Info', content: 'Need to travel to get to Technica? We got you covered! Technica can reimburse your travel fees or arrange a bus to transport eligible hackers in the United States. Head to our travel page to learn more!', link: '/travel', color: '#FFFFFF', displayed: false },
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

  .card-header {
    -webkit-text-stroke: 1px $DARKGREEN;
    text-shadow: $DARKGREEN;
  }
}

.ambassadors {
  background-color: $LIGHTPINK;
  border: $DARKPINK solid 5px;

  .card-header {
    -webkit-text-stroke: 1px $DARKPINK;
    text-shadow: $DARKPINK;
  }
}

.mentors {
  background-color: $LIGHTPURPLE;
  border: $DARKPURPLE solid 5px;

  .card-header {
    -webkit-text-stroke: 1px $DARKPURPLE;
    text-shadow: $DARKPURPLE;
  }
}

.travel {
  background-color: $LIGHTYELLOW;
  border: $DARKYELLOW solid 5px;

  .card-header {
    -webkit-text-stroke: 2px $DARKYELLOW;
    text-shadow: $DARKYELLOW;
  }
}
</style>
