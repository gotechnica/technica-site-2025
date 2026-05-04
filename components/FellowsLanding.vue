<template>
  <title>Fellows</title>
  <div>


    <!--Landing-->
    <div class="landing-section">
      <div class="fellows-text">


        <h1 style="font-weight: 1000;">Virtual Fellowship</h1>
        <h2>Program</h2>


        <p>The Technica Fellowship Program is an 9-week initiative,
          running from June to August, designed for students of all skill levels
          — especially those with less technical experience who are eager to grow!


        </p>


        <p>
          <strong> Throughout the program, fellows will:</strong>
        </p>


        <div class="list-container">
          <ul>
            <li>collaborate on a guided technical project</li>
            <li>gain hands-on experience</li>
            <li>develop coding and teamwork skills</li>
            <li>
              build confidence within a supportive, mentorship-based environment
            </li>
          </ul>
        </div>




        <button class="apply-button">
          Apply Now!
        </button>


      </div>


      <div class="fellows-img">
        <img src="" alt="image loading...">


      </div>
    </div>


    <!--weekly schedule-->


    <div class="schedule">
      <h1>Weekly Schedule</h1>


      <div class="week-grid">
        <div class="day-column" v-for="day in days" :key="day">
          <h3>{{ day }}</h3>


          <div class="day-card">
            <p class="session-text" v-if="day === 'Sunday'">
              Project Work Sessions / Technical Workshops:
              Hands-on work on technical projects, guided learning sessions,
              and skill-building workshops.
            </p>


            <p class="session-text" v-if="day === 'Tuesday & Thursday'">
              Professional Development Workshops: Workshops focused on career growth,
              including resume building, interview prep, networking, and tech industry
              insights
            </p>


            <p class="session-text" v-if="day === 'Tuesday & Thursday'">OR</p>


            <p class="session-text" v-if="day === 'Tuesday & Thursday'">


              Bonding Workshops: Fun, interactive workshops designed to build team
              cohesion, foster relationships, and explore topics related to personal
              growth and community building
            </p>


          </div>
        </div>
      </div>
    </div>


    <!--Testimonials-->


    <div class="testimonials-section">


      <h3 class="testimonials-header">Testimonials</h3>


      /*
      <div class="testimonials-grid">
          <!-- <div class="carousel">
            <div class="carousel-cards">
              <Carousel :initialCards="FellowCards" :isMobile="false" :isShorten="isShorten" ref="carouselRef1" />
            </div>
            <div class="buttons">
              <img class="prev" @click="prev" src="/public/icons/left-arrow.svg" />
              <img class="next" @click="next" src="/public/icons/right-arrow.svg" />
            </div>
        </div> -->

        <div class="carousel-img"></div>


        <div class="learning-outcomes">


          <h2>Learning Outcomes</h2>


          <p>
            By the end of the Technica Fellowship Program, fellows will:
          </p>

         <ul>
            <li v-for="outcome in outcomes" :key="outcome">
              {{ outcome }}
            </li>
          </ul>

        </div>


      </div>
    </div>


    <!--Application-->


    <div class="application-section">
      <div class="application-grid">
        <h1>Application Requirements</h1>
        <div class="application-text">
          <strong>To be eligible for the Technica Fellowship Program, applicants must:</strong>
          <ul>
            <li v-for="item in items" :key="item">
              {{ item }}
            </li>
          </ul>


        </div>


      </div>
    </div>






    <!--Past Projects-->




    <!-- 2025 Projects -->
    <div class="projects-section">
      <h3 class="projects-header">2025 Fellowship Projects</h3>
      <!-- add projects-2025 so the 2x2 + non-span override applies -->
      <div class="project-cards projects-2025">
        <div v-for="p in projects2025" :key="p.href" class="project-card" :class="{ 'no-image': !p.img }">
          <img v-if="p.img" :src="p.img" :alt="p.title" class="project-image" loading="lazy" />
          <a :href="p.href" class="project-button" target="_blank" rel="noopener" :aria-label="`Open ${p.title}`">
            <div class="subtitle">View Project — {{ p.title }}</div>
          </a>
        </div>
      </div>
    </div>


    <!--freq asked questions-->


    <div class="freq-questions-section">
      <div class="container">
        <Header v-if="width <= 768" class="faq">FAQ</Header>
        <Header v-else class="faq">Frequently Asked Questions</Header>


        <FAQ faqId="main" :qaList="qaList" class="main-section" />


        <div class="contact">
          <h3>Have Other Questions?</h3>
          <p style="color: white">
            Reach out to
            <b>
              <a style="color: #f1adcd" href="mailto:community@gotechnica.org">
                community@gotechnica.org
              </a>
            </b>
            and we'll get back to you soon!
          </p>
        </div>
      </div>
    </div>


    <StickyButton />






  </div>
</template>


<script setup lang="ts">
import Carousel from '~/components/Fellows/FellowsCarousel.vue';
import { FellowCards } from '~/components/Fellows/FellowsCards';
import Car2 from '~/components/Fellows/Carousel.vue';


const days = [
  'Sunday',
  'Tuesday & Thursday',
]


const isShorten = computed(() => {
  return width.value <= 1400;
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


import { useWindowSize } from '@vueuse/core';


// Detect mobile layout based on screen width
const { width } = useWindowSize();


const qaList = [
  {
    question: 'What is Technica?',
    answer:
      'Technica is the world’s largest hackathon celebrating underrepresented genders, hosted annually by students at the University of Maryland.',
  },
  {
    question: 'What is the Technica Fellowship Program?',
    answer:
      'The program guides fellows to create a web application that makes an impact across thousands of users. Fellows can expect to gain real industry experience in technologies such as Node.js, Javascript Frameworks, and AWS.',
  },
  {
    question: 'What is the expected time commitment?',
    answer: 'Fellows are expected to dedicate around 10 hours per week.',
  },
  {
    question: 'What is the application process like?',
    answer:
      'Potential fellows will undergo an online 15-30 minute interview with a Technica community team member to evaluate their interest in computer science and motivation to participate in the program. There will be no technical questions asked (no technical experience needed for this program)!',
  },
  {
    question: 'Does the fellowship cost money?',
    answer:
      'No, the fellowship is completely free to participate in thanks to our generous sponsor partners!',
  },
  {
    question: 'Who should apply to the Fellowship?',
    answer:
      'The fellowship is designed for rising college freshmen who have a demonstrated interest in technology but have not had an industry internship yet. <br><br>The goal of the fellowship is to give you hands-on experience working on a real-world technology project in order to give you a leg up in your career, supplemented with a supportive community of other individuals in tech.',
  },


  // Updated Q&A
  {
    question: 'When will this happen?',
    answer:
      'The Fellowship Program will be an 8-week program, held from June to August. We invite our fellows and other interested applicants to Technica for our closing session of the fellowship. The Technica team is excited to release more details about weekend-of soon!',
  },
  {
    question: 'What will the schedule look like?',
    answer:
      'Each week fellows will participate in a working session for 2 hours on Sunday to help guide the development of the project. On Tuesday and Thursday, we will offer workshops and bonding events to get to know other students in the cohort!',
  },
  {
    question: 'Do I need to know how to code?',
    answer:
      'No prior coding experience is required! We expect all fellows to complete a pre-curriculum for 2 weeks prior to the program kickoff to ensure successful completion of the project.',
  },
  {
    question: 'Where can fellows participate from?',
    answer: 'The fellowship will be conducted online via Zoom!',
  },
  {
    question: "I have a question that's not answered here.",
    answer:
      'Please reach out to <a style="color:#F1ADCD" href="mailto:community@gotechnica.org">community@gotechnica.org</a> and we\'ll get back to you as soon as possible!',
  },
];


const items = [
  'Be a rising college freshman (starting college in Fall 2025)',
  'Be available for the full duration of the 8-week summer program',
  '(Preferred, but not required): Demonstrated interest in technology (e.g., school clubs, self-led projects, online courses), but no prior industry internship experience',
];


//Learning outcomes is a list so easier to render with v-for and array of data!!
const outcomes = [
  'Gain hands-on experience with software development tools and practices (e.g., GitHub, version control, debugging)',
  'Build a technical project from start to finish, collaborating effectively in teams',
  'Develop problem-solving skills by working through real-world coding challenges',
  'Strengthen communication and feedback skills, learning to present technical work clearly, culminating in a final project showcase',
  'Grow a network of peers, mentors, and organizers for continued support and future opportunities in tech, with insight into next steps like clubs, internships, and personal projects',
];


// 2025 fellowship projects (links only; images optional later)
const projects2025 = [
  {
    title: 'Map Meet',
    href: 'https://github.com/HappyHat952/Map-Meet',
    img: '/fellows/map%20proj.png', // public/fellows/map proj.png
  },
  {
    title: 'Mental Health Dashboard (Technica)',
    href: 'https://github.com/sanyagup/mental-health-dashboard-technica',
    img: '/fellows/2nd%20one.png', // public/fellows/2nd one.png
  },
  {
    title: 'Hackathon Photos (Technica)',
    href: 'https://github.com/fatuma-tahalil/HackathonPhotos-Technica',
    img: '/fellows/hackathon%20photos.png',
  },
  {
    title: 'Mentor Matching',
    href: 'https://mentor-matching-2xei.vercel.app/',
    img: '/fellows/mentor%20matching.png', // public/fellows/mentor matching.png
  },
];
</script>


<style scoped lang="scss">
/* landing page styles */


.landing-section {
  display: grid;
  grid-template-columns: 1fr 0.9fr;
  align-items: center;
  max-width: 1800px;
  /* align-items: center;
  justify-items: center;
  align-content: center;
  justify-content: center; */
  gap: 2rem;
  margin: auto;
  padding: auto;
  background: rgb(255, 255, 255);
}


/* header */


.fellows-text {
  text-align: left;
  padding-left: 100px;
}


.fellows-text h1 {
  color: black;
  font-size: 64px;
  padding: 6rem 1rem 0rem 50px;
}


.fellows-text h2 {
  color: black;
  font-size: 64px;
  padding: 0rem 1rem 1rem 50px;
}


/* paragraph */


.fellows-text p {
  font-size: 21px;
  padding-left: 200px;
  color: black;
  /* top right bottom left */
  padding: 1rem 1rem 1rem 100px;
}


/* list */


.fellows-text ul {
  font-size: 21px;
  color: black;
  padding-bottom: px;
  padding-left: 150px;
  margin-top: 0;


}


.fellows-text li {
  padding-left: 0;
  margin-bottom: 0.5rem;
}


.apply-button {
  background: red;
  color: aliceblue;
  width: 150px;
  height: 50px;
  margin-left: 70px;
  margin-bottom: 70px;
  margin: 70px 0px 70px 70px;
  padding: 0rem 1rem;
  border: none;
}


.fellows-img {
  height: 50%;
  max-width: 100%;
  width: 600px;
  background: rgb(176, 176, 176);
}


/* weekly schedule styles */


.schedule {
  max-width: 1800px;
  margin: 0 auto;
  padding: 10rem 1rem 10rem 1rem;
  background: white;
}


.schedule h1 {
  color: black;
  font-size: 64px;
  text-align: center;
  margin: 0 0 2rem 0;
}


.week-grid {
  display: grid;
  grid-template-columns: repeat(2, 40%);
  gap: 0.5rem;
  justify-content: center;
}


/* name + card */


.day-column {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 0.5rem;
}


.day-column h3 {
  color: black;
  font-size: 24px;
  margin: 0;
}


.day-card {
  width: 100%;
  height: 200px;
  padding: 1rem;
  box-sizing: border-box;
}


/* p */
.session-text {
  font-size: 21px;
  color: black;
  line-height: 1.4;
}


/* testimonials */


.testimonials-section {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 0 5rem;
}


.testimonials-grid {
  display: grid;
  grid-template-columns: 1fr 0.8fr;
  gap: 2rem;
  //padding: 1rem 10rem 5rem 10rem;


}


testimonials {
  overflow: visible;


  @media screen and (max-width: 768px) {
    margin-bottom: 15%;
  }
}


.testimonials-header {
  margin-top: 3rem;
  color: #ffffff;
  text-align: left;
  padding: 0 0 1rem 0rem;
  font-size: 48px;
}


.learning-outcomes {
  display: grid;
  grid-template-rows: repeat(2, 50px);
  gap: 1rem;
  align-content: center;
  justify-content: center;
}


.learning-outcomes h2 {
  font-size: 24px;
  color: white;
}


.learning-outcomes p {
  font-size: 18px;
  color: #ffffff;


}


.learning-outcomes ul {
  font-size: 16px;
  color: #ffffff;
  align-content: center;
}


/* Application */


.application-section {
  width: min(100% - 4rem, 1200px);
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 0 5rem 0;


}


.application-grid {
  display: grid;
  grid-template-rows: repeat(2, 70px);
  gap: 1rem;
  justify-items: left;
}


.application-section h1 {
  font-size: 48px;
  color: white;
}


.application-text {
  color: white;
  font-size: 18px;
  max-width: 1000px;
  padding: 0rem 1rem 1rem 50px;
}


.application-text ul {
  font-size: 16px;
  padding: 1rem;
  color: #ffffff;
}


.application-text p {
  font-size: 18px;
  color: white;
}


/* past projects */


.projects-section {
  width: min(100% - 4rem, 1200px);
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 0 5rem 0;
}


.projects-header {
  font-size: 48px;
  color: white;
  text-align: center;
  padding-top: 5rem;
  padding-bottom: 5rem;
}


  /* Show subtitle on hover */
  .project-card:hover .subtitle {
    transform: translateY(0);
    opacity: 1;
  }


  /* Minimal fallback style for new 2025 cards without images */
  .project-card.no-image {
    background: linear-gradient(135deg,
        rgba(166, 225, 255, 0.18),
        rgba(205, 189, 255, 0.18));
    backdrop-filter: blur(2px);
  }


  /* Always show title on no-image cards so they never look blank */
  .project-card.no-image .subtitle {
    background-color: rgba(10, 12, 20, 0.65);
    transform: translateY(0);
    opacity: 1;
  }


  /* Keep the 2025 grid tight (2x2) and don't span the last card */
  .projects-2025 {
    grid-template-rows: repeat(2, 200px);
  }


  .projects-2025 .project-card:last-child {
    grid-column: auto;
    width: 100%;
  }


  .project-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  /* ensures 2 rows */
  gap: 2rem;
  width: 80%;
  margin: 0 auto;
  justify-items: center;
  align-items: center;
  padding-bottom: 5rem;


  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    /* stack vertically on mobile */
    grid-template-rows: auto;
  }
}


.project-card {
  width: 100%;
  max-width: 450px;
  height: 200px;
  background: linear-gradient(135deg,
      rgba(166, 225, 255, 0.18),
      rgba(205, 189, 255, 0.18));
  border-radius: 1rem;
  border: 1px solid #cadaea;
  box-shadow: 0 4px 12px rgba(202, 218, 234, 0.7);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  overflow: hidden;
  position: relative;
}


.project-button {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  text-decoration: none;
  color: inherit;
  z-index: 0;
}


.project-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  z-index: 0;
}


.project-card:last-child {
  grid-column: 1 / -1;
  justify-self: center;
  width: 50%;


  @media (max-width: 600px) {
    width: 100%;
  }
}


.subtitle {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  color: rgb(226, 226, 226);
  padding: 10px;
  text-align: center;
  font-size: 0.9rem;
  transform: translateY(100%);
  opacity: 0;
  transition: all 0.3s ease;
}


/* freq questions */


.freq-questions-section {
  width: min(100% - 4rem, 1200px);
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 0 5rem 0;
}


.contact {
  color: white;
  padding-top: 5rem;
  text-align: center;
}


/* other */




.list-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem;
}


.ul li {
  padding: 2rem;
  align-content: center;
}


.fellows-video {
  width: 55%;
  height: 28vw;
}


.fellows-video-container {
  text-align: center;
  margin-bottom: 1rem;
}


.carousel {
  position: relative;
  width: 80vh;
  max-width: 650px;
  z-index: 1;
}


.carousel-cards {
  width: 100%;
  border-radius: 2rem;
  overflow: hidden;
}




.header {
  align-items: center;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  text-align: center;
}


.header img {
  width: 66%;
}


.fellow-header {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 0;
  padding-top: 100px;
}


.fellow-header h4 {
  color: #ffffff;
}


.fellow-header h1 {
  font-size: 26px;
  position: absolute;
  transform: translate(0, -75%);
  top: 50%;
  margin: 0;
}

@media screen and (max-width: 800px) {
  .header img {
    width: 100%;
  }


  .body {
    background-color: aqua;
  }


  .header h1 {
    font-size: 1.3rem;
    word-wrap: normal;
    padding-top: 0.5rem;
    color: black;
  }

  
}
</style>