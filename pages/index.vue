<template>
  <title>Technica Home</title>
  <!-- Hero Section -->
  <HeroLanding />
  
  <div class="container">
    <!-- About Technica -->
    <div class="about-container">
      <H1>Thank You For Coming!</H1>
      <div class="about-blurb main-section">
        <div class="row">
          <p><p>Technica is the world’s largest hackathon for underrepresented genders in tech. The hackathon is hosted annually at the University of Maryland, and is a weekend jam-packed with swag, workshops, networking, and awesome projects!</p></p>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <p>This year we had over <b>800+</b> hackers participate (both in-person and online), compromised of underrepresented groups from many different backgrounds. We had <a href="https://technica-2023.devpost.com/project-gallery" target="_blank">121 awesome projects submitted</a>, many of which that tackle real-world issues with unique solutions. We hope everyone had a chance to learn and explore something new at Technica 2024, and we hope to see everyone again next year!</p>
          </div>
          <div class="col-lg-6">
            <div class='embed-container'><iframe src='https://www.youtube.com/embed/4PBEfogEP6s' frameborder='0' allowfullscreen></iframe></div>
          </div>
        </div>
      </div>

      <H1>Our Achievements</H1>
      <AboutTechnica class="main-section"/>
    </div>

    <!-- What to do at Technica -->
    <H1>What Can You Do at Technica?</H1>
    <WhatToDo class="main-section"/>
 
    <!-- Hear from past hackers -->
    <H1>Hear From Past Hackers!</H1>
    <TestimoniesCarousel class="main-section"/>

    <!-- Hybrid Envrionment -->
    <H1>Hybrid Environment</H1>
    <HybridEnvironment class="main-section"/>

    <!-- Tracks -->
    <H1>Tracks</H1>
    <p class="description">
      Tracks can guide your hackathon experience for specific interests and
      skill levels with a more curated set of workshops and events. Each hacker
      may select one track during registration. The beginner and startup tracks
      have limited spots!
    </p>

    <PixelButton
      text="Learn more"
      link="/tracks"
      img="purple-button-normal.svg"
      hover="purple-button-hover.svg"
      click="purple-button-onclick.svg"
    />
    <TracksComponent class="main-section" />

    <!-- Additional Information -->
    <H1>Additional Info</H1>
    <AdditionalInfo class="main-section"/>

    <!-- Keynote Speakers -->
    <H1>Keynote Speakers</H1> 
    <div class="keynote main-section">
      <div class="col">
        <KeynoteSpeaker :speaker="speaker1" />
      </div>
      <div class="col">
        <KeynoteSpeaker :speaker="speaker2" />
      </div>
    </div>

    <!-- Frequently Asked Questions -->
    <H1 v-if="width <= 768">FAQ</H1>
    <H1 v-else>Frequently Asked Questions</H1>
    <FAQSection faqId="main" :qaList="qaList" class="main-section" />

    <!-- Sponsors -->
    <H1>Sponsors</H1>
    <Sponsors class="main-section"/>

    <!-- Meet the Team -->
    <H1>Meet the Team</H1>
    <MeetTheTeam class="main-section"/>

    <!-- Scroll to Top Button -->
    <StickyButton />
    
    </div>
</template>

<script setup lang="ts">
import { useWindowSize } from '@vueuse/core';

// Detect mobile layout based on screen width
const { width } = useWindowSize();

// keynote speaker 1
const speaker1 = {
  name: "Ashley Huynh (she/her)",
  image: "/keynote/ashley-huynh.svg",
  position: "Open Source Engineer at Slack",
  description: "Ashley Huynh is a queer Vietnamese-Malaysian Chinese software engineer from Atlanta, GA. With deep roots in hackathons, she was inspired by tech’s impact and has taken on different career paths during her time in the industry. She started off as a product software engineer, building marketing features to empower small businesses at Mailchimp. From there, she entered developer relations as a Community Engineer at Mux and a Developer Advocate at RenderATL. Today, she is an Open Source Software Engineer at Slack, enabling their developer community to build apps that enhance productivity and make work a more pleasant place to be!"
}

// keynote speaker 2
const speaker2 = {
  name: "Emma Mitchell (she/her)",
  image: "/keynote/emma-mitchell.svg",
  position: "Founder, InspireHER STEM & Senior IT Systems Analyst",
  description: "Emma Mitchell is the founder of InspireHER STEM, an international mentoring program, and a charitable trust in Kenya with the Amazing Grace Center Kenya CBO. She is also the president of the Mirror of Hope Foundation and a board member of Quilts for Empowerment; educating, mentoring and empowering underserved women and rural girls to lead for change. Emma is a certified Project Management Professional(PMP) with over a decade of experience in technology and diverse expertise in cloud architecture, system analysis, IT asset management, and software implementations. Born and raised in Kenya, she now lives in the USA with her family."
}

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
      'Technica 2024 will take place on October 21-22 in The Hotel at UMD and virtually via our platform. You choose how you want to join! In-person check-in will begin at 10 AM on Saturday.'
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
    answer: 'There are many ways to travel to Technica! We will be sending buses to nearby universities which hackers can take to and from Technica. For hackers not within 30 minutes of a bus stop, travel reimbursement will also be available to assist in getting to and from Technica. Eligible hackers will be sent travel registration information after registering for Technica.'
  },
  {
    question: 'How do teams work?',
    answer: 'You can work on a project on your own, or you can work with a team. Teams can be formed prior to the day of the hackathon with other participants, or at the team formation event before official hacking begins. You can meet other hackers in the Technica 2024 Slack workspace. Weekend-of, we\'ll offer a team formation event in which you can use gotechnica.org/teamformationform to list your preferences and gotechnica.org/teamformationsheet to view potential team members. Team size must not exceed four members, per MLH rules.'
  },
  {
    question: 'What should I bring?',
    answer: 'Some recommended items to bring are a computer, chargers, and a pair of headphones! Bring what you feel will help you stay comfortable during the course of the hackathon, this could be hygiene products, computer peripherals, or a blanket. A detailed list of items to bring can be found in our hacker guide, which will be released on October 17!'
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
    answer: 'All in-person attendees must be fully vaccinated or wear a mask throughout the duration of the event. Please pack your vaccination card (or a picture of it) and photo ID to present at check-in!'
  }
];

</script>

<style scoped lang="scss">

.about-blurb {
  text-align: center;
  margin: auto;
  width: 90%;
  font-size: 110%;
  margin-bottom: 0% !important;
}

.about-blurb a {
  color: black;
  font-weight: bold;
}

.embed-container { 
  position: relative; 
  padding-bottom: 56.25%; 
  height: 0; 
  overflow: hidden; 
  max-width: 100%; 
} 
.embed-container iframe, .embed-container object, .embed-container embed { 
  position: absolute; 
  top: 0; 
  left: 0; 
  width: 100%; 
  height: 100%; 
}
.keynote {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}

.container {
  align-items: center;
  justify-content: center;
  max-width: 80%;
}

.about-container {
  padding-top: 5vh;
  border-radius: 33px;
  background-color: rgba(255, 251, 239, 0.8);
}

.description {
  text-align: center;
  margin: auto;
  margin-bottom: 1rem;
  font-size: 110%;
}

.main-section {
  margin-bottom: 3%;
}

@media screen and (max-width: 768px) {
  .container {
    padding: 10%;
    max-width: 100% !important;
  }
}
</style>
