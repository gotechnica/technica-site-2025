<template>
  <div class="card-front">
    <div class="left-column">
      <div class="image-container">
        <img :src="`${teamImage}`" alt="Team Image" />
      </div>
    </div>
    <div class="right-column">
      <h3>{{ teamName }}</h3>
      <h4>{{ teamDesc }}</h4>
    </div>
  </div>
</template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    props: {
      teamImage: {
        type: String,
        required: true
      },
      teamName: {
        type: String,
        required: true
      },
      teamDesc: {
        type: String,
        required: true
      }
    },
    data() {},
    methods: {}
  });
  </script>
  
  <style scoped>
  
  .card {
    position: absolute;
    width: 750vw;
    height: 39.6vw;
    perspective: 1000px; /* Add perspective for 3D effect */
    border-width: 0;
    border-radius: 3rem;
    background-color: transparent;
    margin: 0px;
  }
  
  .card-front {
    background-size: 193% 193%;
    background-repeat: no-repeat;
    background-position: center;
    background-color: #FFFBEF;
  }
  
  .card .card-front {
    position: absolute;
    width: 100%;
    height: 100%;
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
  
  /* stlying card sections */
  .left-column {
    border: solid black 1px;
    border-radius: 1rem;
    width: 47.5%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }
  
  .right-column {
    color: #ffb7c5;
    background-color: rgba(0, 255, 255, 0.1);
    border-radius: 1rem;
    width: 47.5%;
    height: 100%;
    position: absolute;
    right: 0;
    bottom: 0;
    padding: 2vw;
  }
  
  .image-container {
    width: 100%;
    height: 100%;
    margin: 1rem;
  }
  
  .image-container img { 
    border-radius: 1rem;
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
    font-weight: 100;
    font-size: 2.5rem;
  }
  
  h4 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 100;
    font-size: 1.4rem;
    margin-top: 5vh;
    text-align: left;
  }
  
  /* responsivity */
  @media screen and (max-width: 1300px) {
    .card .card-front {
      width: 75vw;
    }
  }
  
  @media screen and (max-width: 1000px) {
    .card-front {
      width: 75vw;
    }

    .card {
      width: 75vw;
    }

    p {
      font-size: 80%;
    }
  
    .left-column {
      visibility: hidden;
    }

    .right-column {
      width: 100%;
    }
  }
  
  @media screen and (max-width: 768px) {
    .card {
      width: 50vw;
      height: 75vw;
    }
  
    .left-column {
      visibility: hidden;
    }
  
    .right-column {
      width: 100%;
      margin-top: 0;
    }
  }
  
  @media screen and (max-width: 630px) {
    .card {
      width: 70vw;
      height: 650px;
    }

    .left-column {
      visibility: hidden;
    }

    .right-column {
      margin-top: 0px;
      width: 100%;
    }
  }
  
  @media screen and (max-width: 445px) {
    .card-front {
      width: 75vw;
    }

    .card {
      width: 75vw;
    }

    p {
      font-size: 80%;
    }
  
    .left-column {
      visibility: hidden;
    }

    .right-column {
      width: 100%;
      margin-top: 10vh;
    }
  }
  
  @media screen and (max-width: 365px) {
    .left-column {
      visibility: hidden;
    }

    .right-column {
      width: 75vw;
    }
  }
  
  </style>