<template>
    <div class="header-container">
      <img src="/header.svg" />
      <h1><slot /></h1>
    </div>
  </template>
  
  <style scoped lang="scss">
  div {
    position: relative;
    //text-align: center;
    display: flex;
    flex-direction: column;
    //width: 100%;
    //justify-content: center;
    align-items: center;
  }
  
  img {
    width: 50rem;
  }
  
  h1 {
    font-size: 2.5em;
    position: absolute;
    bottom: 0.5em;
    color: $DARKPURPLE;
    white-space: nowrap;
  }
  
  .header-container {
    margin-bottom: 0;
  }
  
  @media screen and (max-width: 850px) {
    img {
      width: 30rem;
    }
  
    h1 {
      bottom: 0.3em;
      font-size: 1.75em;
    }
  }

  @media screen and (max-width: 500px) {
    img {
      width: 25rem;
    }
  
    h1 {
      bottom: 0.15em;
      font-size: 1.5em;
    }
  }

  @media screen and (max-width: 400px) {
    img {
      width: 20rem;
    }
  
    h1 {
      bottom: 0.1em;
      font-size: 1.3em;
    }
  }
  </style>
  