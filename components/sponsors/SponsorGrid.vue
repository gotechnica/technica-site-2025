<template>
  <div class="sponsors-rect" role="list" aria-label="Sponsors">
    <a
      v-for="s in sponslist"
      :key="s.name"
      class="logo-card"
      :href="s.link"
      target="_blank"
      rel="noopener"
      :aria-label="`Visit ${s.name} website`"
      role="listitem"
    >
      <img
        :src="`/sponsors/${s.name}.png`"
        :alt="s.name"
        class="company-logo"
        loading="lazy"
      />
    </a>
  </div>
</template>

<script setup lang="ts">
import type { SponsorInfo } from './sponsor-info'
defineProps<{ sponslist: SponsorInfo[] }>()
</script>

<style scoped lang="scss">
/* Responsive rectangle grid; left→right ordering, wraps into rows */
.sponsors-rect {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 1.25rem 1rem;
  align-items: center;
  justify-items: center;
}

@media (max-width: 1280px) { .sponsors-rect { grid-template-columns: repeat(5, 1fr); } }
@media (max-width: 1024px) { .sponsors-rect { grid-template-columns: repeat(4, 1fr); } }
@media (max-width: 768px)  { .sponsors-rect { grid-template-columns: repeat(3, 1fr); } }
@media (max-width: 520px)  { .sponsors-rect { grid-template-columns: repeat(2, 1fr); } }

.logo-card {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5.5rem;
  width: 100%;
  padding: .5rem .75rem;
  border-radius: 14px;
  text-decoration: none;
}

.company-logo {
  max-height: 3.5em;
  max-width: 100%;
  filter: grayscale(100%);
  opacity: 0.65;
  transition: transform 0.2s ease, filter 0.2s ease, opacity 0.2s ease;
}

.sponsors-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 2rem;
  justify-items: center;
  align-items: center;
  text-align: center;
}


.logo-card:hover .company-logo,
.logo-card:focus .company-logo {
  filter: grayscale(0%);
  opacity: 1;
  transform: scale(1.06);
}

@media (prefers-reduced-motion: reduce) {
  .company-logo { transition: none; }
}
</style>
