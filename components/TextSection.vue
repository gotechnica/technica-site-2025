<template>
  <div class="p-3">
    <h3
      class="my-3"
      :style="{ 'color': headingColor}"
    >
      {{ heading }}
    </h3>
    <div><slot /></div>
  </div>
</template>

<script>
export default {
  props: {
    heading: {
      type: String,
      default: ''
    },
    headingColor: {
      type: String,
      default: '#000'
    }
  }
}
</script>

<style scoped>
</style>