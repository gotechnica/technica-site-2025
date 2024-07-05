<template>
    <h2>Meet the Team</h2>
    <Carousel :itemsToShow="3" :wrapAround="true" :transition="500">
      <Slide v-for="slide in slides" :key="slide.teamName" class="carousel__item">
          <TeamCard 
            :team-image="slide.teamImage"
            :team-name="slide.teamName"
            :team-desc="slide.teamDesc" />
      </Slide>
  
      <template #addons>
        <Navigation >
          <template #next>
              <img class="arrowButtonRight" src="/icons/teams-next-arrow.svg">
          </template>
          <template #prev>
              <img class="arrowButtonLeft" src="/icons/teams-back-arrow.svg">
          </template>
        </Navigation>
        <Pagination />
      </template>
    </Carousel>
  </template>
  
  <script setup lang="ts">
  import 'vue3-carousel/dist/carousel.css'
  import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel'
  
  const slides = [
  { teamImage: "/teams/card.jpg",
      teamName: "Brand\nTeam",
      teamDesc: "\"Lorem ipsum dolor sit amet consectetur. Tincidunt tortor nunc est urna. Interdum morbi malesuada velit massa facilisi. Est at elementum et aliquet mi.\""},
  { teamImage: "/teams/card.jpg",
      teamName: "Community\nTeam",
      teamDesc: "\"Lorem ipsum dolor sit amet consectetur. Tincidunt tortor nunc est urna. Interdum morbi malesuada velit massa facilisi. Est at elementum et aliquet mi.\""},
  { teamImage: "/teams/card.jpg",
      teamName: "Design\nTeam",
      teamDesc: "\"Lorem ipsum dolor sit amet consectetur. Tincidunt tortor nunc est urna. Interdum morbi malesuada velit massa facilisi. Est at elementum et aliquet mi.\""},
  { teamImage: "/teams/card.jpg",
      teamName: "D&I Team",
      teamDesc: "\"Lorem ipsum dolor sit amet consectetur. Tincidunt tortor nunc est urna. Interdum morbi malesuada velit massa facilisi. Est at elementum et aliquet mi.\""},
  { teamImage: "/teams/card.jpg",
      teamName: "Events\nTeam",
      teamDesc: "\"Lorem ipsum dolor sit amet consectetur. Tincidunt tortor nunc est urna. Interdum morbi malesuada velit massa facilisi. Est at elementum et aliquet mi.\""},
  { teamImage: "/teams/card.jpg",
      teamName: "Experience\nTeam",
      teamDesc: "\"Lorem ipsum dolor sit amet consectetur. Tincidunt tortor nunc est urna. Interdum morbi malesuada velit massa facilisi. Est at elementum et aliquet mi.\""},
  { teamImage: "/teams/card.jpg",
      teamName: "Operations\nTeam",
      teamDesc: "\"Lorem ipsum dolor sit amet consectetur. Tincidunt tortor nunc est urna. Interdum morbi malesuada velit massa facilisi. Est at elementum et aliquet mi.\""},
  { teamImage: "/teams/card.jpg",
      teamName: "Outreach\nTeam",
      teamDesc: "\"Lorem ipsum dolor sit amet consectetur. Tincidunt tortor nunc est urna. Interdum morbi malesuada velit massa facilisi. Est at elementum et aliquet mi.\""},
  { teamImage: "/teams/card.jpg",
      teamName: "Sponsorship\nTeam",
      teamDesc: "\"Lorem ipsum dolor sit amet consectetur. Tincidunt tortor nunc est urna. Interdum morbi malesuada velit massa facilisi. Est at elementum et aliquet mi.\""},
  { teamImage: "/teams/card.jpg",
      teamName: "Tech\nTeam",
      teamDesc: "\"Lorem ipsum dolor sit amet consectetur. Tincidunt tortor nunc est urna. Interdum morbi malesuada velit massa facilisi. Est at elementum et aliquet mi.\""},
      
  ]
  
  </script>
  
  <style scoped lang="scss">
  /* header styling */
  h2 {
    margin-top: 5rem;
    text-align: center;
    color: $DARK_PURPLE;
    height: 3rem;
    font-size: 2.25rem;
    font-weight: 250;
  } 
  
  h3 {
    text-align: center;
    color: #464343;
  }
  /* button styling */
  .button-container {
    display: flex;
    justify-content: center;
    padding: 1.4rem;
  }
  /* carousel styling */
  .carousel {
    justify-content: center;
  }
  
  .carousel__item {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFFBEF;
  }
  /* right/left button styling */
  .arrowButtonRight {
    height: 4rem;
    padding-right: 45vw;
  }
  .arrowButtonLeft {
    height: 4rem;
    padding-left: 45vw;
  }
  
  .carousel__prev,
  .carousel__next {
    box-sizing: content-box;
  }
  
  /* just carousel setup */
  .carousel__viewport {
    perspective: 0;
  }
  
  .carousel__pagination {
    padding: 0;
    padding-bottom: 2.5rem;
  }
  
  .carousel__track {
    transform-style: preserve-3d;
  }
  
  .carousel__slide--sliding {
    transition: 0.7s;
  }
  
  .carousel__slide {
    transition: 0.3s;
    opacity: 0.6;
    scale: 0.5;
    /* hiding slides by default */
    visibility: hidden; 
  }

  /* active card */
  .carousel__slide--active {
    opacity: 1;
    visibility: visible;
    transform: scale(2);
    z-index: 3;
    transition: 0.5s
  }
  /* after this width, too cramped to show all 3 cards */
  @media (max-width: 992px) {
    .carousel__slide--next, .carousel__slide--prev {
      visibility: hidden;
    }
  }
  
  @media (max-width: 450px) {
    h2 {
      font-size: 1.2rem;
      margin-bottom: -10%;
      z-index: 3 !important;
      position: relative;
    }
  }
  
  </style>