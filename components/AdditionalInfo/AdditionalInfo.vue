<template>

  <div class="additional-info-container" v-if="mounted">
    <div class = "title">
    <Header>Additional Information</Header>
    </div>

    <div class = "info">
    <!-- Tabs -->
    <div class = "tabs-container">
      <div
        class="tab"
        v-for="tab in AdditionalInfoTabs"
        :key="'tab-' + tab.index"
        @click = "toggleTab(tab.index)"
        :class = "currTab == tab.index ? 'selected' : 'unselected'">

      <div class = "tab-title">
        <p :class = "currTab == tab.index ? 'selected' : 'unselected'" class = "title">{{tab.title}}</p>

        <!-- "() => {currTab == tab.index ? currTab = -1 : currTab = tab.index}"  -->
        <button 
          v-if = "isMobile" 
          class = "drop-down"
          @click.stop = "toggleTab(tab.index)" 
          :class = "currTab == tab.index ? 'active' : 'inactive'">
            <svg 
            xmlns="http://www.w3.org/2000/svg" width="30" 
            height="30"
            fill="currentColor"
            class="bi bi-chevron-down"
            viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
            </svg>
          </button>
      </div>

      <div v-if = "isMobile" class = "tab-content" v-show = "currTab == tab.index" :key = "currTab === tab.index ? tab.index : 'closed-' + tab.index">
        <p class = "tab-text" :class = "currTab == tab.index ? 'active' : 'inactive'">{{AdditionalInfoTabs[tab.index].content}}</p>
        <div class = "mobile-button" :key="'button-' + currTab" @click.stop>
        <WebButton
          v-if = "currTab === tab.index"
          :text="'Learn More'"
          :link="AdditionalInfoTabs[currTab].link"
          :img="AdditionalInfoTabs[currTab].img"
          :hover="AdditionalInfoTabs[currTab].hover"
          :click="AdditionalInfoTabs[currTab].click"
        />
        <!-- <button></button> -->
        </div>
      </div>

    </div>

    </div>


    <!-- Render separately, only on larger screen sizes -->


    <!-- Card Content -->

    
    <div class = "card-content" v-if = "!isMobile">
      <p class = "line-breaks">{{AdditionalInfoTabs[currTab].content}}</p>
      <div class = "learn-more-button">
       <WebButton
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
import {computed} from 'vue';
import VineButton from '../VineButton.vue';

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

const mounted = ref(false);
onMounted(() => {
  mounted.value = true;
});

const { width } = useWindowSize();
const isMobile = computed(() => width.value < 1200);

const toggleTab = (index:number) => {
  currTab.value = currTab.value === index ? -1 : index;
}

const AdditionalInfoTabs: InfoTab[] = [
  {
    index: 0,
    img: 'button_purple_normal.svg',
    hover: 'button_purple_hover.svg',
    click: 'button_purple_onclick.svg',
    class: 'fellows',
    title: 'Fellowship Program',
    content:
      'The Technica Fellowship Program gives rising college freshman opportunity to work on a coding project impacting Technica. Fellows will gain real industry experience and impact thousands of users!',
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
      "Bring hackers' ideas to life by sharing your Technica knowledge or help with event operations at Technica! Anyone 18 years or older and of any gender can volunteer and help make Technica a success!",
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
      "Technica Campus Ambassadors have the unique opportunity to help foster our community beyond Technica weekend at UMD. As a representative of your school, you'll spread the word about Technica 2025 on your campus and promote inclusion in STEM!",
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
      'Need to travel to get to Technica? We got you covered! Technica can reimburse your travel fees. Head to our travel page to learn more!',
    link: '/travel',
    color: '#EFE4DC',
    displayed: false,
  },
];


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
    border: 1px solid transparent;
    border-bottom: none;
    position: relative;
    // transition: height 0.5s ease-in;
    height: 100%;
    overflow: hidden;

  &.selected{
    background-color: #EFE4DC;
  }

  &.unselected{
    background-color: #141024;
    border: 2px solid #EFE4DC;
  }

    p, h3{
      margin: 0 1rem;
      padding: 1rem 0.5rem;

      &.selected {
        color: #141024;
        font-weight: bold;
      } 

      &.unselected {
        color: #EFE4DC;
      } 

    }

  }

  .mobile-button{
    margin-top: 1rem;
  }


  @media screen and (max-width: 1200px) {
     display: flex;
     flex-direction: column;
     margin-left: 5%;
     margin-right: 5%;
     
     .tab{
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 0 20px 0 #8E80AB80;
      margin-bottom: 1rem;

      p, h3{
        margin: 0 3rem;
      }
      
      p{
        font-size: 1.2rem;
      }

      .title{
        font-size: 1.6rem;
      }
     }


  }

  @media screen and (max-width: 765px) {
    .tab{
      padding: 20px 0px;
    }
  }

   @media screen and (max-width: 550px) {
    .tab{
       padding: 20px 0px;

      .tab-title p{
        font-size: 1.4rem;
      }
    }
  }

}


.tab-title{
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 765px) {
    justify-content: space-between;
  }
}

.tab-title p{
  display: flex;
  
  @media screen and (max-width: 765px) {
    font-size: 1rem;
  }
}

.drop-down{
  display: flex;
  border: none;
  background-color: transparent;
  color: white;
  font-weight: bold;
  position: absolute;
  right: 2rem;
  z-index: 2;
  transition: transform 0.8s;

  
  @media screen and (max-width: 765px) {
    position: relative;
  }

}


.drop-down.active{
  color: #141024;
  transform: rotate(180deg);
}

.drop-down.inactive{
  color: #EFE4DC;
}

.tab-content{
  display: block;
}

.tab-content.active{
  display: block;
}

.tab-content.inactive{
  display: none;
}


.tab-text{
  overflow: hidden;
  transition: height 0.5s ease-in;
  font-size: 1rem;
}

.tab-text.active{
  color: #141024;
  display: block;
  height: 100%;
}

.tab-text.hidden{
  color:#272341;
  height: 0;
  overflow: hidden;
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
