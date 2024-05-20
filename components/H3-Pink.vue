<template>
  <div>
    <img src="/headings/heading-pink.svg" />
    <h3><slot /></h3>
  </div>
</template>

<style scoped lang="scss">
div {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
}
img {
  height: calc(3rem + 6vw);
}

h3 {
  margin-top: calc(-2rem - 3vw);
  margin-bottom: calc(2rem + 3vw);
  color: $DARK_PURPLE;
}

@media screen and (max-width: 450px) {
  h3 {
    font-size: 1.25rem;
    margin-top: calc(-1.5rem - 5.5vw);
    margin-bottom: calc(1rem + 5.5vw);
  }
}

</style>
