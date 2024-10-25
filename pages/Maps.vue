<template>
  <title>Maps</title>
    <div class="container">
      <div class="overall">
        <div class="title">
          <Header>Overall Map</Header>
        </div>
        <div class="center">
          <img class="map" src="/maps/overall_map-01.svg" />
        </div>
      </div>
      <div class="full-width">
        <img class="map" src="/maps/tmh_map-02.svg" />
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
  margin-top: 2rem;
  height: auto;
}

.center {
  margin-right: 25vw;
}

.title {
  padding-top: 5rem;
}

.full-width{
  width: 100%;
  display: flex;
  justify-content: center;
}

.container {
  align-items: center;
  margin-bottom: 5rem;
}

.col{
  display: flex;
  justify-content: center;
}
</style>
