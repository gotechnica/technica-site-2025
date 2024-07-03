<!-- <template>
  <div class="additional-info-container" v-if="mounted">
    <div class="header-container">
      <h1>Additional Information</h1>
    </div>
    <div class="cards-container">
      <div class="card" v-for="(tab, index) in AdditionalInfoTabs" :key="index">
        <div class="card-header">{{ tab.title }}</div>
        <div class="card-content">{{ tab.content }}</div>
        <a :href="tab.link">
          <button class="learn-more-button" :style="{ backgroundImage: `url(${tab.buttonImage})` }">Learn More</button>
        </a>
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
  buttonImage: string;
}


const AdditionalInfoTabs: InfoTab[] = [
  { index: 0, title: 'Fellowship Program', buttonImage: 'assets/buttons/blue-button-regular.svg', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', link: '/fellows', color: '#FFFFFF', displayed: true },
  { index: 1, title: 'Ambassadors', buttonImage: 'assets/buttons/green-button-regular.svg', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', link: '/ambassadors', color: '#FFFFFF', displayed: false },
  { index: 2, title: 'Mentors and Volunteers', buttonImage: 'assets/buttons/purple-button-regular.svg', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', link: '/mentors', color: '#FFFFFF', displayed: false },
  { index: 3, title: 'Travel Info', buttonImage: 'assets/buttons/yellow-button-regular.svg', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', link: '/travel', color: '#FFFFFF', displayed: false },
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
  color: white;
  font-family: 'Poppins';
  margin-bottom: 1rem;
}

.cards-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin: 5rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

.card {
  background-color: #D9D9D9;
  border-radius: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
}

.card-header {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  text-align: left;
  border: none;
  align-self: baseline;
  padding-left: 0;
  background-color: #D9D9D9;
}

.card-content {
  font-size: 0.7rem;
  margin-bottom: 0.5rem;
}

.learn-more-button {
  margin-top: 0.7rem;
  background-color: #B097C0;
  color: white;
  font-size: 0.7rem;
  padding: 0.5rem 1.5rem 0.5rem 1.5rem;
  border: none;
  border-radius: 0.5rem;
  background-size: cover; /* Ensures the background image covers the button */
}

</style> -->
<!-- 
<template>
  <div class="header-container">
    <h1>Additional Information</h1>
  </div>
  <div class="container d-flex justify-content-center">
    <div class="row g-3">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title-green">Fellowship Program</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div class="button-container">
              <a href="/fellowship-program">
                <img src="assets/buttons/green-button-regular.svg" id="green-button" class="Green-Card button-img">
              </a>
              <div class="button-text">Learn More</div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title-purple">Travel Info</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div class="button-container">
              <a href="/travel-info">
                <img src="assets/buttons/purple-button-regular.svg" id="purple-button" class="Purple-Card button-img">
              </a>
              <div class="button-text">Learn More</div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title-pink">Ambassadors</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div class="button-container">
              <a href="/ambassadors">
                <img src="assets/buttons/pink-button-regular.svg" id="pink-button" class="Pink-Card button-img">
              </a>
              <div class="button-text">Learn More</div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title-yellow">Mentors and Volunteers</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div class="button-container">
              <a href="/mentors-volunteers">
                <img src="assets/buttons/yellow-button-regular.svg" id="yellow-button" class="Yellow-Card button-img">
              </a>
              <div class="button-text">Learn More</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped lang="scss">
.row {
  color: white;
  font-family: 'Poppins';
  margin: 2%;
}

.card-text {
  color: white;
  font-family: Poppins;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  padding-left: 10px;
  padding-right: 10px;
}

.card {
  background-color: lightgray;
  border: 5px;
  width: 32em;
  height: 24em;
  border-radius: 18px;
}

.card-title-yellow, .card-title-purple, .card-title-green, .card-title-pink {
  font-family: Poppins;
  font-size: 36px;
  font-weight: 700;
  line-height: 54px;
  text-align: center;
  color: white;
  -webkit-text-stroke-width: 2px;
}

.card-title-yellow {
  -webkit-text-stroke-color: #F0B54F;
}

.card-title-purple {
  -webkit-text-stroke-color: #351C33;
}

.card-title-green {
  -webkit-text-stroke-color: #00473E;
}

.card-title-pink {
  -webkit-text-stroke-color: #D26B89;
}

.button-container {
  position: relative;
  text-align: center;
}

.button-container img {
  width: 15em;
}

.button-text {
  font-family: Poppins;
  font-size: 18px;
  font-weight: 500;
  position: absolute;
  top: 50%;
  left: 51%;
  transform: translate(-50%, -50%);
  color: white;
}

.Green-Card:hover {
  content: url('assets/buttons/green on click.svg');
  width: 15em;
}

.Purple-Card:hover {
  content: url('assets/buttons/purple on click.svg');
}

.Pink-Card:hover {
  content: url('assets/buttons/pink on click.svg');
}

.Yellow-Card:hover {
  content: url('assets/buttons/yellow on click.svg');
}

.Green-Card:active {
  content: url('assets/buttons/green visited.svg');
}

.Purple-Card:active {
  content: url('assets/buttons/purple visited.svg');
}

.Pink-Card:active {
  content: url('assets/buttons/pink visited.svg');
}

.Yellow-Card:active {
  content: url('assets/buttons/yellow visited.svg');
}
</style> -->
<template>
  <div class="header-container">
    <h1>Additional Information</h1>
  </div>
  <div class="container d-flex justify-content-center">
    <div class="row g-3">
      <!-- Fellowship Program Card -->
      <div class="col-lg-5">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title-green">Fellowship Program</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div class="button-container">
              <a href="/fellowship-program">
                <img src="assets/buttons/green-button-regular.svg" id="green-button" class="Green-Card button-img">
              </a>
              <div class="button-text">Learn More</div>
            </div>
          </div>
        </div>
      </div>
      <!-- Travel Info Card -->
      <div class="col-lg-5">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title-purple">Travel Info</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div class="button-container">
              <a href="/travel-info">
                <img src="assets/buttons/purple-button-regular.svg" id="purple-button" class="Purple-Card button-img">
              </a>
              <div class="button-text">Learn More</div>
            </div>
          </div>
        </div>
      </div>
      <!-- Ambassadors Card -->
      <div class="col-lg-5">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title-pink">Ambassadors</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div class="button-container">
              <a href="/ambassadors">
                <img src="assets/buttons/pink-button-regular.svg" id="pink-button" class="Pink-Card button-img">
              </a>
              <div class="button-text">Learn More</div>
            </div>
          </div>
        </div>
      </div>
      <!-- Mentors and Volunteers Card -->
      <div class="col-lg-5">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title-yellow">Mentors and Volunteers</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div class="button-container">
              <a href="/mentors-volunteers">
                <img src="assets/buttons/yellow-button-regular.svg" id="yellow-button" class="Yellow-Card button-img">
              </a>
              <div class="button-text">Learn More</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.header-container {
  text-align: center;
  margin-bottom: 2em;
}

.container {
  display: flex;
  justify-content: center;
}

.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1em; /* Adds a small spacing between the cards */
  color: white;
  font-family: 'Poppins';
  margin: 2%;
}

.card-text {
  color: white;
  font-family: Poppins;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  padding-left: 10px;
  padding-right: 10px;
}

.card {
  background-color: lightgray;
  border: 5px;
  width: 32em;
  height: 24em;
  border-radius: 18px;
  margin: 0.5em; /* Small margin to add spacing between the cards */
}

.card-title-yellow, .card-title-purple, .card-title-green, .card-title-pink {
  font-family: Poppins;
  font-size: 36px;
  font-weight: 700;
  line-height: 54px;
  text-align: center;
  color: white;
  -webkit-text-stroke-width: 2px;
}

.card-title-yellow {
  -webkit-text-stroke-color: #F0B54F;
}

.card-title-purple {
  -webkit-text-stroke-color: #351C33;
}

.card-title-green {
  -webkit-text-stroke-color: #00473E;
}

.card-title-pink {
  -webkit-text-stroke-color: #D26B89;
}

.button-container {
  position: relative;
  text-align: center;
}

.button-container img {
  width: 15em;
}

.button-text {
  font-family: Poppins;
  font-size: 18px;
  font-weight: 500;
  position: absolute;
  top: 50%;
  left: 51%;
  transform: translate(-50%, -50%);
  color: white;
}

.Green-Card:hover {
  content: url('assets/buttons/green on click.svg');
  width: 15em;
}

.Purple-Card:hover {
  content: url('assets/buttons/purple on click.svg');
}

.Pink-Card:hover {
  content: url('assets/buttons/pink on click.svg');
}

.Yellow-Card:hover {
  content: url('assets/buttons/yellow on click.svg');
}

.Green-Card:active {
  content: url('assets/buttons/green visited.svg');
}

.Purple-Card:active {
  content: url('assets/buttons/purple visited.svg');
}

.Pink-Card:active {
  content: url('assets/buttons/pink visited.svg');
}

.Yellow-Card:active {
  content: url('assets/buttons/yellow visited.svg');
}
</style>
