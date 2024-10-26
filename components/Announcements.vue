<template>
    <div class="announcements-container">
      <div class="announcements-box"> 
        <div class="announcements-header-container">
          <img src="/public/hero/left-trumpet.png" alt="Left Image" class="header-image" />
          <h2 class="announcements-header">Announcements</h2>
          <img src="/public/hero/right-trumpet.png" alt="Right Image" class="header-image" />
        </div>
  
        <ul class="announcement-list">
          <li
            v-for="(announcement, index) in visibleAnnouncements"
            :key="index"
            class="announcement-item"
          >
            <div class="announcement-title">{{ announcement.title }}</div>
            <div class="announcement-text">{{ announcement.text }}</div>
          </li>
        </ul>
        <div class="button-container">
          <button @click="toggleShowMore" class="show-more-button">
            {{ isExpanded ? 'Show Less' : 'Show More' }}
          </button>
        </div>
      </div>
  
      <!-- <div class="announcement-bubble" :class="{ 'announcement-bubble-expanded': isExpanded }">
        <h3 class="previous-announcements-header"></h3>
        <ul class="announcement-list">
          <li
            v-for="(announcement, index) in previousAnnouncements"
            :key="index"
            class="announcement-item"
          >
            <div class="announcement-title">{{ announcement.title }}</div>
            <div class="announcement-text">{{ announcement.text }}</div>
          </li>
        </ul>
        <div class="button-container">
          <button @click="toggleShowMore" class="show-more-button">
            {{ isExpanded ? 'Show Less' : 'Show More' }}
          </button>
        </div>
      </div> -->
    </div>
  </template>
  
  
  
    <script setup lang="ts">
    import { ref, computed } from 'vue';
    
    const announcements = ref([
        { title: "Welcome!", text: "No major announcements yet. The timer will start when hacking begins!" },
    ]);
    
    // const previousAnnouncements = ref([
    //   { title: "Announcement 4", text: "Details about event 4..." },
    //   { title: "Announcement 5", text: "Details about event 5..." },
    //   { title: "Announcement 6", text: "Details about event 6..." },
    // ]);
    
    const visibleCount = ref(3);
    const isExpanded = ref(false);
    
    const visibleAnnouncements = computed(() => {
      return announcements.value.slice(0, visibleCount.value);
    });
    
    const toggleShowMore = () => {
    isExpanded.value = !isExpanded.value;
    
    const bubbleElement = document.querySelector('.announcement-bubble');
    if (bubbleElement) {
      if (isExpanded.value) {
        bubbleElement.classList.add('expanded');
      } else {
        bubbleElement.classList.remove('expanded');
      }
    }
    
    if (isExpanded.value) {
      visibleCount.value = announcements.value.length;
    } else {
      visibleCount.value = 3;
    }
  };
  
    </script>
    
    <style scoped lang="scss">
    @font-face {
      font-family: 'Poppins';
      src: url('@/assets/fonts/Poppins-Regular.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
    }
    
    @font-face {
      font-family: 'Poppins';
      src: url('@/assets/fonts/Poppins-Bold.ttf') format('truetype');
      font-weight: bold;
      font-style: normal;
    }
  
    .announcements-container {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  
  
  .announcements-box {
    background-color: #69B7AE; 
    border: 6px solid #09665B;
    border-radius: 10px;
    padding: 1rem;
    width: 90%; 
  }
  
    .announcements-header-container {
    display: flex; 
    align-items: center; 
    justify-content: center; 
    margin-bottom: 1rem;
    width: 100%;
  }
  
  .header-image {
    width: 70px; 
    height: auto; 
    margin: 0 10px; 
  }
    
  .announcements-header {
    font-size: 3rem;
    margin-top: 5px;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    color: white;
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-decoration-color: #09665B;
    text-underline-offset: 5px;
    -webkit-text-stroke: 2px #09665B; 
  }
  
  .announcement-list {
    margin-top: -2px;
    list-style: none;
    border-radius: 10px; 
    width: 60%;
  }
  
  .announcement-bubble {
    position: absolute;
    top: 84%; 
    left: 50%; 
    transform: translateX(-50%); 
    width: 60%; 
    padding: 1rem; 
    border-radius: 10px;
    background-color: #69B7AE; 
    border-bottom: 6px solid #09665B;
    border-left: 6px solid #09665B;
    border-right:  6px solid #09665B;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;
    opacity: 0;
    z-index: 1; 
  }
  
  .announcement-bubble-expanded {
    max-height: 500px;
    opacity: 1;
  }
  
  .announcement-item {
    margin: 0.5rem 0; 
    padding: 1rem; 
    border-radius: 5px; 
  }
  
  .announcement-title {
    font-size: 1.7rem;
    font-weight: bold;
    font-family: 'Poppins', sans-serif;
    color: white;
    text-decoration: underline;
  }
  
  .announcement-text {
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
    color: white;
    text-shadow: 2px 2px 0 #09665B; 
  }
  
  .button-container {
    display: flex;
    justify-content: center; 
    margin-top: 1rem; 
  }
  
  .show-more-button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
    background-color: #69b7ae;
    color: white;
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
  }
  
  .show-more-button:hover {
    background-color: #0a7e68;
  }
  
  @media screen and (max-width: 768px) {
    .announcements-box,
    .announcement-bubble {
      width: 90%; 
      padding: 0.5rem;
    }
  
    .announcements-header {
      font-size: 2.5rem; 
    }
  
    .announcement-title {
      font-size: 1.5rem; 
    }
  
    .announcement-text {
      font-size: 0.9rem; 
    }
  
    .header-image {
      width: 50px;
    }
  
    .show-more-button {
      font-size: 1rem;
    }
  }
  
  @media screen and (max-width: 500px) {
    .announcements-header {
      font-size: 2rem; 
    }
  
    .announcement-title {
      font-size: 1.2rem; 
    }
  
    .announcement-text {
      font-size: 0.8rem; 
    }
  
    .header-image {
      width: 40px; 
    }
  
    .show-more-button {
      font-size: 0.9rem; 
    }
  }
  
</style>
    