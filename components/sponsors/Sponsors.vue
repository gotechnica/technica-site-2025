<template>
  <Header>Sponsors</Header>
  <div class="sponsor-grid">
    <!-- Partner Sponsors  -->
    <h4><b style="color:#EFE4DC">Partner</b></h4>
    <div class="underline"style="background-color: #EFE4DC"></div>
    <div class="sponsor-tier">
      <SponsorsSponsorGrid :sponslist="partnerSponsors" />
    </div>

    <!-- Platinum Sponsors  -->
    <h4><b style="color:#CADAEA">Platinum</b></h4>
    <div class="underline" style="background-color: #CADAEA"></div>
    <div class="sponsor-tier">
      <SponsorsSponsorGrid :sponslist="platinumSponsors" />
    </div>

    <!-- Gold Sponsors -->
    <h4><b style="color:#F1ADCD">Gold</b></h4>
    <div class="underline" style="background-color: #F1ADCD"></div>
    <div class="sponsor-tier">
      <SponsorsSponsorGrid :sponslist="goldSponsors" />
    </div>

    <!-- Silver Sponsors  -->
    <h4><b style="color: #8E80AB">Silver</b></h4>
    <div class="underline" style="background-color: #8E80AB"></div>
    <div class="sponsor-tier">
      <SponsorsSponsorGrid :sponslist="silverSponsors" />
    </div>

    <!-- Bronze Sponsors -->
    <h4><b style="color: #8E80AB">Bronze</b></h4>
    <div class="underline" style="background-color: #8E80AB"></div>
    <div class="sponsor-tier">
      <SponsorsSponsorGrid :sponslist="bronzeSponsors" />
    </div>

    <!-- Starter Sponsors -->
    <h4><b style="color: #8E80AB">Starter</b></h4>
    <div class="underline" style="background-color: #8E80AB"></div>
    <div class="sponsor-tier">
      <SponsorsSponsorGrid :sponslist="starterSponsors" />
    </div>

    <!-- Custom Sponsors -->
    <h4><b style="color: #8E80AB">Custom</b></h4>
    <div class="underline" style="background-color: #8E80AB"></div>
    <div class="sponsor-tier">
      <SponsorsSponsorGrid :sponslist="customSponsors" />
    </div>

    <!-- Virtual Sponsors -->
    <h4><b style="color: #8E80AB">Virtual</b></h4>
    <div class="underline" style="background-color: #8E80AB"></div>
    <div class="sponsor-tier">
      <SponsorsSponsorGrid :sponslist="virtualSponsors" />
    </div>

    <!-- Special Thanks -->
    <h4><b style="color: #8E80AB">Special Thanks</b></h4>
    <div class="underline" style="background-color: #8E80AB"></div>
    <div class="sponsor-tier">
      <SponsorsSponsorGrid :sponslist="specialThanks" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { type SponsorInfo } from './sponsor-info';

const partnerSponsors: SponsorInfo[] = [];

const platinumSponsors: SponsorInfo[] = [];

const goldSponsors: SponsorInfo[] = [];

const silverSponsors: SponsorInfo[] = [];

const bronzeSponsors: SponsorInfo[] = [];

const starterSponsors: SponsorInfo[] = [];

const customSponsors: SponsorInfo[] = [];

const virtualSponsors: SponsorInfo[] = [];

const specialThanks: SponsorInfo[] = [];
</script>

<style scoped lang="scss">
.sponsor-grid {
  margin: 2rem auto;
  padding: 10px;
}

.sponsor-tier {
  margin: 1.5rem auto;
  text-align: left;
  padding-top: 0.5rem;

  display: flex;
  flex-wrap: wrap;
}

.underline {
  width: 100%;
  height: 0.3em;
}

.sponsor-tier img {
  width: 25%;
  padding: 2%;
}

.sponsor-tier h3 {
  margin-bottom: 0.5rem;
}

h4 {
  text-align: left;
}
</style>
