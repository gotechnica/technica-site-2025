<!-- this component uses vue3carousel with custom styling, see https://ismail9k.github.io/vue3-carousel/ -->
<template>
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
            <img class="arrowButtonRight" src="/icons/testimonies-next-arrow.svg">
        </template>
        <template #prev>
            <img class="arrowButtonLeft" src="/icons/testimonies-back-arrow.svg">
        </template>
      </Navigation>
      <Pagination />
    </template>
  </Carousel>
  <h3>Want to see more of last year's projects?</h3>
  <div class="button-container">
    <PixelButton text="Devpost" link="https://technica2022.devpost.com/project-gallery" img="purple-button-normal.svg" hover="purple-button-hover.svg" click="purple-button-onclick.svg"/>
  </div>
</template>

<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel'

const slides = [
  { hackerImage: "/testimonials/lin-taylor.jpg",
    hackerName: "Lin Taylor",
    hackerDesc: "General Track",
    testimonyDescription: "\"Huge thanks to Technica for including younger girls. The fact that an 8 year old won a prize this year at Technica has really gotten her and other girls excited about coding, which is important because we’re trying to close the gender gap.\"",
    hasProject: false},

  { hackerImage: "/testimonials/wendy-tu.jpg",
    hackerName: "Wendy Tu",
    hackerDesc: "General Track",
    testimonyDescription: "\"My Technica experience has always been absolutely fantastic; the organizers' friendliness and passion for the event really made a difference from a hacker perspective and the event is just so well executed! It does amazing at creating a space for underrepresented genders and backgrounds in tech, and because of that I would not be where I am now without Technica.\"",
    projectImage: "/testimonials/sensory-umd.png",
    projectName: "SensoryUMD",
    projectCategories: "Winner: Best Hack Promoting Education or Public Health - Bloomberg, Best IoT Product Hack - Qualcomm",
    projectDescription: "A website that informs neurodivergent students at UMD about the different qualities and possible distractors of study spaces around campus.",
    hasProject: true},
  
  { hackerImage: "/testimonials/amelia-talbot.jpg",
    hackerName: "Amelia Talbot",
    hackerDesc: "Beginner Track",
    testimonyDescription: "\"As a freshman who had never coded before, I didn’t think I would be able to contribute anything or create a project at all at Technica. Instead, I learned so much about different technologies and was able to help with some of the major portions of the project. Even better, I bonded with my teammates, who are now my best friends and will remain in my life long after college.\"",
    projectImage: "/testimonials/food-saver.png",
    projectName: "Food Saver",
    projectCategories: "",
    projectDescription: "A mobile app that manages the expiration dates of your groceries and sends push notifications to indicate when foods are about to go bad.",
    hasProject: true},
]

</script>

<style scoped lang="scss">
/* header styling */
h2 {
  text-align: center;
  color: $DARK_PURPLE;
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