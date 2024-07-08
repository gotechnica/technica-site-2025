<template>
  <div class="container">
    <Header>Hybrid Environment</Header>
    <div class="row">
      <div class="col-sm" v-for="(item, index) in items" :key="index">
        <img class="hybrid-img" :src=item.image>
        <div class="caption-box mx-auto" :class="item.class">
          <h3>{{ item.title }}</h3>
          <li v-for="content in item.content">{{ content }}</li>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const items = ref([
  {
    image: "/hybrid/in-person.svg", class: "in-person", title: "In-Person", content: [
      'Held at The Hotel at UMD (eligible for hotel rooms if traveling)',
      'Receive swag (such as t-shirts, stickers, etc.)',
      'Visit sponsor booths face to face',
      'Live workshops',
      'Catered food service and snacks',
    ]
  },
  {
    image: "/hybrid/hybrid.svg", class: "hybrid", title: "Hybrid", content: [
      'Judging and expo will be held in person',
      'Request mentor for technical help',
      'Resume will be shared with sponsors',
      'Mini events and games',
      'Access event through the Technica virtual platform',
      'Win a prize for hacking categories (Digital gift card only for online hackers)',
    ]
  },
  {
    image: "/hybrid/virtual.svg", class: "virtual", title: "Virtual", content: [
      'Visit sponsor booths virtually',
      'Slack community to make friends and discuss your project',
      'Chat with the Technica community on Discord and Slack',
      'Attend recorded or streamed workshops',
      'Receive swag depending on participation level if based in the U.S.',
    ]
  }
]);

</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

body {
  font-family: 'Poppins', sans-serif;
}

.main-body {
  background: linear-gradient(180deg, #351C33 30%, #F4D1D9 75%);
}

.larger-circle,
.icon-circle {
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hybrid-img {
  margin-bottom: 5%;
}

.in-person {
  background-color: $LIGHTGREEN;
  border: $DARKGREEN solid 5px;

  h3 {
    -webkit-text-stroke: 2px $DARKGREEN;
    text-shadow: $DARKGREEN;
  }
}

.hybrid {
  background-color: $LIGHTPINK;
  border: $DARKPINK solid 5px;

  h3 {
    -webkit-text-stroke: 2px $DARKPINK;
    text-shadow: $DARKPINK;
  }
}

.virtual {
  background-color: $LIGHTYELLOW;
  border: $DARKYELLOW solid 5px;

  h3 {
    -webkit-text-stroke: 2px $DARKYELLOW;
    text-shadow: $DARKYELLOW;
  }
}

.caption-box {
  width: 365px;
  height: 443px;
  border-radius: 40px;
  box-sizing: border-box;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
}

.caption-box h3,
.caption-box p {
  margin: 0;
  color: white;
}

.caption-box h3 {
  font-size: 36px;
  margin-bottom: 0.5rem;
  border: $DARKGREEN;
}

p {
  color: #464343;
}

h1 {
  font-size: 60px;
  color: #000;
  padding: 20px 0 74px;
}

.container {
  margin-top: 5rem;
  text-align: center;
}

.header-container {
  margin-bottom: 2%;
}

.icon-circle h2 {
  margin: 0;
}

.col-sm {
  padding: 15px;
}

li {
  color: white;
}
</style>