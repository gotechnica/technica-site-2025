<template>
  <title>Fellows</title>
    <div class="container">
      <div class="row fellow-header">
        <!--<H1 class="title">Virtual Fellowship Program</H1>-->
        <!-- <div class = "header">
          <img src="/headings/header.png">
          <h1>Virtual Fellowship Program</h1>
        </div> -->
        <Header>Virtual Fellowship Program</Header>
        <!-- <h4>
          Work on real-world coding projects for rising college freshman, no
          experience required.
        </h4> -->
        <h4>
          Applications are now closed. Congrats to our fellows!
        </h4>
        <!-- <div class="d-flex justify-content-center button">
          <MainButton
            text="Apply Now!"
            link="https://docs.google.com/forms/d/e/1FAIpQLSeF1wVCqc4y6chQcS_p0ahKHa4b1cqV7pQK7YiOJWSK4Q-9tiQ/viewform"
            gradient
          />
        </div>
        <p>Open until May 31st at 11:59PM EST</p> -->
      </div>
      <div class="row container grid-section">
        <div class="row row-cols-1 row-cols-md-2">
          <div class="col section">
            <h3>About the Program</h3>
            <p>
              The Technica Fellowship Program is a 8-week initiative during June
              26th - August 14th that seeks to democratize access to the tech
              industry. In this program, a group of exceptional students will be
              given the special opportunity to work directly on Technica’s very
              own digital platform. Fellows will gain real industry experience
              working on a real-world technology project that impacts thousands of
              users while making a positive impact on our hackers, volunteers,
              mentors, organizers, and sponsors!<br/><br/>
              The fellowship is designed for <b>rising college freshmen</b> who
              have a demonstrated interest in technology but have not had an
              industry internship yet.
            </p>
          </div>
          <div class="col section">
            <h3>Testimonials</h3>
            <div class="testimonials">
              <div class="carousel">
                <div class="carousel-cards">
                    <Carousel
                    :initialCards="FellowCards"
                    :isMobile="false"
                    :isShorten="isShorten"
                    ref="carouselRef1"
                    />
                </div>
                <div class="buttons">
                    <img class="prev" @click="prev" src="/icons/left-arrow.svg" />
                    <img class="next" @click="next" src="/icons/right-arrow.svg" />
                </div>
              </div>
            </div>
          </div>
          <div class="col section section-req">
            <h3>Application Requirements</h3>
            <ul>
                <li style = "color: white;" v-for="item in items" :key="item">
                {{ item }}
                </li>
            </ul>
          </div>
          <div class="col section">
            <h3>Program Outcomes</h3>
            <p>
                The goal of the fellowship is to give you hands-on experience
                working on a real-world technology project in order to give you a
                leg up in your career, supplemented with a supportive community of
                other underrepresented individuals in tech. Along the way, you'll
                get access to world-class workshops and tutorials to help you get up
                to speed, exclusive networking/career opportunities with our sponsor
                partners, and tons of free food, swag, and MORE!
            </p>
          </div>
        </div> 
      </div>
      <div class="row hearFromFellows">
          <h3>Hear from Our Fellows</h3>
          <div class="fellows-video-container">
              <iframe 
                  class = "fellows-video" 
                  src="https://www.youtube.com/embed/nTnFQEY0xtE"
                  frameborder="0" allowfullscreen>
              </iframe>
          </div>
      </div>
        
      <div class="container">
      <Header v-if="width <= 768" class = faq>FAQ</Header>
      <Header v-else class = faq>Frequently Asked Questions</Header>
      <FAQ faqId="main" :qaList="qaList" class="main-section" />
    </div>

      <StickyButton />
    </div>
</template>
  
<script setup lang="ts">

  import Carousel from '~/components/Fellows/FellowsCarousel.vue';
  import {
      FellowCards,
  } from '~/components/Fellows/FellowsCards';

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
        answer: 'Technica is the world’s largest hackathon for underrepresented genders, hosted annually by students at the University of Maryland.'
      },
      {
        question: 'What is the Technica Fellowship Program?',
        answer: 'The program guides fellows to create a web application that makes an impact across thousands of users. Fellows can expect to gain real industry experience in technologies such as Node.js, Javascript Frameworks, and AWS.'
      },
      {
        question: 'What is the expected time commitment?',
        answer: 'Fellows are expected to dedicate around 10 hours per week.'
      },
      {
        question: 'What is the application process like?',
        answer: 'Potential fellows will undergo an online 15-30 minute interview with a Technica community team member to evaluate their interest in computer science and motivation to participate in the program. There will be no technical questions asked (no technical experience needed for this program)!'
      },
      {
        question: 'Does the fellowship cost money?',
        answer: 'No, the fellowship is completely free to participate in thanks to our generous sponsor partners!'
      },
      {
        question: 'Who should apply to the Fellowship?',
        answer: 'The fellowship is designed for rising college freshmen from DC, Maryland or Virginia who have a demonstrated interest in technology but have not had an industry internship yet. <br><br>The goal of the fellowship is to give you hands-on experience working on a real-world technology project in order to give you a leg up in your career, supplemented with a supportive community of other underrepresented individuals in tech. <br><br>Fellows must identify as an underrepresented gender in tech: women, non-binary, genderqueer, and all others who are marginalized in tech.'
      },
      {
        question: 'When will this happen?',
        answer: 'The Fellowship Program will be an 8-week program, held June 26th to August 14th. We invite our fellows and other interested applicants to Technica for our closing session of the fellowship. The Technica team is excited to release more details about weekend-of soon!'
      },
      {
        question: 'What will the schedule look like?',
        answer: 'Each week fellows will participate in a working session for 2 hours on Sunday to help guide the development of the project. On Tuesday and Thursday, we will offer workshops and bonding events to get to know other students in the cohort!'
      },
      {
        question: 'Do I need to know how to code?',
        answer: 'No prior coding experience is required! We expect all fellows to complete a pre-curriculum for 2 weeks prior to the program kickoff to ensure successful completion of the project.'
      },
      {
        question: 'Where can fellows participate from?',
        answer: 'The fellowship will be conducted online via Zoom!'
      },
      {
        question: 'I have a question that\'s not answered here.',
        answer: 'Please reach out to <a class="email" href="mailto:community@gotechnica.org">community@gotechnica.org</a> and we\'ll get back to you as soon as possible!'
      }
    ];
  
  const items = [
      'Must be a rising college freshman',
      'Identify as an underrepresented gender in tech',
      'From the DC, Maryland, and Virginia area',
      'Able to commit for the whole program'
  ];
</script>

<style scoped lang='scss'>

.title {
  margin: 3.5rem 0 1.5rem 0;
}

.testimonials {
  @media screen and (max-width: 768px) {
    margin-bottom: 15%;
	}
}

.header {
  align-items: center;
  color: #653553;
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
  color: #ffce64;
}

.fellow-header h1 {
  font-size: 26px;
  position: absolute;
  transform: translate(0, -75%);
  top: 50%;
  margin: 0;
}

.fellow-header img {
  width: calc(10rem + 30vw);
}

h3 {
  color: #ffce64;
}

.faq-heading {
  text-align: center;
}

.section {
  margin-top: 3rem;
}

.section-req {
  @media screen and (max-width: 768px) {
    margin-top: 2rem;
  }
}

.grid-section {
  margin: 1rem;
}

.fellows-video {
  width: 55%;
  height: 28vw;
}

.fellows-video-container {
  text-align: center;
  margin-bottom: 1rem;
}

.faq {
  margin-bottom: 6rem;
}

.hearFromFellows{
  text-align: center;
  padding: 1rem;
}

.carousel {
  position: relative;
  width: 100%;
  max-width: 60rem;
}

.carousel-cards {
  width: 100%;
  border-radius: 2rem;
  overflow: hidden;
}

.buttons {
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

@media screen and (max-width: 800px) {
  .header img {
    width: 100%;
  }

  .header h1 {
    font-size: 1.3rem;
    word-wrap: normal;
    padding-top: 0.5rem;
    color: black;
  }
}
</style>
  