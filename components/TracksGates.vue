<template>
  <a
    :href="link"
    class="image-container"
    @click.prevent="isClick = !isClick"
  >
    <img class="image" :src="`/tracks/${img as string}`" />
    <img
      class="click-image"
      :src="`/tracks/${click as string}`"
      :style="{ opacity: isClick ? 1 : 0 }"
    />
    <span :style="{ color: textColor ? textColor : 'white', opacity: isClick ? 1 : 0}">{{ text }}</span>
  </a>
  
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  text: String,
  textColor: String,
  textAlign: String,
  link: String,
  img: String,
  click: String
});

const isClick = ref(false);

</script>

<style scoped lang="scss">
a {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: 12rem;
  margin: auto;
  margin-bottom: 1rem;
  cursor: pointer;
}

.image-container {
  position: relative;
  padding-left: 10%;
  padding-right: 10%;
  margin-top: -10%;
  margin-bottom: -10%;
}

.image {
  //width: 120%;
  opacity: 1;
  transition: opacity 0.5s linear;
  min-width: 40vw;
}

.click-image {
  position: absolute;
  //top: 2%;
  //left: -7%;
  //width: 100%;
  opacity: 0;
  transition: opacity 0.5s;
  min-width: 40vw;
}

span {
  position: absolute;
  margin: 0;
  top: 31%;
  white-space: nowrap;
  font-weight: 500;
  transition: opacity 0.3s ease;
  opacity: 0;

  white-space: normal;
  text-align: center;
  max-width: 16vw;
  word-break: break-word;

  max-height: 50%;
  overflow-y: auto;
  font-size: 100%;
}
span::-webkit-scrollbar {
  width: 8px;
}

span::-webkit-scrollbar-thumb {
  background-color: #EFE4DCCC;
  border-radius: 4px;
}

@media screen and (max-width: 800px) {
  .image, .click-image {
    min-width: 80vw;
  }
  span {
    max-width: 30vw;
    font-size: 90%;
  }
}
</style>