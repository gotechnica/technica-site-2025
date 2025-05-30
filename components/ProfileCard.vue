<template>
  <div class="profile-card">
    <img
      :src="image && image.trim() !== '' ? image : placeholder"
      alt="Profile picture"
      class="profile-image"
    />
    <p>{{ name }}</p>
    <p>{{ title }}</p>
    <p>{{ pronouns }}</p>
  </div>
</template>

<script setup>
import blankProfilePic from '../assets/blank-profile-picture.png'

defineProps({
  name: String,
  title: String,
  pronouns: String,
  image: String
})

const placeholder = blankProfilePic
</script>

<style scoped>
.profile-card {
  padding: 16px;
  border-radius: 8px;
  width: 200px;
  text-align: center;
}
.profile-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 8px;
}
</style>
