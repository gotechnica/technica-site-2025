<template>
  <div class="additional-info-container" v-if="mounted">
    <div class="cards-container">
      <div class="card" v-for="(tab) in AdditionalInfoTabs" :key="tab.index">
        <div class="card-header">{{ tab.title }}</div>
        <div class="card-content">{{ tab.content }}</div>
        <PixelButton class="learn-more-button" text="Learn more" textColor="gray" :link="tab.link" />
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
}

const AdditionalInfoTabs: InfoTab[] = [
  { index: 0, title: 'Fellowship Program', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', link: 'fellows', color: '#FFFFFF', displayed: true },
  { index: 1, title: 'Ambassadors', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', link: 'ambassadors', color: '#FFFFFF', displayed: false },
  { index: 2, title: 'Mentors and Volunteers', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', link: 'mentors', color: '#FFFFFF', displayed: false },
  { index: 3, title: 'Travel Info', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', link: 'travel', color: '#FFFFFF', displayed: false },
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
  }
}

.card {
  background-color: #D9D9D9;
  border-radius: 1rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.card-header {
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  text-align: left;
}

.card-content {
  font-size: 0.7rem;
  margin-bottom: 0.5rem;
}

.learn-more-button {
  margin-top: auto;
}
</style>
