<template>
  <title>Technica Home</title>
  <div class="main-body">
    <!-- Hero's Section -->
    <HeroLanding />

    <!-- About Technica Section -->
    <div class="container">
      <About />
    </div>

    <!-- What to do at Technica Section -->
    <div class="whatToDo">
      <WhatToDo />
    </div>

    <!-- Hybrid Environment Section -->
    <div class="container hybrid">
      <HybridEnv/>
    </div>

    <!-- Hear From Past Hackers -->
    <div class="container">
      <TestimoniesCarousel class="main-section" />
    </div>

    <!-- Tracks Section -->
    <div class="container">
      <Tracks />
    </div>

    <!-- Additional Info Section -->
    <div class="container">
      <AdditionalInfo />
    </div>

    <!--Keynote Speakers Section -->
    <div class="container">
      <KeynoteSpeakers />
    </div>


    <div class="container">
      <Sponsors />
    </div>

    <div class="container">
      <Header v-if="width <= 768" class=faq>FAQ</Header>
      <Header v-else class=faq>Frequently Asked Questions</Header>
      <FAQ faqId="main" :qaList="qaList" class="main-section" />
    </div>

    <!-- <div class="container">
      <TeamsCarousel/>
    </div> -->
  </div>
  <StickyButton></StickyButton>
</template>

<script setup lang="ts">
import KeynoteSpeakers from '~/components/KeynoteSpeaker/KeynoteSpeakers.vue';
import { computed } from 'vue';
import { useWindowSize } from '@vueuse/core';

// Detect mobile layout based on screen width
const { width } = useWindowSize();
const isMobile = computed(() => width.value <= 768);

const qaList = [
  {
    question: 'What is a "hackathon"?',
    answer:
      'A hackathon is a technology-focused event where individuals and teams work on new projects in a short period of time. You can build anything you want. An app, a robot, a website. The only limit is your imagination!'
  },
  {
    question: 'Why a hackathon for underrepresented genders?',
    answer:
      `People of a variety of genders are underrepresented in the tech world, and it’s up to everyone to change that! Technica’s goal is to create a welcoming environment where people of underrepresented genders can build cool projects and share their stories! You can learn more about gender diversity <a style="color:#4E23AA" href="https://genderrights.org.au/information-hub/what-is-gender-diversity/">here</a>.`
  },
  {
    question: 'Do I need to know how to code?',
    answer:
      'No, you don’t need ANY coding experience to participate! If you do, that’s great! If you don’t, that’s also great! Students of all skill levels are encouraged to attend, even if you’ve never written a line of code. We’re very beginner friendly and are prepared to teach you everything you need to learn right here. We also have a beginners track to further help beginner coders start their tech journey!'
  },
  {
    question: 'Where and when is Technica?',
    answer:
      'Technica 2024 will take place on October 26-27 in The Armory at UMD and virtually via our platform. You choose how you want to join! In-person check-in will begin at 10 AM on Saturday.'
  },
  {
    question: 'Who can attend Technica?',
    answer:
      'Anyone who identifies as a marginalized gender including, but not limited to, cisgender women, transgender women, transgender men, non-binary individuals, gender neutral individuals, genderqueer individuals, agender individuals, pangender individuals, or a gender who is otherwise underrepresented in tech may register as a hacker! All ages are welcome. Additionally, all participants must follow the MLH code of conduct and Technica code of conduct.'
  },
  {
    question: 'How much does it cost to attend Technica?',
    answer:
      'Technica is FREE for all participants, thanks to our amazing sponsors! Participation includes a lot of free gear and swag!'
  },
  {
    question: 'What if I\'m under 18?',
    answer: 'Under 18 and still want to code with us? Don’t worry! <b>Technica is very minor friendly</b>; we have accommodations for participants under 18!'
  },
  {
    question: 'How do I travel to Technica?',
    answer: 'There are many ways to travel to Technica! We will be sending buses to nearby universities which hackers can take to and from Technica. For hackers not within 30 minutes of a bus stop, travel reimbursement will also be available to assist in getting to and from Technica. For more information, check the travel page!'
  },
  {
    question: 'How do teams work?',
    answer: 'You can work on a project on your own, or you can work with a team. Teams can be formed prior to the day of the hackathon with other participants, or at the team formation event before official hacking begins. You can meet other hackers in the Technica 2024 Slack workspace. Weekend-of, we\'ll offer a team formation event in which you can use gotechnica.org/teamformationform to list your preferences and gotechnica.org/teamformationsheet to view potential team members. Team size must not exceed four members, per MLH rules.'
  },
  {
    question: 'What should I bring?',
    answer: 'Some recommended items to bring are a computer, chargers, and a pair of headphones! Bring what you feel will help you stay comfortable during the course of the hackathon, this could be hygiene products, computer peripherals, or a blanket. A detailed list of items to bring can be found in our hacker guide, which will be released early October!'
  },
  {
    question: 'What if I need any accomodations?',
    answer: `If you have any accomodations you feel our organizers should be aware of or other questions or concerns, you can reach out to us at <a style="color:#4E23AA" href="mailto:hello@gotechnica.org">hello@gotechnica.org</a>!`
  },
  {
    question: 'What do I need to register for Technica?',
    answer: 'Registration is open, all you need to do is fill out our registration form!'
  },
  {
    question: 'Are there any COVID-19 policies?',
    answer: 'While vaccination and masking is encouraged, masking will be optional for in-person attendees. Technica offers an online platform for remote participation.'
  },
  {
    question: 'I have an unanswered question',
    answer: 'We’d love to hear from you! Reach out to us at <a href="mailto:hello@gotechnica.org">hello@gotechnica.org</a> and we’ll be in touch soon.'
  }
];

</script>

<style scoped lang="scss">

.container {
  margin-bottom: 5rem;
}

@media screen and (max-width: 630px) {
  .whatToDo {
    visibility: hidden;
  }

  .hybrid {
    margin-top: -60rem;
  }
}
</style>
