<!-- Uses vue3-carousel--->

<!-- Template -->
<template>
    <div class="card" >
        <div class="card-contents">
            <div class="image-container">
                <img :src="`${whatToDoImg}`" alt="What To Do Image"/>
                <div v-if="showDesc" class="overlay-text">
                  <p> {{ whatToDoDesc }}</p>
                </div>
            </div>
            <div class="card-text">
                <div class="clickable-text" @click="toggleText" >
                  <h3>{{ whatToDoTitle }}</h3>
                </div>
            </div>
        </div>
    </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        whatToDoImg: {
            type: String,
            required: true
        },
        whatToDoTitle: {
            type: String,
            required: true
        },
        whatToDoDesc: {
          type: String,
          required: true
        },
    },
    data() {
      return {
        showDesc: false
      }
    },
    methods: {
      toggleText() {
        this.showDesc = !this.showDesc;
      }
    }
  });
  </script>
  
  <style scoped>
  
  .card {
    position: relative;
    display: contents;
    flex-direction: column;
    align-content: center;
    width: 50vw;  
    height: 40vw;
    max-width: 80vw;
    max-height: 60vh;
    border-radius: 3rem;
    transition: transform 0.6s;
    
  }
   
  .card-contents {
    border: 0.7rem solid #1e638e;
    border-radius: 3rem;
    background-color: #FFFBEF;
    width: 100%;
    height: 100%;
    position: relative;
  }

  .image-container {
    position: relative;
    padding: .5rem;
  }

  .image-container img{
    border-radius: .5rem;
    max-width: 45vw;
  }


  .card-text {
    position: relative;
    justify-content: center;
  }

  .overlay-text {
    position: absolute;
    top: 20%;
    background-color: rgba(0, 0, 0, 0.805); 
    color:#FFFBEF;
    border: 0.3rem solid #6b80a2;
    border-radius: 30px;  
    padding: 2rem;
    margin: .5rem;
  }

  .clickable-text {
      cursor: pointer; 
      padding: 0.5rem; 
      transition: all 0.3s ease;
  }

  .clickable-text:hover {
    text-shadow: 0 0 10px rgba(130, 156, 237, 10);
  }

  h3 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 2.5rem;
    }

  </style>
  