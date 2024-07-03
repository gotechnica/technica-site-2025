<template>
    <div class="container">
      <div class="header-container">
        <h1>Hybrid Environment</h1>
      </div>
      <div class="row">
        <div class="col-sm" v-for="(item, index) in items" :key="index">
          <div class="larger-circle mx-auto" :style="{ backgroundColor: item.circleColor }">
            <div class="icon-circle mx-auto">
              <h2>LOGO</h2>
            </div>
          </div>
          <div class="caption-box mx-auto" :style="{ backgroundColor: item.boxColor, borderColor: item.borderColor }">
            <div class="caption-inner">
              <h3 :style="{ '--stroke-color': item.color }">{{ item.title }}</h3>
              <p>{{ item.content }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const items = ref([
    { 
      title: "In-Person", 
      content: "Lorem ipsum dolor sit amet consectetur. Tincidunt tortor nunc est urna. Interdum morbi malesuada velit massa facilisi. Est at elementum et aliquet mi. Lorem ipsum dolor sit amet consectetur. Tincidunt tortor nunc est urna. Interdum morbi malesuada velit massa facilisi. Est at elementum et aliquet mi.", 
      color: '#00473E',
      circleColor: '#00473E',
      boxColor: '#00796B',
      borderColor: '#00473E'
    },
    { 
      title: "Hybrid", 
      content: "Lorem ipsum dolor sit amet consectetur. Tincidunt tortor nunc est urna. Interdum morbi malesuada velit massa facilisi. Est at elementum et aliquet mi. Lorem ipsum dolor sit amet consectetur. Tincidunt tortor nunc est urna. Interdum morbi malesuada velit massa facilisi. Est at elementum et aliquet mi.", 
      color: '#FF4081',
      circleColor: '#D26B89',
      boxColor: '#E9A4B6',
      borderColor: '#D26B89'
    },
    { 
      title: "Virtual", 
      content: "Lorem ipsum dolor sit amet consectetur. Tincidunt tortor nunc est urna. Interdum morbi malesuada velit massa facilisi. Est at elementum et aliquet mi. Lorem ipsum dolor sit amet consectetur. Tincidunt tortor nunc est urna. Interdum morbi malesuada velit massa facilisi. Est at elementum et aliquet mi.",  
      color: '#F0B54F',
      circleColor: '#F0B54F',
      boxColor: '#F0CA78',
      borderColor: '#F0B54F'
    }
  ]);
  </script>
  
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
  

  .larger-circle, .icon-circle {
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .larger-circle {
    width: 216px;
    height: 216px;
    margin-bottom: 20px;
  }
  
  .icon-circle {
    width: 170px;
    height: 170px;
    background-color: #F3E5F5;
  }
  
  .caption-box {
    width: 365px;
    height: 443px;
    border-radius: 40px;
    box-sizing: border-box;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: center;
    border-width: 5px;
    border-style: solid;
  }
  
  .caption-box h3, .caption-box p {
    margin: 0;
    color: white;
  }
  
  .caption-box h3 {
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: var(--stroke-color);
    font-size: 36px;
  }
  
  .container {
    text-align: center;
  }
  
  .icon-circle h2 {
    margin: 0;
  }
  
  .col-sm {
    padding: 15px;
  }
  </style>
  