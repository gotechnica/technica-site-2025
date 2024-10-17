<template>
  <title>Maps</title>
  <div class="container">
    <div class="col">
      <img class="map map-left" src="/maps/overall_map-01.svg" />
    </div>
    <div class="col">
      <img class="map map-right" src="/maps/tmh_map-02.svg" />
    </div>
    <div class="full-width">
      <img class="map" src="/maps/arm_main-03.svg" />
    </div>
    <div class="full-width">
      <img class="map" src="/maps/arm_basement-04.svg" />
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.map {
  max-width: 100vw;
  margin: -2 auto; 
  display: block;
  height: auto;
}

.map-left {
  transform: translateX(-200px); 
}

.map-right {
  transform: translateX(50px);
}

.full-width,
.col {
  width: 100%;
  display: flex;
  justify-content: center;
}
.col img {
  margin-top: 0; 
  margin-bottom: 0; 
}

.container {
  align-items: center;
  margin-bottom: 2rem;
}

@media (max-width: 768px) {
  .col {
    flex-direction: column; 
    align-items: center; 
    margin-bottom: 1rem;
  }

  .map-left {
    transform: translateX(0); 
    margin: 0; 
  }

  .map-right {
    transform: translateX(0);
    margin: 0; 
  }
}
</style>
