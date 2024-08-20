<template>
  <div class="container">
    <Header>Meet the Team</Header>
    <Carousel
      :perPage="1"
      :navigation="true"
      :pagination="false"
      :autoplay="false"
      :loop="true"
    >
      <Slide v-for="(team, index) in teams" :key="index">
        <TeamCard2 :team="team" />
      </Slide>
      <Navigation />
      <Pagination />
    </Carousel>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TeamCard2 from './TeamCard2.vue';
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel';

const teams = ref([
  { photo: 'team-photo1.png', name: 'Design Team', description: 'Lorem ipsum dolor sit amet consectetur. Tincidunt tortor nunc est urna. Interdum morbi malesuada velit massa facilisi. Est at elementum et aliquet mi.' },
  { photo: 'team-photo2.png', name: 'Development Team', description: 'Lorem ipsum dolor sit amet consectetur. Tincidunt tortor nunc est urna. Interdum morbi malesuada velit massa facilisi. Est at elementum et aliquet mi.' },
  // Add more team objects as needed
]);
</script>

<style scoped lang="scss">
.container {
  text-align: center;
  margin: auto;
  width: 80%;
}

.carousel {
  width: 100%;
}

.carousel-button {
  background-color: transparent;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
}

.carousel-button.prev {
  left: -2rem;
}

.carousel-button.next {
  right: -2rem;
}

@media screen and (max-width: 768px) {
  .container {
    width: 100%;
  }

  .carousel-button.prev {
    left: -1rem;
  }

  .carousel-button.next {
    right: -1rem;
  }
}

@media screen and (max-width: 400px) {
  .carousel-button.prev {
    left: -0.5rem;
  }

  .carousel-button.next {
    right: -0.5rem;
  }
}
</style>