<template>
    <div class="sponsor-grid">
      <!-- Partner Sponsors -->
      <h4><b>Partner</b></h4>
      <img class="underline" src="/sponsors/blue_sponsor_underline.svg" />
      <div class="sponsor-tier">
        <SponsorsSponsorGrid :sponslist="partnerSponsors" />
      </div>

      <!-- Platinum Sponsors -->
      <h4><b>Platinum</b></h4>
      <img class="underline" src="/sponsors/blue_sponsor_underline.svg" />
      <div class="sponsor-tier">
        <SponsorsSponsorGrid :sponslist="platinumSponsors" />
      </div>

      <!-- Gold Sponsors -->
      <h4><b>Gold</b></h4>
      <img class="underline" src="/sponsors/blue_sponsor_underline.svg" />
      <div class="sponsor-tier">
        <SponsorsSponsorGrid :sponslist="goldSponsors" />
      </div>

      <!-- Silver Sponsors -->
      <h4><b>Silver</b></h4>
      <img class="underline" src="/sponsors/blue_sponsor_underline.svg" />
      <div class="sponsor-tier">
        <SponsorsSponsorGrid :sponslist="silverSponsors" />
      </div>

      <!-- Bronze Sponsors -->
      <h4><b>Bronze</b></h4>
      <img class="underline" src="/sponsors/blue_sponsor_underline.svg" />
      <div class="sponsor-tier">
        <SponsorsSponsorGrid :sponslist="bronzeSponsors" />
      </div>

      <!-- Starter Sponsors -->
      <h4><b>Starter</b></h4>
      <img class="underline" src="/sponsors/blue_sponsor_underline.svg" />
      <div class="sponsor-tier">
        <SponsorsSponsorGrid :sponslist="starterSponsors" />
      </div>
    </div>
</template>
  
<script setup lang="ts">
import type { SponsorInfo } from './sponsor-info';

const partnerSponsors: SponsorInfo[] = [
    {
      name: 'umdcs',
      link: 'https://www.cs.umd.edu'
    }
]

const platinumSponsors: SponsorInfo[] = [
    {
      name: 'umdclark',
      link: 'https://eng.umd.edu'
    }
]

const goldSponsors: SponsorInfo[] = [
    {
      name: 't-rowe-price',
      link: 'https://www.troweprice.com/corporate/us/en/home.html'
    },
    {
      name: 'fannie-mae',
      link: 'https://www.fanniemae.com'
    }
]

const silverSponsors: SponsorInfo[] = [
    {
      name: 'jane-street',
      link: 'https://www.janestreet.com/'
    },
    {
      name: 'caci',
      link: 'https://www.caci.com'
    },
    {
      name: 'optiver',
      link: 'https://optiver.com'
    },
    {
      name: 'afcea',
      link: 'https://www.afcea.org'
    },
    {
      name: 'capital-one',
      link: 'https://www.capitalone.com'
    },
    {
      name: 'northrop-grumman',
      link: 'https://www.northropgrumman.com'
    }
]

const bronzeSponsors: SponsorInfo[] = [
    {
      name: 'bloomberg',
      link: 'https://www.bloomberg.com'
    },
    {
      name: 'btt',
      link: 'https://inclusion.cs.umd.edu/breakthroughtech'
    },
    {
      name: 'umdi4c',
      link: 'https://inclusion.cs.umd.edu'
    },
    {
      name: 'lts',
      link: 'https://www.ltsnet.net'
    },
    {
      name: 'qualtrics',
      link: 'https://www.qualtrics.com'
    },
    {
      name: 'travelers',
      link: 'https://www.travelers.com'
    },
    {
      name: 'big',
      link: 'https://www.bloombergindustry.com/'
    },
    {
      name: 'geico',
      link: 'https://www.geico.com/'
    },
    {
      name: 'jhu',
      link: 'https://www.jhuapl.edu/'
    }
]

const starterSponsors: SponsorInfo[] = [
    {
      name: 'aces',
      link: 'https://aces.umd.edu/'
    },
    {
      name: 'umdbsos',
      link: 'https://bsos.umd.edu/'
    },
    {
      name: 'standout',
      link: 'http://hackp.ac/mlh-StandOutStickers-hackathons'
    },
    {
      name: 'codepath',
      link: 'https://www.codepath.org'
    },
    {
      name: 'mlh',
      link: 'https://mlh.io'
    },
    {
      name: 'qualcomm',
      link: 'https://www.qualcomm.com'
    },
    {
      name: 'appian',
      link: 'https://appian.com'
    },
    {
      name: 'blue-halo',
      link: 'https://bluehalo.com'
    },
    {
      name: 'visionist',
      link: 'https://www.visionistinc.com'
    },
    {
      name: '355code',
      link: 'http://www.355code.com/'
    }
]

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
}

.sponsor-tier img {
  width: 25%;
  padding: 2%;
}

.sponsor-tier h3 {
  margin-bottom: 0.5rem;
}

h4 {
  text-align: center;
}

</style>
  