<template>
    <div class="container">
      <div class="header-container">
      <h1>Tracks</h1>
    </div>
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
</template>
<script setup lang="ts">
import { ref, computed } from 'vue';
import { useWindowSize } from '@vueuse/core';
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
</script>

<style scoped lang="scss">

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
  position: absolute;
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
  margin-bottom: 20px;
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

</style>
