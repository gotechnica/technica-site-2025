<template>
  <div id="wrapper">
    <div class="details" id="top">
      <div class="logos">
        <div class="col-md">
          <img class="halloween-logo" src="/hero/hero-logo.png" width="35%" />
        </div>
        <div class="col-md">
          <img
            class="technica-logo"
            src="/logos/technica-logo-hi-res.png"
            width="40%"
          />
        </div>
      </div>

      <div class="subtext">
        <h1 class="tagline outline">Bring Your Ideas to Life</h1>
        <p class="basic-info outline">
          November 15 to November 16 at The Marriott, College Park | Hybrid
          Environment
        </p>
        <p class="outline">
          The world's largest hackathon celebrating underrepresented genders
        </p>
      </div>
      <div id="dummy"></div>
      <div class="buttons">
        <!-- <WebButton
          text="Register"
          link="/register"
          img="button_blue_normal.svg"
          hover="button_blue_hover.svg"
          click="button_blue_onclick.svg"
        /> -->
        <!-- <WebButton
          text="Pre-register now!"
          link="https://forms.gle/ue9gJfZThYRurVzg8"
          img="button_blue_normal.svg"
          hover="button_blue_hover.svg"
          click="button_blue_onclick.svg"
        /> -->
        <WebButton
          text="Learn More"
          @click="TogglePopup"
          img="button_pink_normal.svg"
          hover="button_pink_hover.svg"
          click="button_pink_onclick.svg"
        />
      </div>
    </div>
  </div>
  <div v-if="isMobile" class="popup-mobile">
    <div id="popup" v-if="popupTriggers">
      <div id="popup-inner" class="mobile">
        <h3>What is Bring Your Ideas to Life?</h3>
        <p>
          Get ready for a thrilling weekend on November 15–16!
          <br /><br />
          Technica returns with this year's theme:
          <b>Bring Your Ideas to Life!</b> To celebrate the Halloween season,
          we’re inviting you to join us on a spooky night where creativity
          awakens, ideas take shape in the shadows, and your boldest projects
          come alive. This is your chance to let your imagination run wild!
        </p>
      </div>
    </div>
  </div>
  <div v-else>
    <div id="popup" class="d-flex justify-content-between" v-if="popupTriggers">
      <div id="popup-inner">
        <h3>What is Bring Your Ideas to Life?</h3>
        <p>
          Get ready for a thrilling weekend on November 15–16! Technica returns
          with this year's theme:
          <b>Bring Your Ideas to Life!</b> To celebrate the Halloween season,
          we’re inviting you to join us on a spooky night where creativity
          awakens, ideas take shape in the shadows, and your boldest projects
          come alive. This is your chance to let your imagination run wild!
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useWindowSize } from '@vueuse/core';
import { ref } from 'vue';

const learnMore = ref('Learn More');
const { width } = useWindowSize();
const isMobile = computed(() => {
  return width.value <= 1150;
});

const popupTriggers = ref(false);
const { scrollToAnchor, scrollToTop } = useAnchorScroll({
  toTop: {
    scrollOptions: {
      behavior: 'smooth',
      offsetTop: 0,
    },
  },
});

const TogglePopup = () => {
  popupTriggers.value = !popupTriggers.value;
  console.log(popupTriggers.value);
  if (popupTriggers.value) {
    scrollToAnchor('#dummy');
    learnMore.value = 'Close';
  } else {
    scrollToAnchor('#top');
    learnMore.value = 'Learn More';
  }
};
</script>

<style scoped lang="scss">
#wrapper {
  background-image: url('/hero/hero.svg');
  background-color: rgb(37, 35, 62);
  background-attachment: scroll;
  background-size: 100vw;
  background-position: right;
  resize: both;
  padding-top: 0;
  margin-right: -10%;
  background-repeat: no-repeat;
  //padding-bottom: 20%;
  margin-bottom: 5%;
  transition: background-image 0.3s ease;
}

#wrapper:hover {
  background-image: url('/hero/hero-hover.svg');
}

.details {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 5rem;
  margin-top: -5%;
  text-align: left;
}

.logos {
  resize: both;
}

.subtext {
  color: white;
  justify-items: left;
  text-shadow: 1px 1px 13px black;
  border-radius: 10px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  align-self: flex-start;
}

.subtext p {
  font-weight: bold;
  font-size: 20px;
}

.basic-info {
  font-weight: bold;
  margin-top: 0.8rem;
  margin-bottom: 0.1rem;
  font-size: 25px !important;
}

.outline {
  color: white;
  -webkit-text-stroke: 0.8px;
  -webkit-text-stroke-color: black;
  text-shadow: 2px 5px 2px black;
}

.tagline {
  color: white;
  -webkit-text-stroke: 0px;
}

h1.tagline {
  font-weight: 400;
  font-size: 2rem;
  -webkit-text-stroke: 0.8px;
  -webkit-text-stroke-color: black;
  font-family: 'Pippins', sans-serif;
}

#popup {
  margin-top: -30%;
  width: 100%;
  resize: both;
  justify-items: right;
  margin-top: -10vw;
}

#popup-inner h3 {
  color: $DARKPURPLE;
  text-align: center;
  margin-bottom: 1rem;
}

#popup-inner p {
  color: $DARKPURPLE;
}

#popup-inner {
  padding: 2rem;
  margin: 2rem;
  margin-right: 4rem;
  height: auto;
  border-radius: 2rem;
  width: 100%;
  padding: 3rem;
  background-color: white;
  color: black;
  border: 7px solid $DARKPURPLE;
}

#popup-inner.mobile {
  margin-top: 30rem;
  margin-left: 10%;
  margin-right: 10%;
  width: auto;
}

.register {
  background-color: #aa96ca;
  color: white;
}

.register:hover {
  background-color: transparent !important;
  color: #aa96ca;
  border: #aa96ca solid;
}

.learn-more {
  background-color: transparent;
  border: #aa96ca solid;
  color: #aa96ca;
}

.learn-more:hover {
  background-color: #aa96ca;
  color: white;
}

.buttons {
  float: left;
  display: flex;
  justify-content: flex-end;
  margin-right: 0;
  gap: 3%;
  align-self: flex-start;
}

.buttons a {
  margin-right: 0;
}

.buttons .image-container {
  margin: 0;
}

.halloween-logo {
  margin-top: 15%;
  margin-bottom: 1rem;
  align-self: flex-start;
  margin-left: -3.5%;
}

.technica-logo {
  align-self: flex-start;
}

@media screen and (max-width: 1048px) {
  #popup {
    margin-top: -40%;
    margin-left: 0;
  }

  #wrapper,
  #wrapper.day {
    background-size: cover;
    padding-bottom: 80%;
    overflow-x: hidden;
    overflow-y: hidden;
    height: 100vh;
  }

  .halloween-logo {
    margin-right: 0;
  }
}

@media screen and (max-width: 768px) {
  .details {
    padding: 2.5rem;
  }

  .technica-logo {
    width: 50%;
  }

  .halloween-logo {
    width: 35%;
  }

  #popup {
    margin-top: -65vw;
  }

  .subtext p {
    font-size: 15px;
  }

  .buttons {
    display: initial;
    justify-self: right;
  }

  .buttons .image-container {
    margin-left: auto;
  }

  .basic-info {
    font-weight: bold;
    margin-top: 0.8rem;
    margin-bottom: 0.1rem;
    font-size: 20px !important;
  }
}

@media screen and (max-width: 500px) {
  .details {
    padding: 1.5rem;
  }

  .technica-logo {
    width: 80%;
  }

  .halloween-logo {
    width: 50%;
  }

  #wrapper,
  #wrapper.day {
    background-size: cover;
    padding-bottom: 80%;
    background-position: center;
    height: 100vh;
    max-width: 100%;
  }

  .subtext p {
    font-size: 15px;
  }

  .basic-info {
    font-weight: bold;
    margin-top: 0.8rem;
    margin-bottom: 0.1rem;
    font-size: 17px !important;
  }

  .buttons a {
    width: 10rem;
  }
  #popup {
    margin-top: -90vw;
  }
}
</style>
