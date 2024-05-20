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
          <img class="flip-arrow" src="/testimonials/flip-arrow.svg" alt="flip arrow">
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
          <img class="flip-arrow" src="/testimonials/flip-arrow.svg" alt="flip arrow">
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

<style scoped>

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
  background-image: url("/testimonials/testimony-card.svg");
  background-size: 193% 193%;
  background-repeat: no-repeat;
  background-position: center;
  border: 0.7rem solid #D7316E;
  border-radius: 3rem;
  background-color: #FFFBEF;
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
  border: 0.6rem solid #8E1E4D;
  border-radius: 30px;  
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 1.3rem;
  text-align: center;
  text-decoration-line: underline;

  color: #A6871B;

  background-color: transparent;
  border-width: 0;
  white-space: nowrap;
  /* background-image: url("../assets/flip-arrow.svg");
  background-repeat: no-repeat;
  background-position: right; */
}
/* 
.flip-arrow {
} */

/* responsivity */
@media screen and (max-width: 1300px) {
  p {
    font-size: 1.2vw;
  }
}

@media screen and (max-width: 992px) {

  .card-back, .card-front {
    flex-direction: column-reverse !important;
    padding: 0 !important;
    padding-bottom: 10rem !important;
    background-image: none;
  }

  .left-column {
    width: 80%;
    margin-top: 22vw;
  }

  .right-column {
    position: absolute;
    top: -80px;
    margin-left: 0;
  }

  .card {
    width: 55vw;
    height: 55vw;
  }

  .image-container {
    width: 75%;
    padding-top: 75%;
    margin: 0;
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
    margin-top: 50vw;
  }
}

@media screen and (max-width: 365px) {
  .left-column {
    margin-top: 75vw;
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
