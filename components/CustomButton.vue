<template>
  <button
    type="button"
    :href="link"
    class="btn btn-primary"
  >
    {{ text }}
  </button>
  
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  text: String,
  link: String,
});

const isHover = ref(false);
const isClick = ref(false);

// const toggleClick = () => {
//   isClick.value = !isClick.value;
// };

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
</style>