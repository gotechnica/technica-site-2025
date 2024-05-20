<template>
  <title>Ambassadors</title>
  <div class="container">
    <H1 class="title">Become an Ambassador</H1>
    <h3>Applications are now open!</h3>
    <p>
      We are very excited to launch the fifth year of Technica Campus
      Ambassadors! As a Technica Campus Ambassador, you'll have the unique
      opportunity to help foster our community beyond Technica weekend at UMD.
      As a representative of your school, you'll spread the word about Technica
      2023 on your campus and promote our message of inclusion in STEM for the
      world's largest hackathon for underrepresented genders!
    </p>
    <p>
      Fill out the
      <a href="https://gotechnica.org/ambassadorapp">application</a> by July 16th
      at 11:59pm EST to be considered. You'll hear back by July 20th!
    </p>

    <div class="row">
      <div class="col">
        <h3>What do Campus Ambassadors do?</h3>
        <ul class="list">
          <li>
            Generate awareness, excitement, and buzz leading up to Technica 2023
          </li>
          <li>Promote Technica on your campus and social media</li>
          <li>Communicate with Technica's Outreach team weekly</li>
        </ul>
      </div>
      <div class="col">
        <h3>Why should you apply?</h3>
        <ul class="list">
          <li>Be a leader at your school!</li>
          <li>Have your resume shared with our sponsors</li>
          <li>Potential to earn awesome perks:</li>
          <ul>
            <li>Travel reimbursement for Technica 2023</li>
            <li>Social Media features</li>
            <li>Host a fireside chat or workshop for Technica</li>
            <li>Custom Technica merchandise</li>
          </ul>
        </ul>
      </div>
    </div>

    <div class="row">
      <h3 v-if="width <= 768">FAQ</h3>
      <h3 v-else>Frequently Asked Questions</h3>
      <FAQSection class="faq" faqId="faq" :qaList="qaList" />
    </div>
    <StickyButton></StickyButton>
  </div>
  <StickyButton></StickyButton>
</template>

<script setup lang="ts">
import { useWindowSize } from '@vueuse/core';

// Detect mobile layout based on screen width
const { width } = useWindowSize();

const qaList = [
  {
    question: 'How do I earn perks?',
    answer:
      "If selected as a Campus Ambassador, we'll be sure to explain to you the \
      details of our merit-based system. All you need to know is, the more \
      effort you put into your role and outreach as an Ambassador, the more \
      perks you'll receive!",
  },
  {
    question: 'When is Technica 2023?',
    answer:
      'Technica 2023 will take place on October 21-22 this year at The Hotel at UMD!',
  },
  {
    question:
      "I don't identify as an underrepresented gender, can I still apply?",
    answer:
      'Yes, of course! All genders and allies are welcome to be an Ambassador!',
  },
  {
    question: "I've never been to Technica, can I still sign up?",
    answer:
      'Yes, of course! We always welcome first-time attendees to Technica and \
      this is no exception!',
  },
  {
    question: "I'm in high school, can I still apply?",
    answer:
      'Yes! Any full-time student, as of October 2023, from 6th grade onwards \
      is eligible to apply!',
  },
  {
    question: "I'm not in the United States, can I still apply?",
    answer: 'Yes! International students are eligible and encouraged to apply!',
  },
  {
    question: 'How much of a time commitment will this role require?',
    answer:
      "If you're selected as a Campus Ambassador, all that we require is that \
      you attend Technica 2023 and complete our weekly progress form (which \
      will start in September 2023)! This a merit-based program, so you'll get \
      out of it as much as you put in!",
  },
];

</script>

<style scoped lang="scss">
.title {
  margin-top: 50px;
}

h3,
h3 {
  text-align: center;
  margin-bottom: 1rem;
  color: $DARK-PURPLE;
}

p {
  text-align: center;
}

.list li {
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

  .list li { 
    margin-left: 0;
  }
}
</style>
