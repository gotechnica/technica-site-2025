<template>
  <div class="container">
    <Header>Techni-Environments</Header>
    <div class="row">
      <div class="col-sm" v-for="(item, index) in items" :key="index">
        <div
          class="environment-box mx-auto"
          :class="item.class"
          :style="{ backgroundImage: `url(${item.image})` }"
        >
          <div class="caption-box">
            <li v-for="content in item.content">{{ content }}</li>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const items = ref([
  {
    image: '/hybrid/inperson-grave.svg',
    class: 'in-person',
    content: [
      'Receive swag (such as t-shirts, stickers, etc.)',
      'Visit sponsor booths face to face',
      'Live workshops',
      'Catered food service and snacks',
    ],
  },
  {
    image: '/hybrid/hybrid-grave.svg',
    class: 'hybrid',
    content: [
      'Judging and expo in person/virtually',
      'Request mentor for technical help',
      'Resume will be shared with sponsors',
      'Mini events and games',
      'Access event through the Technica virtual platform',
      'Win a prize for hacking categories (Digital gift card only for online hackers)',
    ],
  },
  {
    image: '/hybrid/virtual-grave.svg',
    class: 'virtual',
    content: [
      'Visit sponsor booths virtually',
      'Slack community to make friends and discuss your project',
      'Chat with the Technica community on Discord and Slack',
      'Attend recorded or streamed workshops',
      'Receive swag depending on participation level if based in the U.S.',
    ],
  },
]);
</script>

<style scoped lang="scss">
.environment-box {
  width: 400px;
  height: 530px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #272341;
  background-repeat: no-repeat;
}

.caption-box {
  margin: 0 85px;
}

.hybrid > .caption-box {
  margin-bottom: 30px;
  padding-top: 1.5rem;
}

.in-person > .caption-box,
.virtual > .caption-box {
  margin-bottom: 50px;
}

.container {
  margin-top: 5rem;
  text-align: center;
}

.header-container {
  margin-bottom: 2%;
}

.col-sm {
  padding: 15px;
}
</style>
