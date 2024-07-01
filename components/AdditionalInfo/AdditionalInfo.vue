<template>
  <div class="additional-info-container" v-if="mounted">
    <div class="cards-container">
      <div class="card" v-for="(tab) in AdditionalInfoTabs" :key="tab.index" :style="{ backgroundColor: tab.color }">
        <div class="card-header">{{ tab.title }}</div>
        <div class="card-content">{{ tab.content }}</div>
        <a :href="tab.link" class="learn-more-link">
          <button class="learn-more-button" :style="{ backgroundColor: tab.buttonColor }">
            <img src="/assets/leaf1.png" alt="leaf icon" class="leaf-icon leaf-icon-top-right">
            Learn More
            <img src="/assets/leaf2.png" alt="leaf icon" class="leaf-icon leaf-icon-bottom-left">
          </button>
        </a>
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
  buttonColor: string;
  displayed: boolean;
}

const AdditionalInfoTabs: InfoTab[] = [
  { index: 0, title: 'Fellowship Program', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', link: '/fellows', color: '#FFFFFF', buttonColor: '#6c4a70', displayed: true },
  { index: 1, title: 'Ambassadors', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', link: '/ambassadors', color: '#FFFFFF', buttonColor: '#6c4a70', displayed: false },
  { index: 2, title: 'Mentors and Volunteers', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', link: '/mentors', color: '#FFFFFF', buttonColor: '#6c4a70', displayed: false },
  { index: 3, title: 'Travel Info', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', link: '/travel', color: '#E9CB8D', buttonColor: '#6c4a70', displayed: false },
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
  border-radius: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.card-header {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  text-align: center;
  border: none;
  padding-left: 0;
  background-color: inherit;
}

.card-content {
  font-size: 0.7rem;
  margin-bottom: 0.5rem;
}

.learn-more-link {
  display: flex;
  justify-content: center;
  align-items: center;
}

.learn-more-button {
  position: relative;
  margin-top: 0.7rem;
  color: white;
  font-size: 1rem;
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.leaf-icon {
  position: absolute;
  width: 1.5rem;
  height: 1.5rem;
}

.leaf-icon-top-right {
  top: -0.75rem;
  right: 2rem;
  width: 30%;
}

.leaf-icon-bottom-left {
  bottom: -0.15rem;
  left: -0.15rem;
  width: 20%;
}
</style>
