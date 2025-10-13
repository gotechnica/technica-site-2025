<template>
  <Header>Sponsors</Header>
  <div class="sponsor-grid">
    <SponsorsSponsorGrid :sponslist="sponsors" />
  </div>
</template>

<script setup lang="ts">
import type { SponsorInfo } from './sponsor-info'
import SponsorsSponsorGrid from '~/components/sponsors/SponsorGrid.vue'

const sponsors: SponsorInfo[] = [
  { name: 'umd-cs', link: 'https://www.cs.umd.edu/' },
  { name: 't-rowe-price', link: 'https://www.troweprice.com/' },
  { name: 'intuit', link: 'https://www.intuit.com/' },
  { name: 'capital-one', link: 'https://www.capitalone.com/' },
  { name: 'umd-clark', link: 'https://eng.umd.edu/' },
  { name: 'atpco', link: 'https://www.atpco.net/' },
  { name: 'visionist', link: 'https://www.visionistinc.com/' },
  { name: 'bloomberg-industry', link: 'https://www.bloomberg.com/company/' },
  { name: 'afcea', link: 'https://www.afcea.org/' },
  { name: 'ey', link: 'https://www.ey.com/' },
  { name: 'codepath', link: 'https://www.codepath.org/' },
]

</script>

<style scoped lang="scss">
.sponsor-grid {
  margin: 2rem auto;
  padding: 10px;
}
</style>
