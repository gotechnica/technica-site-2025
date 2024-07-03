<template>
    <div class = "header-container">
      <h1>Sponsors</h1>
    </div>
    <div class="sponsor-grid">
      <!-- Partner Sponsors -->
      <h4><b>Partner</b></h4>
      <img class="underline" src="../../public/sponsors/blue_sponsor_underlining.svg" />
      <div class="sponsor-tier">
        <SponsorsSponsorGrid :sponslist="partnerSponsors" />
      </div>

      <!-- Platinum Sponsors -->
      <h4><b>Platinum</b></h4>
      <img class="underline" src="../../public/sponsors/blue_sponsor_underlining.svg" />
      <div class="sponsor-tier">
        <SponsorsSponsorGrid :sponslist="platinumSponsors" />
      </div>

      <!-- Gold Sponsors -->
      <h4><b>Gold</b></h4>
      <img class="underline" src="../../public/sponsors/blue_sponsor_underlining.svg" />
      <div class="sponsor-tier">
        <SponsorsSponsorGrid :sponslist="goldSponsors" />
      </div>

      <!-- Silver Sponsors -->
      <h4><b>Silver</b></h4>
      <img class="underline" src="../../public/sponsors/blue_sponsor_underlining.svg" />
      <div class="sponsor-tier">
        <SponsorsSponsorGrid :sponslist="silverSponsors" />
      </div>

      <!-- Bronze Sponsors -->
      <h4><b>Bronze</b></h4>
      <img class="underline" src="../../public/sponsors/blue_sponsor_underlining.svg" />
      <div class="sponsor-tier">
        <SponsorsSponsorGrid :sponslist="bronzeSponsors" />
      </div>

      <!-- Starter Sponsors -->
      <h4><b>Starter</b></h4>
      <img class="underline" src="../../public/sponsors/blue_sponsor_underlining.svg" />
      <div class="sponsor-tier">
        <SponsorsSponsorGrid :sponslist="starterSponsors" />
      </div>
    </div>
</template>
  
<script setup lang="ts">
import { type SponsorInfo } from './sponsor-info';

const partnerSponsors: SponsorInfo[] = []

const platinumSponsors: SponsorInfo[] = []

const goldSponsors: SponsorInfo[] = []

const silverSponsors: SponsorInfo[] = []

const bronzeSponsors: SponsorInfo[] = []

const starterSponsors: SponsorInfo[] = []

</script>

<style scoped lang="scss">
.sponsor-grid {
  margin: 2rem auto;
  padding: 10px;

}

.sponsor-tier {
  margin: 1.5rem auto;
  text-align: left;
  display: flex;
  flex-wrap: wrap;
}

.underline {
  width: 100%;
}

.sponsor-tier img {
  width: 25%;
  padding: 2%;
}

// .sponsor-tier h3 {
//   margin-bottom: 0.5rem;
// }

h4 {
  text-align: left;
  font-family: Poppins;
  font-size: 50px;
  font-weight: 600;
  line-height: 75px;
  text-align: left;

}

</style>
