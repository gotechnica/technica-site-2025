<template>
  <div class="environments">
    <div class="icon-container">
      <img class="icon" :src="circle" alt="circle" />
    </div>
    <div class="box-container">
      <div class="rounded-border" :style="{ borderColor: color }">
        <div class="heading-container">
          <h3 :style="{ color: color }">{{ heading }}</h3>
        </div>
        <ul>
          <li v-for="item in textArray" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  circle: string;
  color: string;
  heading: string;
  textArray: string[];
}>();
</script>

<style scoped lang="scss">
@import '~/assets/styles/_variables.scss';
.box-container,
.icon-container,
.heading-container {
  display: flex;
  justify-content: center; /* Center items horizontally */
  align-items: center; /* Center items vertically */
}

.environments {
  width: 33%;
}
.rounded-border {
  height: fit-content;
  width: 90%;
  border-radius: 2rem; /* Specify the desired border radius for rounded corners */
  border: 0.35rem solid;
  margin: 0.25rem;
  padding: 5%;
}

.icon {
  justify-content: center;
  align-items: center;
  height: 10rem;
  width: 10rem;
  margin: 1rem;
}

@media screen and (max-width: 768px) {
  .rounded-border {
    border: none;
    height: auto;
  }
  .environments {
    width: 100%;
  }

  .rounded-border {
    width: 100%;
    padding: 0%;
  }
}
</style>
