<!-- this component uses vue3carousel with custom styling, see https://ismail9k.github.io/vue3-carousel/ -->
<template>
  <Header>Hear From Past Hackers!</Header>
  <h2>Testimonies and Projects</h2>
  <Carousel :itemsToShow="3" :wrapAround="true" :transition="500">
    <Slide v-for="slide in slides" :key="slide.hackerName" class="carousel__item">
        <TestimonyCard 
          :hacker-image="slide.hackerImage"
          :hacker-name="slide.hackerName"
          :hacker-desc="slide.hackerDesc"
          :testimony-description="slide.testimonyDescription"
          :project-image="slide.projectImage"
          :project-name="slide.projectName"
          :project-categories="slide.projectCategories"
          :project-description="slide.projectDescription" 
          :has-project="slide.hasProject" />
  
    </Slide>

    <template #addons>
      <Navigation >
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
  <h3>Want to see more of last year's <a href = "https://technica-2023.devpost.com/project-gallery" target="_blank">projects?</a></h3>
</template>

<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel'

const slides = [
  { hackerImage: "/testimonials/aneesa-ayornu.jpg",
    hackerName: "Aneesa Ayornu",
    hackerDesc: "General Track",
    testimonyDescription: "\"I would rate my technica experience as a 10/10. I would rate it like this because the environment was very welcoming and I was able to network with many companies and organizations around the area. I also feel like I was able to meet other underrepresented people in tech  in the DMV and make new friends and get hands on experience with a project.\"",
    hasProject: false},

  { hackerImage: "/testimonials/claire-chen.jpg",
    hackerName: "Claire Chen",
    hackerDesc: "Startup Track",
    testimonyDescription: "\"10/10 experience :)! It was a comfortable experience and it was easy to talk to people and go up to organizers and directors during. The community events like the ice cream social was a nice way to meet new people.\"",
    projectImage: "/testimonials/study-terp-logo.jpg",
    projectName: "Study Terp",
    projectCategories: "Winner: Most Creative Use of GitHub - Technica 2023",
    projectDescription: "Study Terp is a study buddy matchmaker for students at the UMD. Study Terp aims to foster a supportive and collaborative learning environment for every student by connecting them with like-minded peers. Say goodbye to solo study struggles and hello to a brighter, more interactive academic journey.",
    hasProject: true},
  
  { hackerImage: "/testimonials/nia-plair.jpg",
    hackerName: "Nia Plair",
    hackerDesc: "General Track",
    testimonyDescription: "\"Everyone was kind and supportive. I created a website that could report inaccessible areas to show what accommodations are present, which was one of the project themes available at Technica. \"",
    projectImage: "/testimonials/access-bsu.jpg",
    projectName: "AccessBSU",
    projectCategories: "",
    projectDescription: "Accessibility is essential for the campus to be a welcoming and inclusive environment for all people. In this app, students and faculty will be able to see and mark areas in campus that are hazards and lack accommodations, as well as areas that offer accommodations.",
    hasProject: true},

  {hackerImage: "/testimonials/claire-chen.jpg",
    hackerName: "Carolynn Lee",
    hackerDesc: "General Track",
    testimonyDescription: "\"I had a really good friend and found a team for Technica. I’d say that the project I made, based on financial education, was a game similar to quizlet and you could plant your own garden to earn points, with questions about financial education. Over the span of the hackathon, I had a lot of fun and pulled an all-nighter.\"",
    hasProject: false},
]



</script>

<style scoped lang="scss">
/* header styling */

h1 {
  text-align: center;
}

h2 {
  text-align: center;
  color: white;
  font-weight: normal;
  margin-bottom: 2%;
} 

h3 {
  text-align: center;
  color: white;
}

a {
  color: white;
  transition: all 0.25s ease;
}

a:hover {
  color: #c1c9c4;
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
  background-color: transparent;
}
/* right/left button styling */
.arrowButtonRight {
  height: 4rem;
  padding-right: 11vw;
}
.arrowButtonLeft {
  height: 4rem;
  padding-left: 11vw;
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
/* plan is to only make the immediately viewable 3 cards visible */
.carousel__slide--prev {
  opacity: 0.6;
  visibility: visible;
  transform: translateX(9rem) scale(1.5);
}

.carousel__slide--next {
  opacity: 0.6;
  visibility: visible;
  transform: translateX(-9rem) scale(1.5);
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