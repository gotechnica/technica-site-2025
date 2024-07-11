<template>
  <NuxtLayout :name="404">
    <div class="full-height">
      <div class="error-container">
        <img class="img-fluid" src = ./assets/404wizard.png>
        <div class="text">
          <h3>Technica</h3>
          <h3>Evil Wizard 404</h3>
          <p>You have walked into his secret lair! Click <a href="https://gotechnica.org">here</a> to teleport back to safety</p>
        </div>
        
      </div>
    </div>
    
  </NuxtLayout>
</template>

<script>
export default {
  mounted() {
    this.adjustImageHeight();
    window.addEventListener('resize', this.adjustImageHeight);
  },
  methods: {
    adjustImageHeight() {
      const image = document.getElementById('box');
      const wiz = document.getElementById('wiz');
      const viewportHeight = window.innerHeight;
      const width = window.innerWidth;

      // Let's say we want the image to be 50% of the viewport height
      image.style.height = viewportHeight * 0.03 + 'rem';
    },
  },
};
</script>

<style scoped lang="scss">
@import '~/assets/styles/_variables.scss';

.full-height {
  height: 100%;
}

.error-container {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
}

.img-fluid {
  width: 60%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: -2%;
}

.text {
  text-align: center;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}

.text h3 {
  font-size: 400% !important;
}

.text p {
  font-size: 125% !important;
  color: black;
}

@media screen and (max-width: 900px) {
  .text h3 {
    font-size: 300% !important;
  }

  .text p {
    font-size: 100% !important;
  }

  .img-fluid {
    width: 80%;
  }
}

@media screen and (max-width: 450px) {
  .text h3 {
    font-size: 200% !important;
  }

  .text p {
    font-size: 80% !important;
  }

  .text {
    width: 80%;
  }
}
</style>
