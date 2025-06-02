<template>
  <div class="profile-card">
    <div class="profile-image-wrapper">
      <img
        :src="image && image.trim() !== '' ? image : placeholder"
        alt="Profile picture"
        class="profile-image"
      />
    </div>
    <p class="profile-text" style="font-weight: bold; font-size: 1.1rem;">{{ name }}</p>
    <p class="profile-text">{{ title }}</p>
    <p class="profile-text">{{ pronouns }}</p>
  </div>
</template>

<script setup>
import blankProfilePic from '../assets/blank-profile-picture.png'

defineProps({
  name: String,
  title: String,
  pronouns: String,
  image: String,
  linkedin: String
})

const placeholder = blankProfilePic
</script>

<style scoped>
.profile-card {
  padding: 1rem; 
  border-radius: 0.5rem; 
  width: 220px;
  text-align: center;
}

.profile-image-wrapper {
  border-radius: 50%;
  display: inline-block;
  transition: border 0.3s ease;
}

.profile-image {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 0.5rem;
}

.profile-image-wrapper:hover .profile-image {
  box-shadow: 0 0 0 4px white;
}

.profile-text {
  margin: 0.25rem 0;
  line-height: 1.2;
  font-size: 0.95rem;
}
</style>
