<template>
  <div class="carousel-header">
    <div class="header-image-wrap">
      <img src="/testimonials/newheader.svg" alt="Decorative header" />
      <h2 class="overlay-text">Hear from Past Hackers</h2>
    </div>
  </div>

  <Carousel
    :itemsToShow="3"
    :wrapAround="true"
    :transition="500"
    v-model="currentSlide"
  >
    <Slide
      v-for="(slide, index) in slides"
      :key="slide.hackerName"
      class="carousel__item"
      @click="currentSlide = index"
    >
      <TestimonyCard
        :hacker-image="slide.hackerImage"
        :hacker-name="slide.hackerName"
        :hacker-desc="slide.hackerDesc"
        :testimony-description="slide.testimonyDescription"
        :project-image="slide.projectImage"
        :project-name="slide.projectName"
        :project-categories="slide.projectCategories"
        :project-description="slide.projectDescription"
        :has-project="slide.hasProject"
      />
    </Slide>

    <template #addons>
      <Pagination />
    </template>
  </Carousel>

  <h3>
    Want to see more of last year's
    <a href="https://technica-2024.devpost.com/project-gallery" target="_blank">
      projects?
    </a>
  </h3>
</template>

<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination } from 'vue3-carousel'
import { ref } from 'vue'

const currentSlide = ref(0)


const slides = [
  {
    hackerImage: '/testimonials/aneesa-ayornu.jpg',
    hackerName: 'Aneesa Ayornu',
    hackerDesc: 'General Track',
    testimonyDescription:
      '"I would rate my technica experience as a 10/10. I would rate it like this because the environment was very welcoming and I was able to network with many companies and organizations around the area. I also feel like I was able to meet other underrepresented people in tech  in the DMV and make new friends and get hands on experience with a project."',
    hasProject: false,
  },
  {
    hackerImage: '/testimonials/claire-chen.jpg',
    hackerName: 'Claire Chen',
    hackerDesc: 'Startup Track',
    testimonyDescription:
      "\"Technica is one of THE top ten experiences for students. Each year, I've learned and had the opportunity to grow in many areas beyond tech. Through Technica, I've met an amazing, intellectual, and motivated community of individuals that continue to inspire me everyday. I'm very grateful for these opportunities and I'm super excited to be organizing this year's hackathon!\"",
    projectImage: '/testimonials/study-terp-logo.jpg',
    projectName: 'Study Terp',
    projectCategories: 'Winner: Most Creative Use of GitHub - Technica 2023',
    projectDescription:
      'Study Terp is a study buddy matchmaker for students at the UMD. Study Terp aims to foster a supportive and collaborative learning environment for every student by connecting them with like-minded peers. Say goodbye to solo study struggles and hello to a brighter, more interactive academic journey.',
    hasProject: true,
  },
  {
    hackerImage: '/testimonials/nia-plair.jpg',
    hackerName: 'Nia Plair',
    hackerDesc: 'General Track',
    testimonyDescription:
      '"Everyone was kind and supportive. I created a website that could report inaccessible areas to show what accommodations are present, which was one of the project themes available at Technica. "',
    projectImage: '/testimonials/access-bsu.jpg',
    projectName: 'AccessBSU',
    projectCategories: '',
    projectDescription:
      'Accessibility is essential for the campus to be a welcoming and inclusive environment for all people. In this app, students and faculty will be able to see and mark areas in campus that are hazards and lack accommodations, as well as areas that offer accommodations.',
    hasProject: true,
  },
  {
    hackerImage: '/testimonials/placeholder.jpg',
    hackerName: 'Carolyn Lee',
    hackerDesc: 'General Track',
    testimonyDescription:
      '"I had a really good friend and found a team for Technica. I’d say that the project I made, based on financial education, was a game similar to quizlet and you could plant your own garden to earn points, with questions about financial education. Over the span of the hackathon, I had a lot of fun and pulled an all-nighter."',
    hasProject: false,
  },
]
</script>

<style scoped lang="scss">
.carousel-header {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.2rem;

  .header-image-wrap {
    position: relative;
    display: inline-block;
    text-align: center;

    img {
      width: 300px;
      display: block;
      margin: 0 auto;
    }

    .overlay-text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      font-size: 1.8rem;
      font-weight: 500;
      pointer-events: none;
      white-space: nowrap;
    }
  }
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

.carousel__item {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  cursor: pointer;
  margin-top: -1;
}

.carousel__pagination {
  padding: 0;
  padding-bottom: 0.25rem;
}

.carousel__slide {
  transition: 0.3s;
  opacity: 0.6;
  scale: 0.5;
  visibility: hidden;
}

.carousel__slide--prev {
  opacity: 0.6;
  visibility: visible;
  transform: translateX(4rem) scale(1.2);
}

.carousel__slide--next {
  opacity: 0.6;
  visibility: visible;
  transform: translateX(-4rem) scale(1.2);
}

.carousel__slide--active {
  opacity: 1;
  visibility: visible;
  transform: scale(2);
  z-index: 3;
  transition: 0.5s;
}

@media (max-width: 992px) {
  .carousel__slide--next,
  .carousel__slide--prev {
    visibility: hidden;
  }
}

@media (max-width: 450px) {
  .carousel-header .header-image-wrap img {
    width: 220px;
  }

  .carousel-header .header-image-wrap .overlay-text {
    font-size: 1.3rem;
  }

  h3 {
    font-size: 1rem;
  }
}
</style>
