<!--This component takes in a list of sponsors and links to their websites,
    and creates a grid with 6 sponsors in each row.
    NOTE: The names of the sponsors passed in must correspond to the
    image name in /static/sponsors, as the name is what is used to get the path-->
<template>
  <div class="container sponsor-grid">
    <div class="row"
      v-for="row in Math.ceil(sponslist.length / 3)"
      :key="row"
    >
      <!--
        Slice the sponsor list according to current row.
        This gives us a list of the sponsors in the current row.
        Then, we make a column and image for each sponsor-->
      <div class="col col-3 grid-item"
        v-for="sponsor in sponslist.slice((row - 1) * 3, row * 3)"
        :key="sponsor.name"
      >
        <!--wrapping using a tag to create clickable img-->
        <a :href="sponsor.link" target="_blank">
          <!--Calling imgPath to get full path-->
          <img
            :src="`/sponsors/${sponsor.name}.png`"
            oncli
            class="company-logo"
            alt="sponsor"
            :id="sponsor.name"
          >
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type SponsorInfo } from './sponsor-info';

const props = defineProps<{
  sponslist: SponsorInfo[];
}>();

const sponslist = ref(props.sponslist);

</script>

<style scoped lang="scss">

  .sponsor-grid .row {
    flex-wrap: nowrap;
    justify-content: center;
  }

  .grid-item {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1.5rem 1.5rem;
    filter: url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'grayscale\'><feColorMatrix type=\'matrix\' values=\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\'/></filter></svg>#grayscale"); /* Firefox 10+, Firefox on Android */
    -webkit-filter: grayscale(100%);
    -moz-filter: grayscale(100%);
    -ms-filter: grayscale(100%);
    filter: grayscale(100%);
    filter: gray; /* IE 6-9 */
    transition: transform .2s; /* Animation */
  }

  .grid-item:hover {
    -webkit-filter: none;
    -moz-filter: none;
    -ms-filter: none;
    filter: none;
    transform: scale(1.2);
  }

  .company-logo {
    max-height: 3.5em !important;
    max-width: 100%;
  }

  #fannie-mae {
    max-height: 7em !important;
  }

  #jhu {
    max-height: 7em !important;
  }

  @media (max-width: 600px) {
    .company-logo {
      max-height: 1.7em;
      margin: 0;
    }
  }

  @media (min-width: 600px) {
    .company-logo {
      max-height: 2.2em;
    }
  }

  @media (min-width: 800px) {
    .company-logo {
      max-height: 2.75em;
    }

  }
</style>
