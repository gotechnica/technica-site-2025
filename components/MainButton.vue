<!-- reusable MainButton component w/ text, backgroundColor, and textColor props -->
<!-- usage: <MainButton text="Text here" backgroundColor="#hex" textColor="#hex" /> -->
<template>
  <a :href="link" target="_blank">
    <button
      class="btn baseButton"
      :class="{'gradient': gradient, 'solid': !gradient }"
      :style="cssVars"
    >
      {{ text }}
    </button>
  </a>
</template>

<script>
export default {
  name: 'MainButton',
  props: {
    text: {
      type: String,
      default: 'Text here'
    },
    link: {
      type: String,
      default: '/'
    },
    backgroundColor: {
      type: String
    },
    textColor: {
      type: String
    },
    gradient: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    cssVars () {
      return {
        '--backgroundColor': this.backgroundColor,
        '--textColor': this.textColor
      }
    }
  }
}
</script>

<style lang="scss" scoped>

  @import "./styles/base.scss";

  .baseButton {
      padding: 1rem 2rem;
      border: none;
      border-radius: 2rem;
      font-weight: bold;
      text-align: center;
      opacity: 1;
      transition: 0.3s;
  }

    @media (max-width: 576px) {
  .baseButton {
    padding: .7rem 1.5rem;
  }
}
  .baseButton:hover {
      opacity: .5;
  }
  .gradient {
    background-image: $GRADIENT;
    color: white;
  }
  .solid {
    background-color: var(--backgroundColor, $DEFAULT_BG_COLOR);
    color: var(--textColor, $DEFAULT_TEXT_COLOR);
  }

</style>
