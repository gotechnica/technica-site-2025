<!-- Displays a collapsable accordian, props to pass in: question, answer, and unique collapse-id (format: collapse-#) -->
<template>
    <div class = "row event-item">
      <div class = "col-md-3 time-container" :style="{ backgroundColor: color }">
        <h1 class = "time"> {{startTime}} </h1>
      </div>
      <div class = "col-md-9 content-container">
        <h1 class = "title"> {{title}} </h1>
        <h5 v-html="description"> </h5>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  
  const props = defineProps({
    startTime: String,
    title: String,
    description: String,
    color: String
  })
  </script>
  
  <style lang="scss" scoped>
    @import '~/assets/styles/_variables.scss';
    .time {
      text-align: center;
      color: white;
    }
  
    .time-container, .content-container {
      padding: 2%;
    }
  
    .title {
      font-size: 200%;
    }
  
    .event-item {
      border-top: 3px solid $GOLD;
      color: black;
    }
  
    h5 {
      font-size: 150%;
    }
    @media (max-width: 768px) {
      .content-container {
        padding: 3%;
      }
    }
  </style>
  