<template>
  <div class="schedule">
    <div class="container">
      <div class="page-header">
        <h1 class="title-2025">2025 Event Schedule</h1>
        <p class="subtitle-2025">Times &amp; sessions will update live.</p>
      </div>

      <div class="schedule-shell">
        <!-- Keep the original component exactly as before -->
        <Schedule />
      </div>
    </div>
  </div>
</template>

<!-- If your project does NOT auto-import components, uncomment this and adjust the path if needed -->
<!--
<script setup lang="ts">
import Schedule from '~/components/schedule/Schedule.vue'
</script>
-->

<style scoped lang="scss">
.schedule {
  min-height: 100vh;
  padding: 2.5rem 0 4rem;
  color: #ffffff;
}

/* match page widths used elsewhere */
.container {
  width: min(1200px, 92vw);
  margin: 0 auto;
}

/* 2025 heading (matches Fellows) */
.title-2025 {
  margin: 0;
  text-align: center;
  font-family: 'dinpro', system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
  font-size: clamp(1.6rem, 1.2rem + 1.5vw, 2.2rem);
  color: #cadaea;
}

.subtitle-2025 {
  margin: 0.5rem 0 1.5rem;
  text-align: center;
  opacity: 0.9;
}

/* glowing panel around the existing schedule component */
.schedule-shell {
  background: #1a1b27;
  border: 2px solid #ffffff;
  border-radius: 16px;
  padding: 1.25rem;
  box-shadow:
    0 0 20px rgba(255, 255, 255, 0.4),
    0 0 40px rgba(150, 120, 255, 0.3),
    0 0 60px rgba(100, 120, 255, 0.2);
}

@media (min-width: 768px) {
  .schedule-shell { padding: 1.75rem; }
}
</style>
