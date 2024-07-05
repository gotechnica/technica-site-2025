<template>
  <a
    :href="link"
    class="image-container"
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
    @mousedown="isClick = true"
    @mouseup="isClick = false"
  >
    <img class="image" :src="`/buttons/${img as string}`" />
    <img
      class="hover-image"
      :src="`/buttons/${hover as string}`"
      :style="{ opacity: isHover && !isClick ? 1 : 0 }"
    />
    <img
      class="click-image"
      :src="`/buttons/${click as string}`"
      :style="{ opacity: isClick ? 1 : 0 }"
    />
    <span :style="{ color: textColor ? textColor : 'white' , marginLeft: textAlign ? textAlign : '0rem'}">{{ text }}</span>
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
  hover: String,
  click: String
});

const isHover = ref(false);
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
}

.image {
  width: 120%;
  opacity: 1;
  transition: opacity 0.5s linear;
}

.hover-image,
.click-image {
  position: absolute;
  top: 2%;
  left: -7%;
  width: 120%;
  opacity: 0;
  transition: opacity 0.5s;
}

span {
  position: absolute;
  margin: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap;
  font-weight: 500;
}
</style>