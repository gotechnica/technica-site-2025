<template>
    <div class="container">
        <Header>Tracks</Header>
        <div class="row">
          <div v-for="(card, index) in cards" :key="index" class="flip-card-3D-wrapper col-lg-4">
            <div class="flip-card" :class="{ 'do-flip': card.flipped }">
              <div class="flip-card-front">
                <img class="card-img" :src="card.image" alt="Card Image">
                <div class="card-body">
                  <span class="flip-text" @click="toggleFlip(card)">Learn More</span>
                  <img class="flip-arrow" src="/testimonials/flip.svg" alt="flip arrow">
                </div>
              </div>
              <div class="flip-card-back">
                <img class="card-img" :src="card.imageFlipped" alt="Card Image">
                <div class="card-body-flipped">
                  <p>{{card.title}} track</p>
                  <p>{{ card.backContent }}</p>
                </div>
                <div class="return-front">
                  <span class="flip-text" @click="toggleFlip(card)">Return to front</span>
                  <img class="flip-arrow" src="/testimonials/flip.svg" alt="flip arrow">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>
<script setup lang="ts">
// Hybrid Enviornment -----------------------------------------------------------------
const items = ref([
  { image: "/hybrid/in-person.svg", class: "in-person", title: "In-Person", content: "Lorem ipsum dolor sit amet consectetur. Tincidunt tortor nunc est urna. Interdum morbi malesuada velit massa facilisi. Est at elementum et aliquet mi. Lorem ipsum dolor sit amet consectetur. Tincidunt tortor nunc est urna. Interdum morbi malesuada velit massa facilisi. Est at elementum et aliquet mi." },
  { image: "/hybrid/hybrid.svg", class: "hybrid", title: "Hybrid", content: "Lorem ipsum dolor sit amet consectetur. Tincidunt tortor nunc est urna. Interdum morbi malesuada velit massa facilisi. Est at elementum et aliquet mi. Lorem ipsum dolor sit amet consectetur. Tincidunt tortor nunc est urna. Interdum morbi malesuada velit massa facilisi. Est at elementum et aliquet mi." },
  { image: "/hybrid/virtual.svg", class: "virtual",  title: "Virtual", content: "Lorem ipsum dolor sit amet consectetur. Tincidunt tortor nunc est urna. Interdum morbi malesuada velit massa facilisi. Est at elementum et aliquet mi. Lorem ipsum dolor sit amet consectetur. Tincidunt tortor nunc est urna. Interdum morbi malesuada velit massa facilisi. Est at elementum et aliquet mi." }
]);

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
    frontContent: 'A quick description of the front item',
    backContent: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    flipped: false,
    image: 'tracks/Technica-Tracks-conflict-01.svg',
    imageFlipped: 'tracks/Technica-Tracks-final-04.svg'
  },
  {
    title: 'Beginner',
    frontContent: 'A quick description of the front item',
    backContent: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    flipped: false,
    image: 'tracks/Technica-Tracks-color-05.svg',
    imageFlipped: 'tracks/Technica-Tracks-final-10.svg'
  },
  {
  title: 'Startup',
    frontContent: 'A quick description of the front item',
    backContent: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    flipped: false,
    image: 'tracks/Technica-Tracks-color-07.svg',
    imageFlipped: 'tracks/Technica-Tracks-final-06.svg'
  },
  {
  title: 'Research',
    frontContent: 'A quick description of the front item',
    backContent: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    flipped: false,
    image: 'tracks/Technica-Tracks-color-03.svg',
    imageFlipped: 'tracks/Technica-Tracks-final-08.svg'
  },
  {
  title: 'Hardware',
    frontContent: 'A quick description of the front item',
    backContent: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    flipped: false,
    image: 'tracks/Technica-Tracks-color-09.svg',
    imageFlipped: 'tracks/Technica-Tracks-final-02.svg'
  }
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
  width: 318px
}

.do-flip {
  transform: rotateY(-180deg);
}

.flip-card-front, .flip-card-back {
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  z-index: 2;
  border-radius: 18px;
  background-color: transparent !important;
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
  margin-bottom: 20px; /* Adjust spacing as needed */
}
.card-body {
  text-align: center;
  position: absolute;
  top: 80%;
  width: 100%;
  color: white;
}

.card-body-flipped {
  position: absolute;
  top: 10%;
  left: 16%;
  width: 75%;
  text-align: left;
  font-weight: bold;
}

.return-front {
  position: absolute;
  bottom: 9%;
  width: 100%;
  font-weight: bold;
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
