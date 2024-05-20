<template>
  <div class="additional-info-container" v-if="mounted">
    <div class="header-container">
      <div class="tab-header-container" v-for="(tab) in  AdditionalInfoTabs " @click="handleTabClick(tab.index)"
        :key=tab.index>

        <!-- /* in the case of clicking bottom tab on mobile version, put content div above */ -->
        <div class=" tab-content-container" v-if="isMobile && activeTab == (AdditionalInfoTabs.length - 1)"
          v-show="tab.index == activeTab" :style="{
            backgroundColor: tab.color
          }">
          <div class=" tab-content">{{ tab.content }}</div>
          <PixelButton text="Learn more" textColor="gray" :link="tab.link" img="white-button-normal.svg" hover="white-button-hover.svg" click="white-button-onclick.svg"/>
        </div>

        <!-- /* display each tab */ -->
        <div class="tab-header"
          :style="{ backgroundColor: (isMobile || tab.index == activeTab) ? tab.color : '#494356' }">
          <div class="tab-title-container">{{ tab.title }}</div>
          <div class="tab-icon-container" v-if=isMobile>
            <img class="tab-icon" v-if="tab.index != activeTab" src="/icons/ArrowUpIcon.png">
            <img class="tab-icon" v-if="tab.index == activeTab" src="/icons/ArrowDownIcon.png">
          </div>
        </div>

        <!-- /* mobile version, display content below tab */ -->
        <div class=" tab-content-container" v-if="isMobile && activeTab != 3" v-show="tab.index == activeTab" :style="{
          backgroundColor: tab.color
        }">
          <div class=" tab-content">{{ tab.content }}</div>
          <PixelButton text="Learn more" textColor="gray" :link="tab.link" img="white-button-normal.svg" hover="white-button-hover.svg" click="white-button-onclick.svg"/>
        </div>
      </div>
    </div>

    <!-- /* desktop version, display content below all tabs */ -->
    <div class=" tab-content-container" v-if=isLargeScreen v-show="tab.index == activeTab"
      v-for="( tab ) in  AdditionalInfoTabs " :style="{
        backgroundColor: tab.color
      }">
      <div class=" tab-content">{{ tab.content }}</div>
      <PixelButton text="Learn more" textColor="gray" :link="tab.link" img="white-button-normal.svg" hover="white-button-hover.svg" click="white-button-onclick.svg"/>
    </div>

  </div>
</template>
  
<script setup lang="ts">
import {
  AdditionalInfoTabs
} from '~/components/AdditionalInfo/InfoTabs';
import { ref } from 'vue';
import { useWindowSize } from '@vueuse/core'

const mounted = ref(false);
onMounted(() => {
  mounted.value = true;
});

// Tab currently being displayed
const activeTab = ref(0);

const { width } = useWindowSize();

// Check window size for mobile version
const isMobile = computed(() => {
  return width.value <= 768;
});

const isLargeScreen = computed(() => {
  if (width.value > 768 && (activeTab.value === -1)) {
    activeTab.value = 0;
  }
  return width.value > 768;
});

// Switch active tab on click or window resize
function handleTabClick(tabIndex: number) {
  if (isMobile.value) {
    activeTab.value = (activeTab.value === tabIndex) ? -1 : tabIndex;
  } else {
    activeTab.value = tabIndex;
  }
}
</script>
  
<style scoped lang="scss">
.additional-info-container {
  display: flex;
  flex-direction: column;
  color: white;
  font-family: 'Poppins';
  margin-bottom: 50px;
}

.header-container {
  display: flex;
  flex-direction: row;
  width: 100%;
  position: relative;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
}

.tab-header-container {
  font-weight: bold;
  width: 100%;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
}

.tab-header {
  width: 100%;
  padding: 1.25rem;
  border-radius: 1rem 1rem 0rem 0rem;
  position: relative;
  z-index: 1;
  overflow-wrap: break-word;
  height: 100%;
  font-size: 1.25rem;
  cursor: pointer;
  
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    border-radius: 1rem;
  }
}

.tab-title-container {
  justify-content: center;
  margin-left: auto;
}

.tab-icon-container {
  justify-content: flex-end;
  margin-left: auto;
}

.tab-icon {
  width: 1rem;
}

.tab-header-container :hover {
  text-decoration: underline;

  @media screen and (max-width: 768px) {
    text-decoration: none;
  }
}

.tab-content-container {
  padding: 1.25rem;
  border-radius: 0rem 0rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins';

  @media screen and (max-width: 768px) {
    text-align: center;
    opacity: 0.8;
    border-radius: 0rem;
    width: 75%;
    align-self: center;
  }
}

.tab-content-container:after {
  @media screen and (max-width: 768px) {
    opacity: 0.8;
  }
}

.tab-content {
  margin-bottom: 1rem;
  font-size: 1rem;
}

.learn-more-button {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("/icons/LearnMore.png");
  background-repeat: no-repeat;
  height: 100%;
  color: gray;
  text-align: center;
  background-size: contain;
  background-position: center;
  font-size: 1rem;
  padding: 1rem;

  @media screen and (max-width: 768px) {
    color: white;
    border-radius: 1rem;

  }
}

.learn-more-text {
  display: inline-block;
  text-decoration: none;
  color: gray;
  padding: 1.25rem;
  font-family: 'Pixeloid-Sans';
}
</style>