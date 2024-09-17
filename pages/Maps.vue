<template>
    <div style="margin-top: 5rem;"></div>
    <Header>Maps</Header>
    <div style="margin-top: 5rem;"></div>
    <div class="container">
      <div class="col">
        <img class="map" src="/maps/" />
      </div>
  
      <div class="col">
        <img class="map" src="/maps/" />
      </div>
      <StickyButton></StickyButton>
    </div>
  </template>
  
  <script setup lang="ts">
  
  </script>
  
  <style scoped lang="scss">
  .map {
    max-width: 90vw;
    margin-top: 3rem;
  }
  
  .container {
    align-items: center;
    margin-bottom: 10rem;
  }
  </style>