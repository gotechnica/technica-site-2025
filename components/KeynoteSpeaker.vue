<template>
  <div class="keynote-speaker">
    <img v-if="speaker.name!='TBD'" class="speaker-image" :src=speaker.image />
    <img v-else class="tbd-image" :src="'/keynote/tbd.svg'" />
    <h1> {{ speaker.name }} </h1>
    <h5> {{ speaker.position }}</h5>

    <div class="wrapper" @click="toggleClick">
      <!-- <p class="center"> About {{ speaker.name }}</p> -->
      <p class="center"> About</p>
      <PixelButton text="About" img="blue-button-normal.svg" textAlign = "-0.75rem" hover="blue-button-hover.svg" click="blue-button-onclick.svg" />
      <img class="caret" :src="'/buttons/expand-arrow.svg'" alt="arrow" />
    </div>

    <div class="description">
      <p v-if="toggle">
          {{  speaker.description }}  
      </p>
    </div>
  </div>
</template>

<script setup lang="ts"> 
import { Button } from 'bootstrap'; 
const props = defineProps<{ speaker: Speaker }>();
const toggle = ref(false);
var degree = 0;

const toggleClick = () => {
  toggle.value = !toggle.value; 
  degree += 180;
}

type Speaker = {
  name: string;
  image: string;
  position: string;
  description: string;
};  
</script>

<style scoped lang="scss">
p, h1, h5 {
  text-align: center;
}

.description {
  padding: 0 20px 0 20px;
}

h5 {
  font-family: 'Barlow', sans-serif;
  font-style: normal;
  font-weight: 500;
  margin-bottom: 1rem;
}

.keynote-speaker {
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: center;  
}

.speaker-image {
  width: calc(10rem + 20vw);
  height: calc(10rem + 20vw);
  margin-top: -5vw;
}

// will change when we get actual speaker images
.tbd-image {
  // border-radius: 50%;
  width: calc(6rem + 31vw);
  height: calc(4rem + 31vw + 80px);
  object-fit: contain;
  margin-top: -12vw;
  margin-bottom: -1rem; 
}

.wrapper {
  color: white;
  position: relative;
  text-align: center;
  width: 70%; 
}

.button {
  width: 100%; 
  height: 100%; 
}

.center {
  font-size: 1.5rem;
  font-family: 'Pixeloid-Sans';
  position: absolute;
  top: 50%;
  left: 17%;
  transform: translate(-20%, -50%);
}

@media screen and (max-width: 500px) {
  .center {
    font-size: 1.1rem;
    position: absolute;
    top: 50%;
    left: 20%;
    transform: translate(-20%, -50%);
  }

  .tbd-image {
    margin-top: -17vw;
  }

}


.caret {
  top: 32%;
  left: 63.5%;
  position: absolute;
  transition: transform 0.5s ease-in-out;
}

</style>