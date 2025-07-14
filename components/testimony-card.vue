<template>
  <div class="card" :class="{ flipped: isFlipped, active: isActiveData}">
    <div class="card-front" @click=flipCard>
      <div class="left-column">
        <p>{{ testimonyDescription }}</p>
        <h3>{{ hackerName }}</h3>
        <h4>{{ hackerDesc }}</h4>
      </div>
      <div class="right-column">
        <div class="ghost-frame-container">
          <img src="/testimonials/speaker_frame_1.svg" alt="Ghost Frame" class="ghost-frame" />
          <img :src="hackerImage" alt="Headshot" class="headshot" />
        </div>
      </div>
    </div>
    <div v-if="isActiveData" class="card-back" @click=flipCard>
      <div class="left-column">
        <h3>{{ projectName }}</h3>
        <h4>{{ projectCategories }}</h4>
        <p>{{ projectDescription }}</p>
      </div>
      <div class="right-column">
        <div class="ghost-frame-container">
          <img src="/testimonials/speaker_frame_1.svg" alt="Ghost Frame" class="ghost-frame" />
          <img :src="projectImage" alt="Project" class="headshot" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    testimonyDescription: String,
    hackerName: String,
    hackerDesc: String,
    projectName: String,
    projectCategories: String,
    projectDescription: String,
    projectImage: String,
    hackerImage: String,
    hasProject: Boolean,
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
  position: relative;
  width: 50vw;
  height: 38vw;
  max-width: 700px;
  max-height: 500px;
  perspective: 1000px;
  border-radius: 1.5rem;
}

.card-front,
.card-back {
  background-color: #1A132F;
  color: white;
  border-radius: 1.5rem;
  padding: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  transition: transform 0.6s ease-in-out;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  position: absolute;
  box-shadow: 0 0 30px 5px rgba(255, 255, 255, 0.1);
  backface-visibility: hidden;
  overflow-wrap: break-word;
}

.card-back {
  transform: rotateY(180deg);
}

.card.flipped .card-front {
  transform: rotateY(180deg);
}

.card.flipped .card-back {
  transform: rotateY(360deg);
}

.left-column {
  width: 60%;
  text-align: left;
}

.right-column {
  width: 35%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ghost-frame-container {
  position: relative;
  width: 140px;
  height: 140px;
}

.ghost-frame {
  width: 100%;
  height: 100%;
}

.headshot {
  position: absolute;
  top: 13%;
  left: 13%;
  width: 80%;
  height: 80%;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid white;
}

h3 {
  font-family: 'Poppins';
  font-weight: 700;
  font-size: 1.5rem;
  margin-top: 1rem;
}

h4 {
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 0.9rem;
  color: #ccc;
}

p {
  font-size: 1rem;
  line-height: 1.5rem;
  word-wrap: break-word;
}

/* Mobile Responsiveness */
/* MOBILE RESPONSIVENESS */
@media (max-width: 768px) {
  .card {
    width: 95vw;
    max-width: none;
    margin: 0 auto;
    margin-top: 0.5rem; /* Adjust margin above */
    margin-bottom: 0.5rem; /* Add margin below */
    height: auto;
    overflow: hidden; /* Ensuring no overflow out of bounds */
  }

  .card-front,
  .card-back {
    flex-direction: column;
    padding: 1rem 1.2rem;
    position: relative;
    height: auto;
    max-height: 60vh; /* Control max height of card */
    overflow-y: auto; /* Enable scroll when content exceeds max height */
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-word;
  }

  .left-column,
  .right-column {
    width: 100%;
    text-align: center;
    margin-bottom: 1rem;
  }

  .ghost-frame-container {
    width: 100px;
    height: 100px;
    margin: 0 auto;
  }

  p {
    font-size: 0.95rem;
  }

  h3 {
    font-size: 1.2rem;
  }

  h4 {
    font-size: 0.8rem;
  }
}


</style>

