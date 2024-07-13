<template>
  <title>Ambassadors</title>
  <div class="container">
    <!--<H1 class="title">Become an Ambassador</H1>-->
    <!-- <div class= "header">
      <img src="/headings/header2024.png">
      <h1>Become an Ambassador</h1>
    </div> -->
    <div style="margin-top: 5rem;"></div>
    <Header>Congrats to our Ambassadors!</Header>
    <h3>Applications are now closed.</h3>
    <p>
      We are very excited to launch the sixth year of Technica Campus Ambassadors! As a Technica Campus Ambassador, you’ll have the unique opportunity to help foster our community beyond Technica weekend at UMD. As a representative of your school, you’ll spread the word about Technica 2024 on your campus and promote our message of inclusion in STEM for the world’s largest hackathon for underrepresented genders!
    </p>
    <!-- <p>
      Fill out the
      <a href="https://gotechnica.org/ambassadorapp">application</a> by July 16th
      at 11:59pm EST to be considered. You'll hear back by July 20th!
    </p> -->

    <div class="row">
      <div class="col">
        <h3>What do Campus Ambassadors do?</h3>
        <ul class="list">
          <li>
            Generate awareness, excitement, and buzz leading up to Technica 2024
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
            <li>Travel reimbursement for Technica 2024</li>
            <li>Social Media features</li>
            <li>Host a fireside chat or workshop for Technica</li>
            <li>Custom Technica merchandise</li>
          </ul>
        </ul>
      </div>
    </div>

    <!-- <div class="container">
      <Header v-if="width <= 768" class = faq>FAQ</Header>
      <Header v-else class = faq>Frequently Asked Questions</Header>
      <FAQ faqId="main" :qaList="qaList" class="main-section" />
    </div> -->
    <!-- <StickyButton></StickyButton> -->
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
    question: 'When is Technica 2024?',
    answer:
      'Technica 2024 will take place on October 26-27 this year at The Armory at UMD!',
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
      'Yes! Any full-time student, as of October 2024, from 6th grade onwards \
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
      you attend Technica 2024 and complete our weekly progress form (which \
      will start in September 2024)! This a merit-based program, so you'll get \
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
  color: #ffce64;
}

p {
  text-align: center;
  color: #FFFFFF; 
}

.list li {
  padding: 0.3rem 0px;
  margin-left: 2rem;
  color: #FFFFFF;
}

a {
  color: #ffce64;
}

.row {
  margin: 2rem 0;
}
.col {
  margin: 1rem 0;
}

// .faq {
//   // margin: auto;
// }

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

.header {
  text-align: center;
  margin-top: 50px;
}

.header-image {
  position: relative;
  display: inline-block;
}

.header img{
  width: 100%;
}

.header h1{
  position: absolute;
  bottom:65%;
  left: 50%;
  transform: translateX(-50%);
  color:#653553;
  margin: 0;
  padding: 0.5rem;
}

.main-section {
  margin-left: 3.5vw;
}

@media screen and (max-width: 768px) {
  .header img {
    width: 100%;
  }

  .header h1 {
    font-size: 1.3rem;
    word-wrap: normal;
    padding-top: 0.5rem;
    color: black;
  }

  .list li { 
    margin-left: 0;
  }
}
</style>
