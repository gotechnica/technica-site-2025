<template>
  <title>Technica Home</title>
  <!-- Hero Section -->
  <div class="main-body">
  <HeroLanding/>
  <!--About Section-->
    <div class="container">
      <About/>
    </div>
    <!-- Hybrid Environment Section -->
      <div class="container">
        <Header>Hybrid Environment</Header>
        <div class="row">
          <div class="col-sm" v-for="(item, index) in items" :key="index">
            <img class="hybrid-img" :src=item.image>
            <div class="caption-box mx-auto" :class="item.class">
              <h3>{{ item.title }}</h3>
              <p>{{ item.content }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <TestimoniesCarousel class="main-section"/>
      </div>
      <!-- Tracks Section ------------------------------------------------------------------->
      <div class="container">
        <Header>Tracks</Header>
        <div class="row">
          <div v-for="(card, index) in cards" :key="index" class="flip-card-3D-wrapper col-lg-4">
            <div class="flip-card" :class="{ 'do-flip': card.flipped }">
              <div class="flip-card-front">
                <div class="card-body">
                  <h3 class="corner top-left">A<br />♠</h3>
                  <h3 class="corner bottom-right">A<br />♠</h3>
                  <h4 class="text-center">{{ card.title }}</h4>
                  <p>{{ card.frontContent }}</p>
                  <img class="card-img" :src="card.image" alt="Card Image">
                  <button class="flip-card-btn-turn-to-back" @click="toggleFlip(card)">More info</button>
                </div>
              </div>
              <div class="flip-card-back">
                <div class="card-body">
                  <h4 class="text-center">More info</h4>
                  <p>{{ card.backContent }}</p>
                  <button class="flip-card-btn-turn-to-front" @click="toggleFlip(card)">Back to the front</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    <div class="container">
      <AdditionalInfo/>
    </div>

    <div class="container">
      <Sponsors/>
    </div>

    <div class="container">
      <Header v-if="width <= 768" class = faq>FAQ</Header>
      <Header v-else class = faq>Frequently Asked Questions</Header>
      <FAQ faqId="main" :qaList="qaList" class="main-section" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useWindowSize } from '@vueuse/core';

// Hybrid Enviornment -----------------------------------------------------------------
const items = ref([
  { image: "/hybrid/in-person.svg", class: "in-person", title: "In-Person", content: "Lorem ipsum dolor sit amet consectetur. Tincidunt tortor nunc est urna. Interdum morbi malesuada velit massa facilisi. Est at elementum et aliquet mi. Lorem ipsum dolor sit amet consectetur. Tincidunt tortor nunc est urna. Interdum morbi malesuada velit massa facilisi. Est at elementum et aliquet mi." },
  { image: "/hybrid/hybrid.svg", class: "hybrid", title: "Hybrid", content: "Lorem ipsum dolor sit amet consectetur. Tincidunt tortor nunc est urna. Interdum morbi malesuada velit massa facilisi. Est at elementum et aliquet mi. Lorem ipsum dolor sit amet consectetur. Tincidunt tortor nunc est urna. Interdum morbi malesuada velit massa facilisi. Est at elementum et aliquet mi." },
  { image: "/hybrid/virtual.svg", class: "virtual",  title: "Virtual", content: "Lorem ipsum dolor sit amet consectetur. Tincidunt tortor nunc est urna. Interdum morbi malesuada velit massa facilisi. Est at elementum et aliquet mi. Lorem ipsum dolor sit amet consectetur. Tincidunt tortor nunc est urna. Interdum morbi malesuada velit massa facilisi. Est at elementum et aliquet mi." }
]);

// Detect mobile layout based on screen width
const { width } = useWindowSize();
const isMobile = computed(() => width.value <= 768);

// Tracks -----------------------------------------------------------------
interface Card {
  title: string;
  frontContent: string;
  backContent: string;
  flipped: boolean;
  image: string;
}

const cards = ref<Card[]>([
  {
    title: 'General',
    frontContent: 'A quick description of the front item',
    backContent: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    flipped: false,
    image: 'assets/in-person.png'
  },
  {
    title: 'Beginner',
    frontContent: 'A quick description of the front item',
    backContent: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    flipped: false,
    image: 'assets/in-person.png'
  },
  {
  title: 'Startup',
    frontContent: 'A quick description of the front item',
    backContent: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    flipped: false,
    image: 'assets/in-person.png'
  },
  {
  title: 'Research',
    frontContent: 'A quick description of the front item',
    backContent: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    flipped: false,
    image: 'assets/in-person.png'
  },
  {
  title: 'Hardware',
    frontContent: 'A quick description of the front item',
    backContent: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    flipped: false,
    image: 'assets/in-person.png'
  }
]);

const toggleFlip = (card: Card) => {
  card.flipped = !card.flipped;
};


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
      'Technica 2024 will take place on October 26-27 in The Hotel at UMD and virtually via our platform. You choose how you want to join! In-person check-in will begin at 10 AM on Saturday.'
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
//Hybrid Enviornment Section -----------------------------------------------------------------
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

body {
  font-family: 'Poppins', sans-serif;
}

.main-body {
  background: linear-gradient(180deg, #351C33 30%, #F4D1D9 75%);
}

.larger-circle, .icon-circle {
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hybrid-img{
  margin-bottom: 5%;
}

.in-person {
  background-color: $LIGHTGREEN;
  border: $DARKGREEN solid 5px;

  h3 {
    -webkit-text-stroke: 2px $DARKGREEN;
    text-shadow: $DARKGREEN;
  }
}
.hybrid {
  background-color: $LIGHTPINK;
  border: $DARKPINK solid 5px;
  h3 {
    -webkit-text-stroke: 2px $DARKPINK;
    text-shadow: $DARKPINK;
  }
}
.virtual {
  background-color: $LIGHTYELLOW;
  border: $DARKYELLOW solid 5px;
  h3 {
    -webkit-text-stroke: 2px $DARKYELLOW;
    text-shadow: $DARKYELLOW;
  }
}

.caption-box {
  width: 365px;
  height: 443px;
  border-radius: 40px;
  box-sizing: border-box;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
}

.caption-box h3, .caption-box p {
  margin: 0;
  color: white;
}

.caption-box h3 {
  font-size: 36px;
  margin-bottom: 0.5rem;
  border: $DARKGREEN;
}

p {
  color: #464343;
}

h1 {
  font-size: 60px;
  color: #000;
  padding: 20px 0 74px;
}

.container {
  margin-top: 5rem;
  text-align: center;
}

.header-container {
  margin-bottom: 2%;
}

.icon-circle h2 {
  margin: 0;
}

.col-sm {
  padding: 15px;
}

//Tracks Section -----------------------------------------------------------------
.container {
  text-align: center;
}
body {
  background: #f5f6fa;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  color: #000000;
  font-size: 20px;
}

.flip-card-3D-wrapper {
    width: 100%;
    max-width: 340px; 
    margin: 10px auto;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: center;
}

.flip-card {
  height: 100%;
  transition: all 1s ease-in-out;
  transform-style: preserve-3d;
  height: 446px;
  width: 318px;
}

.do-flip {
  transform: rotateY(-180deg);
}

.flip-card-btn-turn-to-back, .flip-card-btn-turn-to-front {
  visibility: visible;
  border-radius: 10px;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  background: #d9d9d9;
  color: #000000;
}

.flip-card-front, .flip-card-back {
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  z-index: 2;
  border-radius: 18px;
}

.corner {
  font-size: 24px;
  font-family: 'Arial', sans-serif;
  position: absolute;
  color: #000;
}

.top-left {
  top: 10px;
  left: 10px;
}

.bottom-right {
  bottom: 10px;
  right: 10px;
  transform: rotate(180deg);
}

.suit {
  font-size: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Times New Roman', Times, serif;
}

.card-img {
  max-width: 100%;
  height: auto;
  margin-bottom: 20px; /* Adjust spacing as needed */
}
.card-body {
  padding: 30px;
  text-align: center;
}

.row {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
}

.flip-card-front {
  background: #d9d9d9;
}

.flip-card-back {
  background: #d9d9d9;
  transform: rotateY(180deg);
}

.flip-card-front {
  color: black;
}

.flip-card-back h4 {
  color: black;
}

@media screen and (max-width: 400px) {
  .caption-box {
    width: 300px;
  }
}

</style>
