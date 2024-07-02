<template>
  <div class="header-container">
    <img src="/headings/heading.svg" />
    <h1><slot /></h1>
  </div>
</template>

<style scoped lang="scss">
h1 {
  font-size: 26px;
}

div {
  //text-align: center;
  display: flex;
  flex-direction: column;
  //width: 100%;
  //justify-content: center;
  align-items: center;
}

img {
  width: calc(10rem + 30vw);
}

h1 {
  margin-top: calc(-3.9rem - 7vw);
  margin-bottom: calc(1rem + 5.5vw);
  margin-right: 2rem;
  color: #653564;;
}

.header-container {
  margin-bottom: 0;
}

@media screen and (max-width: 800px) {
  img {
    width: calc(10rem + 30vw);
  }

  h1 {
    font-size: 1.3rem;
    padding-top:0.5rem;
  }
}
</style>
