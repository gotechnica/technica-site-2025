<template>
  <Header>Keynote Speakers</Header>
    <div class="speaker-container">
      <div class="speaker-card first">
        <div class="image-wrapper1">
        </div>
        <h1 class="speaker-name">Eriol Fox</h1>
        <p class="speaker-info">Senior Human-Rights centered Designer at Superbloom</p>
        <p class="speaker-info">They/Them</p>
        <div class="btn-container">
          <button @click="toggleDropdown(1)" class="dropdown-button">
            <PixelButton text="Read Bio" img="purple-button-regular.svg" hover="purple-button-regular.svg" click="purple-button-regular.svg" textAlign="-1.5rem"/>
          </button>
          <img class="arrow" :style="{transform: `rotate(${degree1}deg)`}" :src="'/buttons/expand-arrow.svg'" alt="arrow"/>
        </div>
        
        <p v-if="isOpen1" class="description">
          Eriol has been working as a designer for 10+ years working in for-profits and then NGO’s and open-source software organisations, working on complex problems like sustainable food systems, peace-building and crisis response technology. Eriol now works at Superbloom design, research, open-source and technology projects.
They are also part of the core teams at <a href="http://opensourcedesign.net/">Open Source Design</a>, <a href="https://hrcd.pubpub.org/">Human Rights Centred Design working group</a>, <a href="https://sustainoss.org/working-groups/design-and-ux/">Sustain UX & Design working group</a>, and help <a href="https://sosdesign.sustainoss.org/">hosts podcast</a> about open source and design.
Eriol is a non-binary, queer person who uses they/them pronouns.
        </p>
      </div>

      <div class="speaker-card second">
        <div class="image-wrapper2">
        </div>
        <h1 class="speaker-name">Ayodele Odubela</h1>
        <p class="speaker-info">Founder, AI ALT Lab</p>
        <p class="speaker-info">She/Her</p>
        <div class="btn-container">
          <button @click="toggleDropdown(2)" class="dropdown-button">
            <PixelButton text="Read Bio" img="purple-button-regular.svg" hover="purple-button-regular.svg" click="purple-button-regular.svg" textAlign="-1.5rem"/>
          </button>
          <img class="arrow" :style="{transform: `rotate(${degree2}deg)`}" :src="'/buttons/expand-arrow.svg'" alt="arrow"/>
        </div>
        <p v-if="isOpen2" class="description">
          Odubela is the Founder of the AI ALT Lab, envisioning alternate approaches to AI that prioritize the well-being of marginalized people. She was previously a data scientist working on auditing HR algorithms, developing ML fairness education at Microsoft, and deploying ML features for various startups. She received her Bachelor’s in Communications from the University of Pittsburgh and went on to receive a Master’s in Data Science from Regis University. In her spare time Ayodele enjoys playing drums and making candles.
        </p>
      </div>
  </div>
</template>


<script setup lang="ts">
import {ref} from 'vue';

const isOpen1 = ref(false);
const isOpen2 = ref(false);
let degree1 = 0
let degree2 = 0
const toggleDropdown = (dropdownNumber: number) => {
  if (dropdownNumber === 1) {
    isOpen1.value = !isOpen1.value;
    degree1 = (degree1 == 180 ? 0 : 180)
  } else if (dropdownNumber === 2) {
    isOpen2.value = !isOpen2.value;
    degree2 = (degree2 == 180 ? 0 : 180)
  }
};
</script>

<style scoped lang="scss">

.image-wrapper1 {
  position: relative;
  width: 300px;
  height: 250px;
  background-image: url('keynote-speakers/eriol-fox.png'); /* Your background image */
  background-size: cover; /* Make the background cover the whole container */
  background-position: center; /* Center the background */
  display: flex;
  align-items: center;
  justify-content: center;
}

.first {
  margin-right: 5rem;
}

.image-wrapper2{
  position: relative;
  width: 300px;
  height: 250px;
  background-image: url('keynote-speakers/ayodele-odubela.png'); /* Your background image */
  background-size: cover; /* Make the background cover the whole container */
  background-position: center; /* Center the background */
  display: flex;
  align-items: center;
  justify-content: center;
}

.button-image{
  background-color: transparent;

}

.dropdown-button {
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer; /* Ensure button is clickable */
}

.description {
  color: white; 
  text-align: center;
}

  .speaker-container {
  display: flex;       
  justify-content: center;      
  margin-top: 0.5rem;
  margin-bottom: 5rem;
  gap: 5rem;               
}

  .speaker-card {
    display: flex;           
    flex-direction: column;    
    align-items: center; 
    width: 90%;
    max-width: 500px;
    box-sizing: border-box;     
    
  }

  .speaker-one{
    width: 250px;
    height: 250px;
    z-index: 1;
  }

  .speaker-name {
  margin-top: 1rem;          
  text-align: center;
  color: white;
  text-shadow: 
    1.5px 1.5px 0 #00473E,   
    -1.5px -1.5px 0 #00473E,  
    1.5px -1.5px 0 #00473E,   
    -1.5px 1.5px 0 #00473E;   
}

  .speaker-info{
    color: white;
    text-align: center;
  }

  .arrow {
    top: 38%;
    left: 75%;
    width: 8%;
    position: absolute;
    transition: transform 0.5s ease-in-out;
  }

  .btn-container {
    position: relative;
  }

  @media screen and (max-width: 480px) {
  .speaker-container {
    flex-direction: column; /* Stack cards vertically on smaller screens */
  }
}

</style>
