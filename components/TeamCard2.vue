<template>
  <div class="cards-container">
    <div class="card photo-card">
      <img :src="team.photo" alt="team photo" />
    </div>
    <div class="card details-card">
      <h3>{{ team.name }}</h3>
      <p>{{ team.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  team: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.cards-container {
  display: flex;
  align-items: center;
  gap: 3rem;
  width: 40vw;
  background-color: transparent;
}

.card {
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
  height: 30rem;
  flex: 1;
}

.photo-card {
  background-color: #dcdcdc;
  display: flex;
  align-items: center;
  justify-content: center;
}

.photo-card img {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  border-radius: 0.8rem;
}

.details-card {
  background-color: #f0f0f0;
}

.details-card h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.details-card p {
  font-size: 1rem;
  color: #555;
}
</style>