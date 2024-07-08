<!-- this component is meant to work with testimonies-carousel.vue -->
<template>
  <div class="card" :class="{ flipped: isFlipped }">
    <div class="card-front">
      <div class="left-column">
        <!-- <h1 style="margin-left: 0;">"</h1> -->
        <p>{{ testimonyDescription }}</p>
        <h3>{{ hackerName }}</h3>
        <h4>{{ hackerDesc }}</h4>
      </div>
      <div class="right-column">
        <div class="image-container">
          <img :src="`${hackerImage}`" alt="Hacker Image" />
        </div>
        <div v-if="hasProject">
          <button class="flip-button" @click="flipCard">Flip To Project</button>
          <img class="flip-arrow" src="/testimonials/flip.svg" alt="flip arrow">
        </div>
      </div>
    </div>
    <div class="card-back">
      <div class="left-column">
        <h3>{{ projectName }}</h3>
        <h4>{{ projectCategories }}</h4>
        <p>{{ projectDescription }}</p>
      </div>
      <div class="right-column">
        <div class="image-container">
          <img :src="`${projectImage}`" alt="Project Image" />
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
import { defineComponent } from 'vue';

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
      isFlipped: false
    };
  },
  methods: {
    flipCard() {
      this.isFlipped = !this.isFlipped;
    }
  }
});
</script>

<style scoped lang="scss">

.card {
  position: absolute;
  width: 50vw;  
  height: 39.6vw;
  max-width: 710px;
  max-height: 550px;
  perspective: 1000px; /* Add perspective for 3D effect */
  border-width: 0;
  border-radius: 3rem;
  background-color: transparent;
}

.card-back,
.card-front {
  visibility: visible;
  background-image: url("/testimonials/testimonial-card.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-color: transparent;
}

.card .card-front,
.card .card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden; /* Hide backface of the card */
}

/* front and back styling */
.card .card-front {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  transition: transform 0.6s;
}

.card .card-back {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  transform: rotateX(180deg); /* Initial flip */
  transition: transform 0.6s;
}
/* flip visuals */
.card.flipped .card-front {
  transform: rotateX(180deg);
}

.card.flipped .card-back {
  transform: rotateX(0);
}

/* stlying card sections */
.left-column {
  width: 60%;
  flex: 1;
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

h1 {
  padding-right: 100%;
}

h3 {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
}

h4 {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 0.8rem;
}

button.flip-button {
  margin-top: 1rem;
  font-weight: bold;
  font-size: 1.3rem;
  text-align: center;
  color: black;
  background-color: transparent;
  border-width: 0;
  white-space: nowrap;
}
/* 
.flip-arrow {
} */

/* responsivity */

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

.card-back,
.card-front {
  background-image: none;
  background-color: #EBBCCA;
  border-radius: 20px;
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
