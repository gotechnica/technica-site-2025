<template>
  <!-- Modify page title in "useHead({ title: })" -->
  <title>Technica</title>
  <div class="main-body" :style="{ backgroundColor: '#272341' }">
    <!-- Hero's Section -->
     <div id="hero">
      <HeroLanding class="hero-section" id="hero"/>
     </div>
    <Header>Thank You For Coming!</Header> 
    <!-- <div class="containers after">
      
    </div> -->

    <!-- DAY OF! -->
    <!-- <div class="container timer">
      <Timer />
    </div> -->

    <!-- <div class="container">
      <Announcements />
    </div> -->

    <!--{ dropdown: true, 
          name: 'Home', 
          path: '/',
          items[
            {name: 'Hero/Top of Page', path:'/#hero'},
            {name: 'About Technica', path:'/#about'},
            {name: 'Our Achievements', path:'/#achievements'},
            {name: 'What to Do at Technica', path:'/#to-do'},
            {name: 'Techni-Environments', path:'/#techni-environments'},  
            {name: 'Hear from Past Hackers', path:'/#past hackers'},
            {name: 'Tracks', path:'/#tracks'},
            {name: 'Additional Information', path:'/#additional-info'},
            {name: 'Keynote Speakers', path:'/keynotes'},
            {name: 'Sponsors', path:'/#sponsors'},
            {name: 'FAQ', path:'/#faq'},
            {name: 'Contact Us', path:'/#contact'},
          ]
        },-->

    <!-- About Technica Section -->
    <div class="container", id="about">
      <About />
    </div>

    <div class="container", id="achievements">
      <Achievements />
    </div>

    <!-- What to do at Technica Section -->
    <div class="whatToDo", id="to-do">
      <WhatToDo />
    </div>

    <!-- Hybrid Environment Section -->
    <div class="container hybrid", id="techni-environments"> 
      <HybridEnv />
    </div>

    <!-- Hear From Past Hackers -->
    <div class="container" id="past-hackers">
      <TestimoniesCarousel class="main-section" />
    </div>

    <!-- Tracks Section -->
    <div class="container", id="tracks">
      <Tracks />
    </div>

    <!-- Additional Info Section -->
    <div class="container", id="additional-info">
      <AdditionalInfo />
    </div>

    <!--Keynote Speakers Section -->
    <div class="container", id="keynotes">
      <KeynoteSpeakers />
    </div>

    <!-- Sponsors Section -->
    <div class="container", id="sponsors">
      <Sponsors />
    </div>
    

    <div class="container">
      <Header v-if="width <= 768" class="faq">FAQ</Header>
      <Header v-else class="faq", id="faq">Frequently Asked Questions</Header>
      <FAQ faqId="main" :qaList="qaList" class="main-section" />
    </div>

    <!-- <div class="container">
      <TeamsCarousel/>
    </div> -->
  </div>
  <StickyButton></StickyButton>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useWindowSize } from '@vueuse/core';
import { ref } from 'vue'
import SponsorsSponsors from '~/components/sponsors/Sponsors.vue'

const isHovered = ref(false)

// Detect mobile layout based on screen width
const { width } = useWindowSize();
const isMobile = computed(() => width.value <= 768);

const qaList = [
  {
    question: 'What is a "hackathon"?',
    answer:
      'A hackathon is a technology-focused event where individuals and teams work on new projects in a short period of time. You can build anything you want. An app, a robot, a website. The only limit is your imagination!',
  },
  {
    question: 'Why a hackathon celebrating underrepresented genders?',
    answer: `People of a variety of genders are underrepresented in the tech world, and it’s up to everyone to change that! Technica’s goal is to create a welcoming environment where hackers can build cool projects and share their stories! You can learn more about gender diversity <a style="color: #F1ADCD" href="https://genderrights.org.au/information-hub/what-is-gender-diversity/">here</a>.`,
  },
  {
    question: 'Do I need to know how to code?',
    answer:
      'No, you don’t need ANY coding experience to participate! If you do, that’s great! If you don’t, that’s also great! Students of all skill levels are encouraged to attend, even if you’ve never written a line of code. We’re very beginner friendly and are prepared to teach you everything you need to learn right here. We also have a beginners track to further help beginner coders start their tech journey!',
  },
  {
    question: 'Where and when is Technica?',
    answer:
      'Technica 2025 will take place from November 15th to November 16th in person at The Mariott College Park, and online via Gather. You can choose how you want to join',
  },
  {
    question: 'Who can attend Technica?',
    answer:
    'While this hackathon does celebrate underrepresented genders, people of all genders are welcome!',
  },
  {
    question: 'How much does it cost to attend Technica?',
    answer:
      'Technica is FREE for all participants, thanks to our amazing sponsors! Participation includes a lot of free gear and swag!',
  },
  {
    question: "What if I'm under 18?",
    answer:
      'Under 18 and still want to code with us? Don’t worry! <b>Technica is very minor friendly</b>; we have accommodations for participants under 18!',
  },
  {
    question: 'How do I travel to Technica?',
    answer:
      'There are many ways to travel to Technica! Travel reimbursement will be available to assist in getting to and from Technica. For more information, check the travel page!',
  },
  {
    question: 'How do teams work?',
    answer:
      "You can work on a project on your own, or you can work with a team. Teams can be formed prior to the day of the hackathon with other participants, or at the team formation event before official hacking begins. You can meet other hackers in the Technica 2025 Slack workspace. Weekend-of, we'll offer a team formation event in which you can use gotechnica.org/teamformationform to list your preferences and gotechnica.org/teamformationsheet to view potential team members. Team size must not exceed four members, per MLH rules.",
  },
  {
    question: 'What should I bring?',
    answer:
      'Some recommended items to bring are a computer, chargers, and a pair of headphones! Bring what you feel will help you stay comfortable during the course of the hackathon, this could be hygiene products, computer peripherals, or a blanket. A detailed list of items to bring can be found in our hacker guide, which will be released early October!',
  },
  {
    question: 'What if I need any accomodations?',
    answer: `If you have any accomodations you feel our organizers should be aware of or other questions or concerns, you can reach out to us at <a style="color: #F1ADCD" href="mailto:hello@gotechnica.org">hello@gotechnica.org</a>!`,
  },
  {
    question: 'What do I need to register for Technica?',
    answer:
      'Online registration is now closed, and there are first come first serve walk-in check-ins starting at 11 am on Saturday!',
  },
  {
    question: 'Are there any COVID-19 policies?',
    answer:
      'While vaccination and masking is encouraged, masking will be optional for in-person attendees. Technica offers an online platform for remote participation.',
  },
  {
    question: 'I have an unanswered question',
    answer:
      'We’d love to hear from you! Reach out to us at <a style="color: #F1ADCD" href="mailto:hello@gotechnica.org">hello@gotechnica.org</a> and we’ll be in touch soon.',
  },
];

// Google stuff + meta tags ~~ ! Update each year ! ~~
useHead({
  title: 'Technica 2025',
  meta: [
    {
      name: 'description',
      content: 'World’s largest hackathon celebrating underrepresented genders',
    },
    {
      property: 'og:title',
      content: 'Technica 2025',
    },
    {
      property: 'og:site_name',
      content: 'Technica',
    },
    {
      property: 'og:description',
      content: 'World’s largest hackathon celebrating underrepresented genders',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:url',
      content: 'https://gotechnica.org/',
    },
  ],
  link: [
    {
      rel: 'icon',
      href: '/logos/favicon.ico',
    },
  ],
});
</script>

<style scoped lang="scss">
.container {
  margin-bottom: 5rem;
}

.hero-section {
  overflow-x: hidden;
} //so that the ghost image doesn't overflow! - didn't work :(

.whatToDo {
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
}

.timer {
  margin-top: -2rem;
  margin-bottom: -10rem;
  width: 70%;
}

.after {
  text-align: center;
  color: white;
  margin-bottom: 20rem;
}
</style>
