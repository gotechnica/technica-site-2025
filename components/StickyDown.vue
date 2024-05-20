<template>
  <div id="down-button" class="sticky-button" @click="scrollToFAQ">
    <!-- <img
        class="button-image"
        src="/buttons/blue-button-normal.svg"
        alt="Button Image"
      /> -->
    <PixelButton
      text="Jump to FAQ"
      textAlign="-1.25rem"
      img="blue-button-normal.svg"
      hover="blue-button-hover.svg"
      click="blue-button-onclick.svg"
    />
    <!-- <div class="text">Back To Top</div> -->
    <img class="arrow" :src="'/buttons/expand-arrow.svg'" alt="arrow" />
  </div>
</template>

<script>
export default {
  mounted() {
    console.log('mounted');
    window.onscroll = function () {
      showButton();
    };
  },
  methods: {
    scrollToFAQ() {
      const element = document.getElementById('questions');
      const topPosition = element.offsetTop;
      window.scrollTo({
        top: topPosition - 150,
        behavior: 'auto',
      });
    },
  },
};

function showButton() {
  var button = document.getElementById('down-button');
  var pageHeight = document.documentElement.scrollHeight;
  var windowHeight = window.innerHeight;
  var scrollPosition =
    window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
  button.classList.add('show');
}
</script>

<style scoped lang="scss">
@import '~/assets/styles/_variables.scss';

.sticky-button {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  width: 14rem;
  height: 4rem;
  align-items: center;
  z-index: 5;
  display: none;
  cursor: pointer;
}

.sticky-button.show {
  display: flex;
}

.button-image {
  width: 14rem;
  height: 4rem;
  z-index: 3;
}

.text {
  // padding-left: 1rem;
  position: absolute;
  justify-content: left;
  z-index: 4;
  font-size: 1rem;
}

.arrow {
  padding: 1rem;
  position: absolute;
  justify-content: right;
  z-index: 4;
  width: 3.5rem;
  // height: 4rem;
  right: 1rem;
  bottom: 0rem;
}
</style>
