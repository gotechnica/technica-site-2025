<!-- Page containing maps -->
<template>
  <title>Maps</title>
  <div class="container">
    <div class="col">
      <img class="map" src="/maps/accessible-first-level.png" />
    </div>

    <div class="col">
      <img class="map" src="/maps/accessible-conference-level.png" />
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
