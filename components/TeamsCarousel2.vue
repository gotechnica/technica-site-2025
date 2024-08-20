<template>
  <!-- <div style="margin-top: 5rem;"></div> -->
  <Header>Meet the Team</Header>
  <Carousel :itemsToShow="1" :wrapAround="true" :transition="650">
    <Slide v-for="(team, index) in teams" :key="index">
      <TeamCard2 :team="team" />
    </Slide>

    <template #addons>
      <Navigation>
        <template #next>
          <img class="arrowButtonRight" src="/testimonials/right-arrow.svg">
        </template>
        <template #prev>
          <img class="arrowButtonLeft" src="/testimonials/left-arrow.svg">
        </template>
      </Navigation>
      <Pagination />
    </template>
  </Carousel>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TeamCard2 from './TeamCard2.vue';
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel';

const teams = ref([
  {
    photo: 'team-photo.png',
    name: 'Brand Team',
    description: 'Team Desc.',
  },
  {
    photo: 'team-photo.png',
    name: 'Community Team',
    description: 'Team Desc.',
  },
  {
    photo: 'team-photo.png',
    name: 'Design Team',
    description: 'Team Desc.',
  },
  {
    photo: 'team-photo.png',
    name: 'Diversity & Inclusion Team',
    description: 'Team Desc.',
  },
  {
    photo: 'team-photo.png',
    name: 'Events Team',
    description: 'Team Desc.',
  },
  {
    photo: 'team-photo.png',
    name: 'Experience Team',
    description: 'Team Desc.',
  },
  {
    photo: 'team-photo.png',
    name: 'Operations Team',
    description: 'Team Desc.',
  },
  {
    photo: 'team-photo.png',
    name: 'Outreach Team',
    description: 'Team Desc.',
  },
  {
    photo: 'team-photo.png',
    name: 'Sponsorship Team',
    description: 'Team Desc.',
  },
  {
    photo: 'team-photo.png',
    name: 'Tech Team',
    description: 'Team Desc.',
  },
]);
</script>

<style scoped lang="scss">
.carousel__slide {
  background-color: transparent;
}

@media (max-width: 630px) {
  // .carousel__slide {
  //   visibility: hidden;
  // }

  // .carousel {
  //   visibility: hidden;
  // }

  // .header {
  //   visibility: hidden;
  // }
}

@media (max-width: 400px) {}
</style>