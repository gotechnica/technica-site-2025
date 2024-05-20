<!-- Page describing the mentorship and voluneer program -->
<template>
  <title>Mentors/Volunteers</title>
  <div class="container">
    <H1 class="title">Mentors and Volunteers</H1>

    <p>
      Help run Technica and help hackers during the hackathon! Expect to gain
      valuable experience while applying your skills for the world's largest
      hackathon for underrepresented genders.
      <b>Must be 18+ to sign up.</b> People of all genders welcome!
    </p>

    <div class="row">
      <div class="col">
        <h3>Mentors</h3>
        <PixelButton class="button" link="https://forms.gle/PLWLsNBp4SKrPbEN9" text="Mentor" img="purple-button-normal.svg" hover="purple-button-hover.svg" click="purple-button-onclick.svg"/>
        <p><b>Applications Closed!</b></p>
        <ul>
          <li v-for="info in mentorInfo">
            {{ info }}
          </li>
        </ul>
      </div>
      <div class="col">
        <h3>Volunteers</h3>
        <PixelButton class="button" link="https://docs.google.com/forms/d/e/1FAIpQLSd_w3VE7KB0Fo9dFD4qBeyRAijRqjpL6LWYtXaT51BTaEPKeA/viewform" text="Volunteer" img="purple-button-normal.svg" hover="purple-button-hover.svg" click="purple-button-onclick.svg"/>
        <p><b>Applications Closed!</b></p>
        <ul>
          <li v-for="info in volunteerInfo">
            {{ info }}
          </li>
        </ul>
      </div>
    </div>

    <div class="row">
      <h3 v-if="width <= 768">FAQ</h3>
      <h3 v-else>Frequently Asked Questions</h3>
      <FAQSection class="faq" faqId="faq" :qaList="qaList"/>
    </div>

    <div class="contact">
      <h3>Have Other Questions?</h3>
      <p>
        Reach out to
        <a href="mailto:operations@gotechnica.org">operations@gotechnica.org</a>
        and we'll get back to you soon!
      </p>
    </div>
    <StickyButton></StickyButton>
  </div>
</template>

<script setup lang="ts">
import { useWindowSize } from '@vueuse/core';

// Detect mobile layout based on screen width
const { width } = useWindowSize();

const mentorInfo = [
  'Help hackers bring their ideas to life',
  'Refine your leadership skills',
  'Share your knowledge and expertise with our hackers',
  'Opportunities for mentors both in-person and virtual',
  'Assist hackers in workshop activities',
];

const volunteerInfo = [
  'Help with in-person operations of the hackathon',
  'Direct hackers to mentors if they need coding help',
  'Help set up for Technica weekend',
  'Report any technical issues to tech team',
  'Assist workshop operations',
];

const qaList = [
  {
    question: 'Should I be a mentor or a volunteer?',
    answer:
      'Volunteers help out with running the hackathon while mentors give more technical help. \
    For instance, volunteers could help direct check-in lines while mentors might help a hacker who \
    needs guidance on their code.',
  },
  {
    question: 'When is Technica 2023?',
    answer:
      'Technica 2023 will take place on October 20-21 this year at The Hotel at UMD!',
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
      'After signing up, you will be contacted to provide additional information about your \
    availability and receive other relevant information closer to the date of Technica. Please \
    keep an eye on the inbox of the email you register with!',
  },
];

</script>

<style scoped lang="scss">
.title {
  margin-top: 50px;
}

h3 {
  text-align: center;
  margin-bottom: 1rem;
  color: $DARK-PURPLE;
}

p {
  text-align: center;
}

ul li {
  padding: 0.3rem 0px;
  margin-left: 2rem;
}

a {
  color: $DARK-PURPLE;
}

.row {
  margin: 2rem 0;
}
.col {
  margin: 1rem 0;
}

.faq {
  margin: auto;
}

.button {
  width: 50%;
}

.contact {
  margin: 2rem 0;
}

.container {
  align-items: center;
  justify-content: center;
  width: 90%;
  margin: auto;
}

@media screen and (max-width: 768px) {
  .container {
    max-width: 100%;
  }

  ul li { 
    margin-left: 0;
  }
}
</style>
