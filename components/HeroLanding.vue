<template>
  <div id="wrapper">
    <div class="details" id="top">
      <div class="logos">
        <div class="col-md">
          <img class="alice-logo" src="/hero/wonder-awaits.svg" width="25%" />
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
        <h1 class="outline">Bring Your Ideas to Life</h1>
        <p class="basic-info outline">
          9AM October 25 to 5PM October 26th at The Armory, UMD | Hybrid
          Environment
        </p>
        <p class="outline">
          The world's largest hackathon for underrepresented genders
        </p>
      </div>
      <div id="dummy"></div>
      <div class="buttons">
        <VineButton
          text="Register"
          link="/register"
          img="yellow-button-regular.svg"
          hover="yellow-on-click.svg"
          click="yellow-visited.svg"
        />
        <VineButton
          text="Learn More"
          @click="TogglePopup"
          img="yellow-button-regular.svg"
          hover="yellow-on-click.svg"
          click="yellow-visited.svg"
        />
      </div>
    </div>
  </div>
  <div v-if="isMobile" class="popup-mobile">
    <div id="popup" v-if="popupTriggers">
      <div id="popup-inner" class="mobile">
        <h3>What is Bring Your Ideas to Life?</h3>
        <p>
          We are thrilled to announce the theme for this fall's hackathon:
          <b>Bring Your Ideas to Life!</b>
        </p>
      </div>
    </div>
  </div>
  <div v-else>
    <div id="popup" class="d-flex justify-content-between" v-if="popupTriggers">
      <div id="popup-inner">
        <h3>What is Bring Your Ideas to Life?</h3>
        <p>
          We are thrilled to announce the theme for this fall's hackathon:
          <b>Bring Your Ideas to Life!</b>
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
  background-attachment: scroll;
  background-size: 100vw;
  resize: both;
  margin-top: 0;
  padding-top: 0;
  background-repeat: no-repeat;
  padding-bottom: 20%;
  margin-bottom: 5%;
  // display: inline-block;
}

.details {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 5rem;
  margin-top: -5%;
  // margin-left: 2%;
  // align-items: right;
  // justify-items: right;
  text-align: right;
  // margin-right: 0;
  // background-color: black;
}

.logos {
  resize: both;
  // background-color: black;
}

.subtext {
  color: white;
  justify-items: right;
  // width: fit-content;
  text-shadow: 5px 5px 13px black;
  border-radius: 10px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  // background-color: black;
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
  -webkit-text-stroke: 1px;
  -webkit-text-stroke-color: black;
  text-shadow: 2px 5px 2px black;
}

#popup {
  margin-top: -30%;
  // margin-left: 10%;
  // margin-right: 0%;
  width: 100%;
  resize: both;
  // justify-self: right;
  // align-self: right;
  justify-items: right;
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
  // background-color: black;
  float: right;
  display: flex;
  justify-content: flex-end;
  margin-right: 0;
  gap: 3%;
}

.buttons a {
  // margin-left: 0;
  margin-right: 0;
  // margin-top: -3%;
}

.buttons .image-container {
  margin: 0;
}

.alice-logo {
  margin-right: 25%;
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

  .alice-logo {
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

  .alice-logo {
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

  .alice-logo {
    width: 50%;
  }

  #wrapper,
  #wrapper.day {
    background-size: cover;
    padding-bottom: 80%;
    background-position-x: -10em;
    height: 100vh;
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
