<template>
  <div id="back-to-top-button" class="sticky-button" @click="scrollToTop">
    <!-- <img
      class="button-image"
      src="/buttons/blue-button-normal.svg"
      alt="Button Image"
    /> -->
    <PixelButton
      text="Back To Top"
      textAlign="-1.25rem"
      img="green-button-regular.svg"
      hover="green-button-regular.svg"
      click="green-on-click.svg"
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
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'auto',
      });
    },
  },
};

function showButton() {
  var button = document.getElementById('back-to-top-button');
  var pageHeight = document.documentElement.scrollHeight;
  var windowHeight = window.innerHeight;
  var scrollPosition =
    window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

  if (scrollPosition > (pageHeight - windowHeight) / 6) {
    button.classList.add('show');
  } else {
    button.classList.remove('show');
  }
}
</script>

<style scoped lang="scss">
@use '~/assets/styles/_variables.scss';

.sticky-button {
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
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
  transform: rotateX(180deg);
  width: 3.5rem;
  // height: 4rem;
  right: 1rem;
  bottom: 0rem;
}
</style>
