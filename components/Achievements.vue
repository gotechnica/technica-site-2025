<template>
    <Header>Our Achievements</Header>
    <div v-if="mounted" class="achievements-wrapper">
        <div class="stat-card-container">
        <img class="edge-icon" src="/achievements/teal.png" />
        <div class="stat-card" id="teal">
            <h1>10</h1>
            <p>years of Technica</p>
        </div>
      </div>
  
      <div class="stat-card-container">
        <img class="edge-icon" src="/achievements/pink.png" />
        <div class="stat-card" id="pink">
            <h1>20+</h1>
            <p>sponsors each year</p>
        </div>
      </div>
  
      <div class="stat-card-container">
        <img class="edge-icon" src="/achievements/yellow.png" />
        <div class="stat-card" id="yellow">
            <h1>800+</h1>
            <p>hackers and counting</p>
        </div>
      </div>
    </div>
</template>
  
<script setup lang="ts">
    const mounted = ref(false);
    onMounted(() => {
    mounted.value = true;
    });
</script>
  
<style scoped lang="scss">
    .achievements-wrapper {
        display: flex;
        flex-wrap: wrap;
        gap: 2rem;
        justify-content: center;
        margin-bottom: 50px;
        width: 100%;
    }
  
    img {
        height: 12rem;
    }
  
    .stat-card-container {
        margin-top: 5rem;
        position: relative;
    }
  
    .edge-icon {
        height: 4rem;
        left: 240px;
        position: absolute;
        top: -20px;
        z-index: 2;
    }
  
    .stat-card {
        border-radius: 1rem;
        border-style: solid;
        border-width: thick;
        color: #ffffff;
        text-align: center;
        padding: 1rem 0.5rem 1rem 0.5rem;
        position: relative;
        width: 18rem;
        z-index: 1;
    }

    .stat-card h1 {
        -webkit-text-stroke-width: 2px;
        text-shadow: 2px 2px 4px black;
    }

    .stat-card p {
        text-shadow: 2px 2px 2px black;
    }
  
    #teal {
        background-color: $LIGHTGREEN;
        border-color: $MIDGREEN;
        -webkit-text-stroke-color: $MIDGREEN;
    }
  
    #pink {
        background-color: $LIGHTPINK;
        border-color: $DARKPINK;
        -webkit-text-stroke-color: $DARKPINK;
    }
  
    #yellow {
        background-color: $LIGHTYELLOW;
        border-color: $DARKYELLOW;
        -webkit-text-stroke-color: $DARKYELLOW;
    }
  
    @media screen and (max-width: 480px) {
        .stats {
            margin-top: -7.5rem;
        }
    }
</style>