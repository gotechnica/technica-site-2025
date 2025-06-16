<template>
  <div class="profile-card">
    <div class="profile-image-wrapper">
      <img
        :src="image && image.trim() !== '' ? image : placeholder"
        alt="Profile picture"
        class="profile-image"
      />
      <a :href="linkedin" target="_blank" rel="noopener noreferrer" v-if="linkedin">
        <img
          src="../assets/linkedin-icon.png"
          alt="LinkedIn"
          class="linkedin-badge"
        />
      </a>
    </div>
    <p class="profile-name" style="font-weight: bold; font-size: 1.1rem;">{{ name }}</p>
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
  width: 160px;
  text-align: center;
  position: relative;
}

.profile-name {
  font-size: 0.85rem;
  text-align: center;
  margin-bottom: .5rem;
  margin-top: .3rem;
}

.profile-text {
  margin: 0.1rem 0;
  font-size: 0.8rem;
  line-height: 1.3;
  text-wrap-style: pretty;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: normal;
  text-align: center;
}

.profile-image-wrapper {
  position: relative;
  display: inline-block;
  border-radius: 50%;
  transition: border 0.3s ease;
}

.profile-image {
  width: 110px;
  height: 110px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 0.5rem;
  transition: box-shadow 0.3s ease;
}

.profile-image-wrapper:hover .profile-image {
  box-shadow: 0 0 0 4px white;
}

.linkedin-badge {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 35px; /* width of linkedin badge*/
  height: 35px; /* height of linkedin badge*/
  border-radius: 6px;
  background-color: white;
  padding: 2px;
  opacity: 0;
  transition: opacity 0.3s ease;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
}

.profile-image-wrapper:hover .linkedin-badge {
  opacity: 1;
}

</style>
