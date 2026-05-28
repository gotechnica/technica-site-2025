<template>
  <div class="container">
    <Header>Tracks</Header>
    <!-- <div style="margin-top: 5rem"></div> -->
    <p>Click on the gates to learn more!</p>
    <div class="row d-flex justify-content-center">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="flip-card-3D-wrapper col-lg-6 d-flex justify-content-center tracks"
      >
        <div
          class="flip-card"
          @click="toggleFlip(card)"
        >
        <transition name = "fade">
          <div v-if="!card.flipped" key="front" class="flip-card-front">
            <img class="card-img" :src="card.image" alt="Card Image" />
            <div :class="['card-body', card.title]">
              <span class="flip-text">Click the gates to learn more!</span>
              <img
                class="flip-arrow"
                src="/testimonials/flip.svg"
                alt="flip arrow"
              />
            </div>
          </div>
          <div v-else class="flip-card-back" key="back">
            <img class="card-img" :src="card.imageFlipped" alt="Card Image" />
            <div :class="['card-body-flipped', card.title]">
              <p style="color: #FFFFFF">{{ card.backContent }}</p>
            </div>
            <div :class="['return-front', card.title]">
              <span class="flip-text">Return to front</span>
              <img
                class="flip-arrow"
                src="/testimonials/flip.svg"
                alt="flip arrow"
              />
            </div>
          </div>
        </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Card {
  title: string;
  frontContent: string;
  backContent: string;
  flipped: boolean;
  image: string;
  imageFlipped: string;
}

const cards = ref<Card[]>([
  {
    title: 'General',
    frontContent: 'A track for anyone and everyone!',
    backContent:
      "For any and all hackers! Come build to your heart's content using hardware, software, or anything you want with other hackers. Hackers can be students, designers, or just any tech-lovers out there. Hackers of all skill levels are welcomed and supported!",
    flipped: false,
    image: 'tracks/CLOSED General.svg',
    imageFlipped: 'tracks/OPEN General.svg',
  },
  {
    title: 'Beginner',
    frontContent: 'A track for those new to hackathons!',
    backContent:
      "New to hackathons? Don't know how to code? No worries! You'll be provided with resources to help you succeed at Technica and beyond. This track begins with exclusive workshops a few weeks before Technica, and includes everything from an introduction to hackathons to coding and logic concepts.",
    flipped: false,
    image: 'tracks/CLOSED Beginner.svg',
    imageFlipped: 'tracks/OPEN Beginner.svg',
  },
  {
    title: 'Startup',
    frontContent: 'A track for those interested in business!',
    backContent:
      "Interested in the business side of building a project? Join startup track! Featuring both workshops before and during Technica weekend, startup track is a unique opportunity to explore an alternate dimension of project building that you won't want to miss out on!",
    flipped: false,
    image: 'tracks/CLOSED Startup.svg',
    imageFlipped: 'tracks/OPEN Startup.svg',
  },
  {
    title: 'Research',
    frontContent: 'A track for those interested in business!',
    backContent:
      'Interested in research? Explore different areas where you will get to work hands-on with faculty researchers and peers to address social issues using technology and research! This track is a separate 3-day event taking place during Technica weekend.',
    flipped: false,
    image: 'tracks/CLOSED Research.svg',
    imageFlipped: 'tracks/OPEN Research.svg',
  },
]);

const toggleFlip = (card: Card) => {
  card.flipped = !card.flipped;
};
</script>

<style scoped lang="scss">
.container {
  text-align: center;
}

body {
  background: #f5f6fa;
  font-family: 'Poppins', sans-serif;
  // font-weight: bold;
  color: #000000;
  font-size: 20px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.flip-card-3D-wrapper {
  width: 100%;
  max-width: 500px;
  margin: 10px auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
}

.flip-card {
  height: 100%;
  transition: all 1s ease-in-out;
  transform-style: preserve-3d;
  // height: 700px;
  // width: 572px;
  width: 100%;
  max-width: 600px;
  aspect-ratio: 572 / 700;
}

.do-flip {
  transform: rotateY(-180deg);
}

.flip-card-front,
.flip-card-back {
  // height: 100%;
  display: flex;
  justify-content: center;
  width: 100%;
  aspect-ratio: 572 / 700;

  position: absolute;
  backface-visibility: hidden;
  z-index: 2;
  border-radius: 18px;
  background-color: transparent !important;
  font-size: 80%;
}

.General {
  position: absolute;
  margin-top: 15%;
} 

.Beginner {
  position: absolute;
  margin-top: 10%;
}

.Startup {
  position: absolute;
  margin-top: -3%;
}
.Research {
  position: absolute;
  margin-top: -1%;
  margin-left: 0.5%;
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

.card-img {
  max-width: 100%;
  height: auto;
  // margin-bottom: 20px;
  /* Adjust spacing as needed */
}

.card-body {
  text-align: center;
  position: absolute;
  top: 79%;
  width: 100%;
  color: white;
  margin-top: 10%;
}

.card-body-flipped {
  display: flex;
  position: absolute;
  top: 25%;
  // left: 34%;
  justify-content: center;
  align-items: center;

  // width: 180px;
  width: 32%;
  max-width: 180px;

  text-align: center;
  // font-weight: bold;
}

.card-body.Startup, .card-body.Research{
  position: absolute;
  top: 69%;
  width: 100%;
  // font-weight: bold;
  text-align: center;
}

.return-front {
  position: absolute;
  margin-top: 50%;
  bottom: 9%;
  width: 100%;
  // font-weight: bold;
  color: white;
  text-align: center;
}

.return-front.Startup, .return-front.Research{
  position: absolute;
  top: 36%;
  width: 100%;
  // font-weight: bold;
  text-align: center;
}

.flip-text {
  margin-right: 2%;
  cursor: pointer;
}

.flip-arrow {
  cursor: pointer;
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

  .card-body-flipped {
    width: 80%;
  }
}

.about-blurb {
  text-align: center;
  margin: auto;
  width: 90%;
  font-size: 110%;
  margin-bottom: 0% !important;
}

.about-blurb a {
  color: black;
  // font-weight: bold;
}

.embed-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  max-width: 100%;
}

.embed-container iframe,
.embed-container object,
.embed-container embed {
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

@media screen and (max-width: 992px) {
  // .tracks {
  //   margin-left: 21%;
  // }
  .card-body-flipped {
    
  }
}

@media screen and (max-width: 768px) {
  .container {
    padding: 10%;
    max-width: 100% !important;
  }

  .card-body-flipped {
    font-size: 75%;
  }

  // .tracks {
  //   margin-left: 12%;
  // }
}
</style>
