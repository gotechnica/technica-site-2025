<!-- Uses vue3-carousel--->

<!-- Template -->
<template>
  <div class="card">
    <div
      class="card-contents"
      :style="{ backgroundImage: `url(${whatToDoImg})` }"
      @click="$emit('click')"
    >
      <div v-if="showDesc" class="overlay-text">
        <p>{{ whatToDoDesc }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    whatToDoImg: {
      type: String,
      required: true,
    },
    whatToDoTitle: {
      type: String,
      required: true,
    },
    whatToDoDesc: {
      type: String,
      required: true,
    },
    showDesc: { 
      type: Boolean, 
      required: true 
    },
  },
  emits: ['click'],
});
</script>

<style scoped>
.card {
  position: relative;
  display: contents;
  flex-direction: column;
  align-content: center;
  border-radius: 1rem;
  border-width: 0;
  transition: transform 0.6s;
  visibility: visible;
}

.card-contents {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.overlay-text {
  background-color: rgba(0, 0, 0, 0.805);
  color: #fffbef;
  border: 0.3rem solid #6b80a2;
  border-radius: 30px;
  padding: 2rem;
  margin: 0.5rem;
  z-index: 10;
}

/* responsivity */
@media screen and (max-width: 1300px) {
  p {
    font-size: 1.2vw;
  }
}

@media screen and (max-width: 992px) {
  p {
    font-size: 80%;
  }
}
</style>