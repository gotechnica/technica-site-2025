<template>
  <div v-if="mounted" class="about-technica-wrapper">

    <div class="stat-card-container">
      <img class="edge-icon" src="/about-technica/pink-trophy.png" />
      <div class="stat-card" id="pink">
        <h1>8</h1>
        <p>years of Technica</p>
      </div>
    </div>

    <div class="stat-card-container">
      <img class="edge-icon" src="/about-technica/blue-trophy.png" />
      <div class="stat-card" id="blue">
        <h1>40+</h1>
        <p>sponsors each year</p>
      </div>
    </div>

    <div class="stat-card-container">
      <img class="edge-icon" src="/about-technica/purple-trophy.png" />
      <div class="stat-card" id="purple">
        <h1>1200+</h1>
        <p>hackers and counting</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Render component after mount to avoid hydration errors
const mounted = ref(false);
onMounted(() => {
  mounted.value = true;
});
</script>

<style scoped lang="scss">
.about-technica-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  flex-wrap: wrap;
  gap: 2rem;
  width: 100%;
}

img {
  height: 12rem;
}

.stat-card-container {
  position: relative;
}

.edge-icon {
  position: absolute;
  height: 4rem;
  z-index: 2;
  top: -20px;
  left: 240px;
}

.stat-card {
  position: relative;
  color: #ffffff;
  text-align: center;
  padding: 1rem 0.5rem 1rem 0.5rem;
  width: 18rem;
  border-radius: 1rem;
  z-index: 1;
}

#pink {
  background-color: $PINK;
}

#blue {
  background-color: $BLUE;
}

#purple {
  background-color: $DARK_PURPLE;
}

@media screen and (max-width: 480px) {
  .stats {
    margin-top: -7.5rem;
  }
}
</style>
