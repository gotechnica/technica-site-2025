<template>

  <div class="additional-info-container" v-if="mounted">
    <div class = "title">
    <Header>Additional Information</Header>
    </div>

    <div class = "info">
    <!-- Tabs -->
    <div class = "tabs-container">
      <button
        class="tab"
        :class="tab.class" 
        v-for="tab in AdditionalInfoTabs"
        :key="'tab-' + tab.index"
        @click = "currTab = tab.index"
        :style = "currTab == tab.index ? {backgroundColor: '#EFE4DC', border: '1px solid transparent', borderBottom: 'none'} : {backgroundColor: '#141024', border: '3px solid #EFE4DC', borderBottom: 'none'}"
      >
        <p :style = "currTab == tab.index ? { color: '#141024', fontWeight: 'bold'} : {color: '#EFE4DC'}">{{ tab.title }}</p>
    </button>
    </div>

    <!-- Card Content -->
    <div class = "card-content">
    <p class = "line-breaks">{{AdditionalInfoTabs[currTab].content}}</p>
    <div class = "learn-more-button">
       <VineButton
          :text="'Learn More'"
          :link="AdditionalInfoTabs[currTab].link"
          :img="AdditionalInfoTabs[currTab].img"
          :hover="AdditionalInfoTabs[currTab].hover"
          :click="AdditionalInfoTabs[currTab].click"
        />
     </div>
    </div>
  </div>

  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useWindowSize } from '@vueuse/core';

interface InfoTab {
  index: number;
  title: string;
  content: string;
  link: string;
  color: string;
  displayed: boolean;
  class: string;
  img: string;
  hover: string;
  click: string;
}

const currTab = ref<number>(0);

const AdditionalInfoTabs: InfoTab[] = [
  {
    index: 0,
    img: 'button_purple_normal.svg',
    hover: 'button_purple_hover.svg',
    click: 'button_purple_onclick.svg',
    class: 'fellows',
    title: 'Fellowship Program',
    content:
      'The Technica Fellowship Program gives rising college freshman opportunity to work on a coding project impacting Technica. Fellows will gain real industry experience and impact thousands of users! Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.  \n\nTempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.',
    link: '/fellows',
    color: '#EFE4DC',
    displayed: true,
  },
  {
    index: 1,
    img: 'button_purple_normal.svg',
    hover: 'button_purple_hover.svg',
    click: 'button_purple_onclick.svg',
    class: 'mentors',
    title: 'Mentors and Volunteers',
    content:
      "Bring hackers' ideas to life by sharing your Technica knowledge or help with event operations at Technica! Anyone 18 years or older and of any gender can volunteer and help make Technica a success! Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. \n\n Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere.  Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.",
    link: '/mentors-volunteers',
    color: '#EFE4DC',
    displayed: false,
  },
  {
    index: 2,
    img: 'button_purple_normal.svg',
    hover: 'button_purple_hover.svg',
    click: 'button_purple_onclick.svg',
    class: 'ambassadors',
    title: 'Ambassadors',
    content:
      "Technica Campus Ambassadors have the unique opportunity to help foster our community beyond Technica weekend at UMD. As a representative of your school, you'll spread the word about Technica 2025 on your campus and promote inclusion in STEM! Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. \n\n Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere.Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.",
    link: '/ambassadors',
    color: '#EFE4DC',
    displayed: false,
  },
  {
    index: 3,
    img: 'button_purple_normal.svg',
    hover: 'button_purple_hover.svg',
    click: 'button_purple_onclick.svg',
    class: 'travel',
    title: 'Travel Info',
    content:
      'Need to travel to get to Technica? We got you covered! Technica can reimburse your travel fees. Head to our travel page to learn more!Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.  \n\n Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.  Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.',
    link: '/travel',
    color: '#EFE4DC',
    displayed: false,
  },
];

const mounted = ref(false);
onMounted(() => {
  mounted.value = true;
});

const { width } = useWindowSize();
const isMobile = ref(false);

width.value <= 768 ? (isMobile.value = true) : (isMobile.value = false);
</script>

<style scoped lang="scss">
.additional-info-container {
  display: flex;
  flex-direction: column;
  // background-color: #272341;
  font-family: 'Poppins';
  margin-bottom: 1rem;
}

//  box-shadow: 0 0 30 0 #8e80ab6f;

.title{
  margin-bottom: 4rem;
}

.info{
  // box-shadow: 0 0 30px 0 #8E80AB80;
  // background-color: pink;
}

.tabs-container{
  display: flex;
  justify-content: space-between;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  background-color: transparent;

  .tab{
    border-radius: 10px 10px 0 0;
    z-index: 1;
    

    p{
      margin: 0;
      padding: 1rem 0.5rem;
      font-size: 1rem;
    }
  }

}

.card-content {
  background-color: #EFE4DC;
  font-size: 0.9rem;
  box-sizing: border-box;
  padding: 3rem 3rem;
  padding-bottom: 6rem;
  position: relative;
  border-radius: 0 0 10px 10px;
  box-shadow: 0 -20px 50px 10px #8E80AB80;
  
  p{
    color: #141024;
    
  }
  // display: grid;
  // grid-template-columns: 1fr 1fr;
  // gap: 2rem;
  // margin: 5rem 5rem 0 5rem;

  // @media screen and (max-width: 768px) {
  //   grid-template-columns: 1fr;
  //   margin-left: 5%;
  //   margin-right: 5%;
  // }
}

.line-breaks{
  white-space: pre-line;
}

.learn-more-button{
  position: absolute;
  right: 1em;
  bottom: 1em;
  
}

// .card {
//   border-radius: 1rem;
//   padding: 1rem;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   text-align: left;
// }

// .card-header {
//   font-size: 2rem;
//   margin-bottom: 0.5rem;
//   border: none;
//   align-self: baseline;
//   padding-left: 0;
//   background-color: transparent;
//   color: white;
//   width: 100%;
//   text-align: center;
//   font-weight: bold;
// }

// .card-content {
//   font-size: 0.9rem;
//   margin-bottom: 0.5rem;
//   color: white;
//   text-align: center;
// }

// .learn-more-button {
//   margin-top: 0.7rem;
//   background-color: #b097c0;
//   color: white;
//   font-size: 0.7rem;
//   padding: 0.5rem 1.5rem 0.5rem 1.5rem;
//   border: none;
//   border-radius: 0.5rem;
// }

// .fellows {
//   background-color: $LIGHTGREEN;
//   border: $DARKGREEN solid 5px;

//   .card-header {
//     -webkit-text-stroke: 1px $DARKGREEN;
//     text-shadow: $DARKGREEN;
//   }
// }

// .ambassadors {
//   background-color: $LIGHTPINK;
//   border: $DARKPINK solid 5px;

//   .card-header {
//     -webkit-text-stroke: 1px $DARKPINK;
//     text-shadow: $DARKPINK;
//   }
// }

// .mentors {
//   background-color: $LIGHTPURPLE;
//   border: $DARKPURPLE solid 5px;

//   .card-header {
//     -webkit-text-stroke: 1px $DARKPURPLE;
//     text-shadow: $DARKPURPLE;
//   }
// }

// .travel {
//   background-color: $LIGHTYELLOW;
//   border: $DARKYELLOW solid 5px;

//   .card-header {
//     -webkit-text-stroke: 2px $DARKYELLOW;
//     text-shadow: $DARKYELLOW;
//   }
// }
</style>
