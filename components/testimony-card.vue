<template>
  <div class="card" :class="{ flipped: isFlipped, active: isActiveData}">
    <div class="card-front" @click="flipCard">
      <div class="left-column">
        <p>{{ testimonyDescription }}</p>
        <h3>{{ hackerName }}</h3>
        <h4>{{ hackerDesc }}</h4>
      </div>
      <div class="right-column">
        <div class="ghost-frame-container">
          <img src="/public/testimonials/speaker_frame_1.svg" alt="Ghost Frame" class="ghost-frame" />
          <img :src="hackerImage" alt="Headshot" class="headshot" />
        </div>
        <div v-if="hasProject">
          <button class="flip-button" @click="flipCard">Flip To Project</button>
          <img class="flip-arrow" src="/testimonials/flip.svg" alt="flip arrow">
        </div>
      </div>
    </div>
    <div v-if="isActiveData" class="card-back" @click="flipCard">
      <div class="left-column">
        <h3>{{ projectName }}</h3>
        <h4>{{ projectCategories }}</h4>
        <p>{{ projectDescription }}</p>
      </div>
      <div class="right-column">
        <div class="ghost-frame-container">
          <img src="/public/testimonials/speaker_frame_1.svg" alt="Ghost Frame" class="ghost-frame" />
          <img :src="projectImage" alt="Project" class="headshot" />
        </div>
        <div>
          <button class="flip-button" @click="flipCard">Flip To Testimony</button>
          <img class="flip-arrow" src="/testimonials/flip.svg" alt="flip arrow">
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    testimonyDescription: {
      type: String,
      required: true
    },
    hackerName: {
      type: String,
      required: true
    },
    hackerDesc: {
      type: String,
      required: true
    },
    hackerImage: {
      type: String,
      required: true
    },
    projectName: {
      type: String,
      required: false
    },
    projectCategories: {
      type: String,
      required: false
    },
    projectDescription: {
      type: String,
      required: false
    },
    projectImage: {
      type: String,
      required: false
    },
    hasProject: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      isFlipped: false,
      isActiveData: false,
    }
  },
  methods: {
    flipCard() {
      if (this.hasProject === true) {
        if (this.isActiveData === true) {
          this.isFlipped = !this.isFlipped   
        } else {
          this.isActiveData = !this.isActiveData   
          this.isFlipped = false
        }
      }
    }
  }
})
</script>

<style scoped lang="scss">
.card {
  position: absolute;
  width: 50vw;
  height: 39.6vw;
  max-width: 710px;
  max-height: 550px;
  perspective: 1000px;
  border-width: 0;
  border-radius: 3rem;
  background-color: transparent;
}

.card-front,
.card-back {
  background-color: #1A132F;
  color: white;
  border: 2px solid #ffffff;
  border-radius: 16px;
  padding: 3rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  transition: transform 0.6s ease-in-out;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  position: absolute;
  box-shadow: 0 0 30px 5px rgba(255, 255, 255, 0.1);
  backface-visibility: hidden;
  overflow-wrap: break-word;
  box-shadow:
    0 0 20px rgba(255, 255, 255, 0.4),
    0 0 40px rgba(150, 120, 255, 0.3),
    0 0 60px rgba(100, 120, 255, 0.2);
}

.card-back {
  transform: rotateX(180deg);
}

.card.flipped .card-front {
  transform: rotateX(180deg);
}

.card.flipped .card-back {
  transform: rotateX(0);
}

.left-column {
  width: 60%;
  flex: 1;
  text-align: left;
}

.right-column {
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 2rem;
}

.image-container {
  width: 100%;
  padding-top: 100%; /* Maintain a square aspect ratio */
  position: relative;
  margin: 1rem;
}

.image-container img {
  border: 0.3rem solid $MIDGREEN;
  border-radius: 60%;  
  position: absolute;
  top: 0;
  left: 0;
  width: 110%;
  height: 110%;
  object-fit: cover;
}

.ghost-frame-container {
  width: 100%;
  padding-top: 100%; /* Maintain a square aspect ratio */
  position: relative;
  margin: 1rem;
}

.ghost-frame {
  position: absolute;
  top: -12%;
  left: -12%;
  width: 120%;
  height: 120%;
  z-index: 1;
  object-fit: contain;
  
}

.headshot {
  position: absolute;
  top: 5%;
  left: 5%;
  width: 90%;
  height: 90%;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid white;
  z-index: 0;
}

h3 {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 1.5rem;
  margin-top: 1rem;
}

h4 {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 0.8rem;
  color: #ccc;
}

p {
  font-size: 1rem;
  line-height: 1.5rem;
  word-wrap: break-word;
}

button.flip-button {
  margin-top: 1rem;
  font-weight: bold;
  font-size: 1.3rem;
  text-align: center;
  color: white;
  background-color: transparent;
  border-width: 0;
  white-space: nowrap;
}

@media screen and (max-width: 1100px) {
  .card {
    width: 55vw;
    height: 55vw;
  }

  button.flip-button {
    font-size: 0.9rem;
  }

  p {
    font-size: 80%;
  }
}

@media screen and (max-width: 768px) {
  .card {
    width: 50vw;
    height: 75vw;
  }

  .card-front,
  .card-back {
    background-color: #1A132F;
    border-radius: 20px;
    padding: 1rem 1.2rem;
  }

  .left-column {
    margin-top: 30vw;
  }

  .right-column {
    width: 50%;
    position: absolute;
    top: -60px;
    margin-left: 0;
  }


}

@media screen and (max-width: 630px) {
  .card {
    width: 70vw;
    height: 650px;
  }
}

@media screen and (max-width: 445px) {
  p {
    font-size: 80%;
  }

  .left-column {
    width: 80%;
    margin-top: 30vw;
  }
}

@media screen and (max-width: 365px) {
  .left-column {
    margin-top: 30vw;
    margin-left: -10vw;
    margin-right: -10vw;
  }

  button.flip-button {
    font-size: 0.8rem;
  }
}

@media screen and (max-width: 330px) {
  button.flip-button {
    font-size: 0.7rem;
  }
}
</style>