<!-- Template -->
<template class = notMobileFriendly>
  <Header>What To Do At Technica?</Header>
    <p>Swipe to see more suggestions!</p>
    <Carousel :items-to-show="2" :wrap-around="true" :autoplay="10000000" pause-autoplay-on-hover>
        <Slide v-for="slide in slides" :key="slide.whatToDoTitle">
            <WhatToDoCarouselSlide 
            :what-to-do-img="slide.whatToDoImg"
            :what-to-do-title="slide.whatToDoTitle"
            :what-to-do-desc="slide.whatToDoDesc"
            />
        </Slide>

    <template #addons>
      <Pagination />
    </template>
  </Carousel>
</template>

<script setup lang="ts">

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination } from 'vue3-carousel'

const slides = [
    {
        whatToDoImg: "/what-to-do/learn-new-skill.svg",
        whatToDoTitle: "Learn a New Skill",
        whatToDoDesc: "Technica aims to be a learning experience for everyone by providing" +
                      " fun and informative workshops. Hackers have the option to "   +
                      "attend workshops in order to learn more general tech skills, " +
                      "practice tech skills relevant to their hack, and learn about " +
                      "new career paths and opportunities that they may wish to pursue.",

    },
    {
        whatToDoImg: "/what-to-do/network.svg",
        whatToDoTitle: "Network",
        whatToDoDesc: "Looking to network? Companies are welcome to have recruiters and " +
                      "recruiting materials at their booth at Technica, where they will " +
                      "be able to interact with hackers. There will be a Sponsorship Fair"+ 
                      " in which hackers are encouraged to visit open booths and network" + 
                      " with recruiters, potentially gaining an invitation to apply for " +
                      "openings or even an internship or job offer."
    },
    {
        whatToDoImg: "/what-to-do/submit-project.svg",
        whatToDoTitle: "Submit a Project",
        whatToDoDesc: "Submit your project for prize categories for a chance to win "  +
                      "rewards for you and/or your team provided by Technica and our " + 
                      "sponsors! We have prizes for all kinds of hacks for you and/or" +
                      " your team to win. You might even make some new friends while hacking away!",

    },
]

</script>

<style scoped lang="scss">

p {
  text-align: center;
}

.carousel__slide {
  transition: 0.31s;
  opacity: 0.6;
  scale: 0.5;
  background-color: transparent;
  /* hiding slides by default */
  visibility: hidden; 
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
}


.carousel__slide--sliding {
  transition: 0.7s;
}


.carousel__slide--prev, .carousel__slide--next {
  opacity: 0.6;
  visibility: visible;
  transform: translateX(30rem) scale(1.5);
}

.carousel__slide--next {
  opacity: 0.6;
  visibility: visible;
  transform: translateX(-30rem) scale(1.5);
}

.carousel__slide--active {
  opacity: 1;
  visibility: visible;
  transform: scale(2);
  z-index: 3;
  transition: 0.5s
}

@media (max-width: 992px) {
  .carousel__slide--next, .carousel__slide--prev {
    visibility: hidden;
  }


}
</style>