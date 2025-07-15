<template>
  <Header>Our Achievements</Header>
  <div class="achievements-wrapper">
    <div class="gameboy-stat" v-for="(stat, i) in stats" :key="i">
      <img src="/public/achievements/gameboy.svg" class="gameboy-img" alt="Gameboy Frame" />
      <div class="gameboy-screen">
        <h1>{{ stat.number }}</h1>
        <p>{{ stat.label }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const stats = [
  { number: '11', label: 'years of Technica' },
  { number: '20+', label: 'sponsors each year' },
  { number: '800+', label: 'hackers and counting' },
];
</script>
  
<style scoped lang="scss">
.achievements-wrapper {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3rem;
  margin: 2rem 0 -15rem 0; //put the -15rem for now to remove the padding, will come back to later
}

.gameboy-stat {
  position: relative;
  width: 400px;
  height: 750px;

  .gameboy-img {
    width: 100%;
    display: block;
  }

  .gameboy-screen {
    position: absolute;
    top: 11%;
    left: 36%;
    width: 145px;
    height: 120px;
    background-color: #6b8e4e;
    color: white;
    text-align: center;
    border-radius: 4px;
    padding: 0.75rem 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.4rem;
    overflow: hidden;

    h1, p {
      margin: 0;
      font-weight: bold;
      line-height: 1.2;
    }

    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
    }
  }
}


  

</style>