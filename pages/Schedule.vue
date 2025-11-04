<template>
  <title>Schedule</title>
  <div style="margin-top: 1rem"></div>
  <Header>Schedule</Header>
  <div class="schedule-page">
    <div class="container">

      <!-- Wrap the component so we can safely hide its internal header only -->
      <div class="schedule-component">
        <Schedule />
      </div>
    </div>
  </div>
</template>

<!-- If your project does NOT auto-import components, uncomment and adjust: -->
<!--
<script setup lang="ts">
import Schedule from '~/components/schedule/Schedule.vue'
</script>
-->

<style scoped lang="scss">
.schedule-page {
  min-height: 100vh;
  padding: 2.5rem 0 4rem;
  color: #ffffff;
}

/* Make the schedule area wider than usual pages and center it */
.container {
  width: min(1400px, 98vw);
  margin: 0 auto;
  text-align: center;
}

/* Remove the decorative box entirely by not wrapping <Schedule/> in a shell */

/* Hide the FIRST header that the Schedule component renders,
   while keeping the page-level <Header> visible. */
:deep(.schedule-component h1:first-of-type),
:deep(.schedule-component .header:first-of-type) {
  display: none !important;
}
</style>
