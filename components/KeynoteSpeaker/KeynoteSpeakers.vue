<template>
  <Header>Keynote Speakers</Header>
    <div class="speaker-container">
      <div class="speaker-card">
        <div class="image-wrapper1">
          <img class="speaker-one" src="/keynote-speakers/speaker1.png" />
        </div>
        <h1 class="speaker-name">Coming Soon!</h1>
        <p class="speaker-pronouns">Pronouns</p>
        <div class="dropdown">
          <button @click="toggleDropdown(1)" class="dropdown-button">
            <img class="button-image" src="/keynote-speakers/bio-button.png">
          </button>
          <div v-if="isOpen1" class="dropdown-menu">
            <p>
              Check back soon for more information!
            </p>
          </div>
        </div>
      </div>

      <div class="speaker-card">
        <div class="image-wrapper2">
          <img class="speaker-one" src="/keynote-speakers/speaker1.png" />
        </div>
        <h1 class="speaker-name">Coming Soon!</h1>
        <p class="speaker-pronouns">Pronouns</p>
        <div class="dropdown">
          <button @click="toggleDropdown(2)" class="dropdown-button">
              <img class="button-image" src="/keynote-speakers/bio-button.png">
          </button>
          <div v-if="isOpen2" class="dropdown-menu">
            <p>
              Check back soon for more information!
            </p>
          </div>
        </div>
      </div>
  </div>
</template>


<script setup lang="ts">
import {ref} from 'vue';

const isOpen1 = ref(false);
const isOpen2 = ref(false);

const toggleDropdown = (dropdownNumber: number) => {
  if (dropdownNumber === 1) {
    isOpen1.value = !isOpen1.value;
  } else if (dropdownNumber === 2) {
    isOpen2.value = !isOpen2.value;
  }
};
</script>

<style scoped lang="scss">

.image-wrapper1 {
  position: relative;
  width: 300px;
  height: 250px;
  background-image: url('keynote-speakers/picture-wrapper1.png'); /* Your background image */
  background-size: cover; /* Make the background cover the whole container */
  background-position: center; /* Center the background */
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-wrapper2{
  position: relative;
  width: 300px;
  height: 250px;
  background-image: url('keynote-speakers/picture-wrapper2.png'); /* Your background image */
  background-size: cover; /* Make the background cover the whole container */
  background-position: center; /* Center the background */
  display: flex;
  align-items: center;
  justify-content: center;
}

.button-image{
  background-color: transparent;

}
.dropdown-menu {
  display: none;
  position: absolute; 
  background-color: #66395e;
  border: 2px #4c083d;
}

.dropdown-menu {
  display: block; 
}

.dropdown-button {
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer; /* Ensure button is clickable */
}

.dropdown-menu p {
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
    width: 100%;
    max-width: 250px;
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

  .speaker-pronouns{
    color: white;
  }

  @media screen and (max-width: 480px) {
  .speaker-container {
    flex-direction: column; /* Stack cards vertically on smaller screens */
  }
}



</style>