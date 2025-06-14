<template>

  <title>Mentors and Volunteers</title>
  <div class="container">

    <!-- HEADER BANNER -->
    <div style="margin-top: 5rem;"></div>
    <Header>Mentors and Volunteers</Header>

    <!-- DESCRIPTION -->
    <div style="margin-top: 2rem;"></div>
    <p>
      Join us in running Technica and helping hackers during the event! 
      Gain valuable experience while applying your skills for the world's 
      largest hackathon for underrepresented genders. 
      <b>Must be 18+ to sign up.</b> People of all genders are welcome!
    </p>

    <!-- MENTOR AND VOLUNTEER INFO COLUMNS -->
    <div class="row">

      <!-- MENTORS COL -->
      <div class="col">
        <h3>Mentors</h3>
        <div class="button">
          <VineButton text="Mentor" link="https://docs.google.com/forms/d/e/1FAIpQLSdTVezrN2UWKsXpJPDXKL7w4jA61BLbKvhYiUDdIhicpPWB_g/viewform?usp=dialog" img="yellow-button-regular.svg"
            hover="yellow-on-click.svg" click="yellow-visited.svg" />
        </div>
        <!-- <p style="color: #ffce64;"><b>Applications for Technica 2024 aren't open yet; check back soon!</b></p> -->
        <ul>
          <li v-for="info in mentorInfo">
            {{ info }}
          </li>
        </ul>
      </div>

      <!-- VOLUNTEERS COL -->
      <div class="col">
        <h3>Volunteers</h3>
        <div class="button">
          <VineButton text="Volunteer" link="https://docs.google.com/forms/d/e/1FAIpQLScosx_QuVt11v3RfSqLVlhM54Bs-MNfl6UCjLzmInK5DY8JdA/viewform?usp=dialog" img="yellow-button-regular.svg"
            hover="yellow-on-click.svg" click="yellow-visited.svg" />
        </div>
        <!-- <p style="color: #ffce64;"><b>Applications for Technica 2024 aren't open yet; check back soon!</b></p> -->
        <ul>
          <li v-for="info in volunteerInfo">
            {{ info }}
          </li>
        </ul>
      </div>

    </div>

    <!-- FAQ SECTION -->
    <div style="margin-top: 3rem;"></div>
    <div class="container">
      <Header v-if="width <= 768" class=faq>FAQ</Header>
      <Header v-else class=faq>Frequently Asked Questions</Header>
      <FAQ faqId="main" :qaList="qaList" class="main-section" />
    </div>

    <!-- GIVE OPS TROUBLE SECTION -->
    <div style="margin-top: 3rem;"></div>
    <div class="contact">
      <h3 style="color: #653554;">Have Other Questions?</h3>
      <p style="color: #653554;">
        Reach out to
        <a href="mailto:operations@gotechnica.org">operations@gotechnica.org</a>
        and we'll get back to you soon!
      </p>
    </div>
    <!-- <StickyButton></StickyButton> -->
  </div>
  <StickyButton></StickyButton>
</template>

<!-- SCRIPT -->
<script setup lang="ts">
import { useWindowSize } from '@vueuse/core';

// Detect mobile layout based on screen width
const { width } = useWindowSize();

const mentorInfo = [
  'Help hackers bring their ideas to life',
  'Refine your leadership skills',
  'Share your knowledge and expertise with our hackers',
  'Both in-person and virtual opportunities for mentors ',
];

const volunteerInfo = [
  'Help with in-person operations of the hackathon',
  'Help set up for Technica weekend',
  'Serve meals to hackers',
  'Assist workshop operations',
];

const qaList = [
  {
    question: 'Should I be a mentor or a volunteer?',
    answer:
      'Volunteers assist with general tasks at the hackathon, such as directing check-in lines, while mentors provide technical support, such as guiding hackers with their code.',
  },
  {
    question: 'Where and when is Technica?',
    answer:
      'Technica 2025 will take place on October 25-26 in The Reckord Armory at UMD and virtually through our online platform, Gather. You choose how you want to join! In-person check-in will begin at 10 AM on Saturday.',
  },
  {
    question:
      'I don’t identify as an underrepresented gender, can I still sign up?',
    answer: 'People of all genders are welcome to be a mentor or volunteer!',
  },
  {
    question: 'I’ve never been to Technica, can I still sign up?',
    answer:
      'Yes, of course! We always welcome first-time attendees to Technica and this is no exception!',
  },
  {
    question: 'I’m not in the United States, can I still sign up?',
    answer:
      'We will be accepting virtual mentors this year to aid hackers on Slack and Gather!',
  },
  {
    question:
      'How much of a time commitment will being a mentor or volunteer require?',
    answer:
      'You will receive training for your position from our organizers before the event \
    and help out during the duration of Technica weekend.',
  },
  {
    question: 'When will I hear back after signing up?',
    answer:
      'After signing up, you will be contacted to provide additional information about your availability and receive other relevant information closer to Technica weekend. Please keep an eye on the inbox of the email you register with!',
  },
];

</script>

<!-- STYLE -->
<style scoped lang="scss">
p {
  text-align: center;
}

h3 {
  text-align: center;
  color: #ffce64;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

ul li {
  padding: 0.3rem 0px;
  margin-left: 2rem;
  color: white;
}
</style>