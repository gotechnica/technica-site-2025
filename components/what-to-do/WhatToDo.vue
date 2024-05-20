<template>
  <div v-if="mounted">
    <div v-if="!isMobile" class="wtd-container container">
      <div class="row wtd-section">
        <div class="col">
          <FAQButton question="Submit a project and win prizes" 
            answer="Submit your project for prize categories for a chance to win sweet rewards for you and/or your team provided by Technica and our sponsors! We have prizes for all kinds of hacks for you and/or your team to win. You might even make some new friends while hacking away!"
            collapseId=1
            faqId=1
            class="row_1">
          </FAQButton>
        </div>
        <div class="col">
          <img class="wtd-image submit" src="/what-to-do/submit-a-project.svg" alt="Technica Character Image" />
        </div>
      </div>
      <div class="row wtd-section">
        <div class="col">
          <img class="wtd-image learn" src="/what-to-do/learn-a-new-skill.svg" alt="Technica Frog Character" />
        </div>
        <div class="col">
          <FAQButton question="Learn new skills" 
            answer="Technica aims to be a learning experience for everyone by providing fun and informative workshops. Hackers have the option to attend workshops in order to learn more general tech skills, practice tech skills relevant to their hack, and learn about new career paths and opportunities that they may wish to pursue."
            collapseId=2
            faqId=2
            class="row_2">
          </FAQButton>
        </div>
      </div>
      <div class="row wtd-section">
        <div class="col">
          <FAQButton question="Network" 
            answer="Looking to network? Companies are welcome to have recruiters and recruiting materials at their booth at Technica, where they will be able to interact with hackers. There will be a Sponsorship Fair in which hackers are encouraged to visit open booths and network with recruiters, potentially gaining an invitation to apply for openings or even an internship or job offer."
            collapseId=3
            faqId=3
            class="row_3">
          </FAQButton>
        </div>
        <div class="col">
          <img class="wtd-image network" src="/what-to-do/network.svg" alt="Technica Characters" />
        </div>
      </div>
    </div>

    <div v-else class="wtd-container container">
      <div class="row wtd-section">
        <div class="col">
          <img class="wtd-image submit" src="/what-to-do/submit-a-project.svg" alt="Technica Character Image" />
        </div>
        <div class="col">
          <FAQButton question="Submit a project and win prizes" 
            answer="Submit your project for prize categories for a chance to win sweet rewards for you and/or your team provided by Technica and our sponsors! We have prizes for all kinds of hacks for you and/or your team to win. You might even make some new friends while hacking away!"
            collapseId=1
            faqId=1
            class="row_1">
          </FAQButton>
        </div>
      </div>
      <div class="row wtd-section">
        <div class="col">
          <img class="wtd-image learn" src="/what-to-do/learn-a-new-skill.svg" alt="Technica Frog Character" />
        </div>
        <div class="col">
          <FAQButton question="Learn new skills" 
            answer="Technica aims to be a learning experience for everyone by providing fun and informative workshops. Hackers have the option to attend workshops in order to learn more general tech skills, practice tech skills relevant to their hack, and learn about new career paths and opportunities that they may wish to pursue."
            collapseId=2
            faqId=2
            class="row_2">
          </FAQButton>
        </div>
      </div>
      <div class="row wtd-section">
        <div class="col">
          <img class="wtd-image network" src="/what-to-do/network.svg" alt="Technica Characters" />
        </div>
        <div class="col">
          <FAQButton question="Network" 
            answer="Looking to network? Companies are welcome to have recruiters and recruiting materials at their booth at Technica, where they will be able to interact with hackers. There will be a Sponsorship Fair in which hackers are encouraged to visit open booths and network with recruiters, potentially gaining an invitation to apply for openings or even an internship or job offer."
            collapseId=3
            faqId=3
            class="row_3">
          </FAQButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useWindowSize } from '@vueuse/core';

const { width } = useWindowSize();
const isMobile = computed(() => {
  return width.value <= 768;
});

const mounted = ref(false);
onMounted(() => {
  mounted.value = true;
});

</script>

<!-- header colors don't work with scoped -->
<style lang="scss"> 
     .wtd-container{
        display: flex;
        flex-direction: column;
        grid-gap: 2rem;
        gap: 2rem;
        width: 100%;
        // border: 0.7rem solid #DEB62A;
        // border-radius: 3rem;
        // padding: 5%;
    }

    .purp-heading{
        color:$DARK-PURPLE;
        padding: 2rem;
        margin: 0 2rem;
        background-size: 100% 100%;
        text-align: center;
    }

    .blue-heading{
        color: $BLUE;
    }

    .pink-heading{
        color: $PINK;
    }

    .lipurp-heading{
        color: $LIGHT_PURPLE;
    }

    .wtd-section {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
        column-gap: 2rem;
    }

    .wtd-container .faq-btn {
      font-weight: 600;
    }
    .row_1 button, .row_1 .bi, .row_1 hr {
        color: $BLUE !important;
    }
    .row_1 hr {
        background-color: $BLUE !important;
    }

    .row_2 button, .row_2 .bi, .row_2 hr {
        color: $PINK !important;
    }
    .row_2 hr {
        background-color: $PINK !important;
    }

    .row_3 button, .row_3 .bi, .row_3 hr {
        color: $LIGHT_PURPLE !important;
    }
    .row_3 hr {
        background-color: $LIGHT_PURPLE !important;
    }

    .section-content {
        display: flex;
        flex-direction: column;
    }

    .wtd-image {
      border-radius: 3rem;
    }

    .submit {
      border: 0.7rem solid $BLUE;
    }

    .learn {
      border: 0.7rem solid $PINK;
      width: 100%;
    }

    .network {
      border: 1rem solid $LIGHT_PURPLE;
      width: 100%;
    }

    @media screen and (max-width: 768px) {
        .wtd-container {
            flex-direction: column;
            gap: 0;
        }
        .wtd-section {
            flex-direction: column;
        }

        .wtd-container .wtd-image {
            border: none;
            // border-radius: 3rem;
            margin-bottom: 4%;
        }

        .wtd-container {
            border: none;
        }

        .row_1, .row_2, .row_3 {
            margin-bottom: 8%;
        }
    }
</style>