<template>
  <div class="container">
    <div class="card" :style="{ borderColor: borderColor, padding: padding }">
      <h2>{{ heading }}</h2>
      <p>{{ description }}</p>
    </div>
    <img
      :src="`/tracks/${iconLink}`"
      class="icon"
      :alt="altText"
    />
    <span><slot /></span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  borderColor: String,
  padding: String,
  iconLink: String,
  altText: String,
  heading: String,
  description: String,
});
</script>

<style scoped lang="scss">
.container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 0;
  margin: 0;
}
.icon {
  position: absolute;
  top: 0;
  width: 8vw;
}

.card {
  margin-top: 4vw;
  border-radius: 0.5rem;
  border-style: solid;
  border-width: 7px;
  text-align: center;
  height: 80%;
  white-space: pre-line;
  border-radius: 3rem;
  width: 85%;
  background-color: #fffeff;
}

@media screen and (max-width: 768px) {
  .icon {
    width: 30vw;
  }

  .card {
    margin-top: 15vw;
    border-radius: 3rem;
    padding: 25% 10% 10% 10% !important;
    width: 100%;
  }
}

@media screen and (max-width: 1200px) {
  .card {
    height: 90%;
  }
}
</style>
