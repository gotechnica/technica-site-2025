<template>
    <div id="wrapper">
        <div id="timer-container">
            <div class="countdown">
                <div class="time-section">
                    <span class="time outline">{{ hours }}</span>
                    <span class="label">Hours</span>
                </div>
                <div class="time-section">
                    <span class="time outline">{{ minutes }}</span>
                    <span class="label">Minutes</span>
                </div>
                <div class="time-section">
                    <span class="time outline">{{ seconds }}</span>
                    <span class="label">Seconds</span>
                </div>
            </div>
        </div>
    </div> 
</template>

<script setup lang="ts">
import { useWindowSize } from '@vueuse/core';
import { ref } from 'vue';

const { width } = useWindowSize();
const isMobile = computed(() => {
    return width.value <= 1150;
});

//Timer

const startTime = new Date('2025-11-15T08:00:00-05:00'); 
const endTime = new Date('2025-11-16T12:15:00-05:00');

const days = ref('00');
const hours = ref('00');
const minutes = ref('00');
const seconds = ref('00');

onMounted(() => {
    const updateTimer = () => {
        const now = new Date();
          
        if (now >= startTime && now <= endTime) {
            const timeDiff = endTime.getTime() - now.getTime();
            
            hours.value = String(Math.floor(timeDiff / (1000 * 60 * 60))).padStart(2, '0');
            minutes.value = String(Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
            seconds.value = String(Math.floor((timeDiff % (1000 * 60)) / 1000)).padStart(2, '0');
        } else if (now > endTime) {
            hours.value = '00';
            minutes.value = '00';
            seconds.value = '00';
        }
    };

    updateTimer();

    const timerInterval = setInterval(updateTimer, 1000);

    onUnmounted(() => {
        clearInterval(timerInterval);
    });
});


const { scrollToAnchor } = useAnchorScroll({
  toTop: {
    scrollOptions: { behavior: 'smooth', offsetTop: 0 }
  }
});

</script>

<style scoped lang="scss">

// idk what the point of these are!~~~~~~
// @font-face {
//     font-family: 'Poppins';
//     src: url('@/assets/fonts/Poppins-Regular.ttf') format('truetype');
//     font-weight: normal; 
//     font-style: normal;  
// }

// @font-face {
//     font-family: 'Poppins';
//     src: url('@/assets/fonts/Poppins-Bold.ttf') format('truetype');
//     font-weight: bold; 
//     font-style: normal;  
// }

    #wrapper {
        background-image: url("/public/hero/website_counter.svg");
        background-attachment: scroll;
        background-size: contain;
        background-position: center;
        margin-top: -30%;
        margin-bottom: 10%;
        background-repeat: no-repeat;
        height: 100vh;
        position: relative;
    }

    #timer-container {
        position: relative;
        top: 50%; 
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1; 
        color: white; 
        font-size: 4rem;
    }

    .time-section {
        display: flex; 
        flex-direction: column; 
        align-items: center; 
        justify-content: flex-start;
        margin: 0 .5rem; 
    }

    .countdown {
        display: flex;
        align-items: center; 
    }
    
    .time {
            color: white; 
            font-size: 7vw; 
            font-family: 'Poppins', sans-serif;
            font-weight: 800;
            line-height: 1;          /* keeps digits compact vertically */
            margin-bottom: 0.25em;
    }

    .label{
        font-size: 2vw;
        color: white;
        font-family: 'Poppins', sans-serif;
    }

    .outline {
        text-shadow: 2px 5px 2px black;
    }  

    @media screen and (max-width: 1100px) {
        
        #wrapper {
            margin-top: -70%;
            margin-bottom: 10%;
        }
        
        #timer-container {
            font-size: 3rem; 
        }

        .time {
            font-size: 8vw; 
        }

        .label {
            font-size: 2vw; 
        }
        
        
    }

    @media screen and (max-width: 768px) {
        
        #wrapper {
            margin-top: -120%;
            margin-bottom: -50%;
        }
        
        #timer-container {
            font-size: 3rem; 
        }

        .time {
            font-size: 7vw; 
        }

        .label {
            font-size: 2vw; 
        }
    }

    @media screen and (max-width: 500px) {
        
        #wrapper {
            margin-top: -200%;
            margin-bottom: -80%;
        }

        #timer-container {
            font-size: 2rem; 
        }

        .time {
            font-size: 6vw; 
        }

        .label {
            font-size: 2vw; 
        }
    }
    
</style>