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

  padding: 2rem;
  border-radius: 14px;
  background: rgb(159, 138, 178);
  box-shadow: 0 10px 40px 10px #6e599880;

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
  padding: .5rem .75rem;
  width: 100%;
  border-radius: 14px;
  text-decoration: none;
}

.company-logo {
  max-height: 3.5em;
  max-width: 100%;
  filter: grayscale(100%);
  opacity: 0.80;
  padding: .5rem;
  border-radius: 14px;
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
.logo-card:focus-visible .company-logo {
  filter: grayscale(30%) 
  drop-shadow(0 0 2px rgb(251, 233, 255))
  drop-shadow(0 0 3px rgba(251, 233, 255, 0.9))
  drop-shadow(0 0 10px rgba(251, 233, 255, 0.9))
   drop-shadow(0 0 16px rgba(251, 233, 255, 0.9));
  opacity: 1;
  transform: scale(1.10);
}

@media (prefers-reduced-motion: reduce) {
  .company-logo { transition: none; }
}
</style>
