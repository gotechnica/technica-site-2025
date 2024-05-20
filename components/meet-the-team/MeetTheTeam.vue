<template>
  <div v-if="mounted" class="meet-the-team-wrapper">
    <div class="meet-the-team">
      <div class="meet-the-team-cards">
        <Carousel
          v-if="isMobile"
          :initialCards="cardsMobile"
          :isMobile="isMobile"
          :isShorten="isShorten"
          ref="carouselRef1"
        />
        <div v-else>
          <Carousel
            :initialCards="cardsDesktop1"
            :isMobile="isMobile"
            :isShorten="isShorten"
            ref="carouselRef1"
          />
          <Carousel
            :initialCards="cardsDesktop2"
            :isMobile="isMobile"
            :isShorten="isShorten"
            ref="carouselRef2"
          />
        </div>
      </div>
      <div class="meet-the-team-buttons">
        <img class="prev" @click="prev" src="/icons/left-arrow.svg" />
        <img class="next" @click="next" src="/icons/right-arrow.svg" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Carousel from '~/components/meet-the-team/Carousel.vue';
import {
  cardsDesktop1,
  cardsDesktop2,
  cardsMobile,
} from '~/components/meet-the-team/meet-the-team-cards';
import { useWindowSize } from '@vueuse/core';

// Detect mobile layout based on screen width
const { width } = useWindowSize();
const isMobile = computed(() => {
  return width.value <= 768;
});
const isShorten = computed(() => {
  return width.value <= 1450;
});

// Go to the previous / next carousel screen
const carouselRef1 = ref();
const carouselRef2 = ref();
function prev() {
  carouselRef1.value?.prev();
  carouselRef2.value?.prev();
}
function next() {
  carouselRef1.value?.next();
  carouselRef2.value?.next();
}

// Render component after mount to avoid hydration errors
const mounted = ref(false);
onMounted(() => {
  mounted.value = true;
});
</script>

<style scoped lang="scss">
.meet-the-team-wrapper {
  display: flex;
  justify-content: center;
}

.meet-the-team {
  position: relative;
  width: 100%;
}

.meet-the-team-cards {
  width: 100%;
  border-radius: 2rem;
  overflow: hidden;
}

.meet-the-team-buttons {
  display: flex;
  position: absolute;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 0.5rem;
  top: 0;

  @media screen and (max-width: 768px) {
    align-items: flex-end;
    margin-top: 2.5rem;
  }

  & .prev,
  .next {
    width: 2rem;
    height: 2rem;
    border-radius: 2rem;
    cursor: pointer;
  }
}
</style>
