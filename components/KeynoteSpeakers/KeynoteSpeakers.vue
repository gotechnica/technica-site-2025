<template>
  <Header>Keynote Speakers</Header>
  <div class="speaker-container">
      <div class="speaker-card first">
        <div class="image-wrapper">
          <img class="ghost-frame" src="/public/keynote-speakers/speaker_frame_1.svg" alt="ghost frame" />
          <img class="speaker-1" src="/public/keynote-speakers/brittany.png" alt="Brittany" />
        </div>
        <h1 class="speaker-name">Brittany Perlin</h1>
        <p class="speaker-info">AI Agent Engineer at Magical</p>
        <p class="speaker-info">She/Her</p>
        <div class="btn-container">
          <button @click="toggleDropdown(1)" class="dropdown-button">
            <WebButton text="Read Bio" img="button_pink_normal.svg" hover="button_pink_hover.svg" click="button_pink_onclick.svg" textAlign="-1.5rem"/>
          </button>
          <img class="arrow" :style="{transform: `rotate(${degree1}deg)`}" :src="'/buttons/expand-arrow.svg'" alt="arrow"/>
        </div>
        
        <p v-if="isOpen1" class="description">
          Brittany has spent the past decade at the intersection of people and technology, making sure products are built effectively and used responsibly. She has worn many hats—sales, software development, solutions engineering—and now works as an AI Agent Engineer at Magical, a startup building AI agents to support healthcare's most monotonous admin work.
She recently completed her Master’s in AI Ethics and Society at the University of Cambridge, where her research explored how AI is used in critical decision-making. Brittany is now channelling that work into building AI literacy programs that help teams navigate both the opportunities and the risks of deploying AI.
For Brittany, responsible technology isn’t just about better systems—it’s about building a future where everyone has a voice in how those systems are made and used.
        </p>
      </div>

      <div class="speaker-card second">
        <div class="image-wrapper">
          <img class="ghost-frame" src="/public/keynote-speakers/speaker_frame_2.svg" alt="ghost frame" />
          <img class="speaker-2" src="/public/keynote-speakers/candice.png" alt="Brittany" />
        </div>
        <h1 class="speaker-name">Candice Scarborough</h1>
        <p class="speaker-info">Senior Technical Director at Parsons</p>
        <p class="speaker-info">She/Her</p>
        <div class="btn-container">
          <button @click="toggleDropdown(2)" class="dropdown-button">
            <WebButton text="Read Bio" img="button_pink_normal.svg" hover="button_pink_hover.svg" click="button_pink_onclick.svg" textAlign="-1.5rem"/>
          </button>
          <img class="arrow" :style="{transform: `rotate(${degree2}deg)`}" :src="'/buttons/expand-arrow.svg'" alt="arrow"/>
        </div>
        <p v-if="isOpen2" class="description">
          Candice Scarborough is a senior technology executive, speaker, and mentor with over 18 years of experience leading innovative teams at the intersection of software engineering, cybersecurity, and space and defense systems. As a Technical Director at Parsons Corporation, she spearheads efforts that protect national security through cutting-edge cyber solutions, advanced engineering, and systems design.
Beyond her corporate leadership, Candice is the host of Glitch Grind Glow, a podcast spotlighting Black entrepreneurs and innovators in tech, where she shares stories that inspire and empower diverse communities to thrive in technology. Passionate about mentorship and inclusion, she has dedicated her career to building pathways for underrepresented groups—helping future innovators navigate opportunities in cybersecurity, cloud, and AI.
Her career blends strategic oversight with hands-on innovation, and her influence stretches from national security programs to startup ecosystems. Candice believes that the future of tech is one where equity and innovation walk hand-in-hand, and she works every day to ensure the next generation of technologists is equipped to lead boldly.
        </p>
      </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isOpen1 = ref(false);
const isOpen2 = ref(false);
let degree1 = 0;
let degree2 = 0;
const toggleDropdown = (dropdownNumber: number) => {
  if (dropdownNumber === 1) {
    isOpen1.value = !isOpen1.value;
    degree1 = degree1 == 180 ? 0 : 180;
  } else if (dropdownNumber === 2) {
    isOpen2.value = !isOpen2.value;
    degree2 = degree2 == 180 ? 0 : 180;
  }
};
</script>

<style scoped lang="scss">
.image-wrapper {
  position: relative;
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ghost-frame {
  position: absolute;
  width: 100%;
  height: auto;
  z-index: 2; /* on top if needed, or use 1 if frame should be behind */
}

.speaker-1 {
  position: absolute;
  width: 75%; /* adjust until it fits nicely inside the ghost circle */
  height: 76%;
  border-radius: 50%; /* optional: if you want the image circular */
  object-fit: cover;
  z-index: 1;
  top: 14%;
  left: 14%;
}

.speaker-2 {
  position: absolute;
  width: 73%; /* adjust until it fits nicely inside the ghost circle */
  height: 74%;
  border-radius: 50%; /* optional: if you want the image circular */
  object-fit: cover;
  z-index: 1;
  top: 14%;
  left: 20%;
}

.first {
  margin-right: 5rem;
}

.button-image {
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

.speaker-name {
  margin-top: 1rem;
  text-align: center;
  color: white;
  text-shadow: 1.5px 1.5px 0 #00473e, -1.5px -1.5px 0 #00473e,
    1.5px -1.5px 0 #00473e, -1.5px 1.5px 0 #00473e;
}

.speaker-info {
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

@media screen and (max-width: 768px) {
  .speaker-container {
    flex-direction: column;
    align-items: center; // center stack
    gap: 3rem; // optional: reduce gap on mobile
  }

  .speaker-card {
    max-width: 400px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .arrow {
    left: 85%; // if arrow is too far out on small screens
  }
}
</style>
