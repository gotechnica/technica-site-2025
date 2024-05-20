<template>
  <div id="button" class="tts-button" @click="speakContent" alt="text-to-speech">
    <img
      class="button-image"
      src="/keynote/keynote-button.svg"
      alt="text-to-speech button image"
    />
    <div class="text">Text to Speech</div>
  </div>
</template>

<script>
export default {
  mounted() {
    
  },
  unmounted() {
      // cancel text to speech
  },
  methods: {
    speakContent() {
      const pageContent = document.body.textContent;
      if (pageContent) {
        const speechText = new SpeechSynthesisUtterance(pageContent);
        speechSynthesis.speak(speechText);
      }
    },
  },
};

</script>

<style scoped lang="scss">

.tts-button {
  position: fixed;
  bottom: 3rem;
  right: 1rem;
  width: 14rem;
  height: 4rem;
  align-items: center;
  z-index: 2;
  cursor: pointer;
  display: flex;
}

.button-image {
  width: 14rem;
  height: 4rem;
  z-index: 3;
}

.text {
  padding-left: 2rem;
  position: absolute;
  justify-content: left;
  z-index: 4;
  font-size: 1.1rem;
  font-family: 'Pixeloid-Sans';
  color: white;
}

</style>
