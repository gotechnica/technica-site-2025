<template>
    <div id="wrapper">
        <div class="details" id="top">
            <div class="logos">
                <div class="col-md">
                    <img class = "alice-logo" src = "/hero/wonder-awaits.svg" width="25%"/>
                </div>
                <div class="col-md">
                    <img class = "technica-logo" src = "/logos/technica-logo-hi-res.png" width="40%"/>
                </div>
            </div>

            <div class="subtext">
                <h1 class = "outline">Wonder Awaits</h1>
                <p class = "basic-info outline">October 26-27 at The Hotel, UMD | Hybrid Environment</p>
                <p class = "outline">The world's largest hackathon for underrepresented genders</p>
            </div>
            <div id="dummy"></div>
            <div class="buttons">
                <VineButton text="Register" link="/register" img="green-button-regular.svg" hover="green-on-click.svg" click="green-visited.svg"/>
                <VineButton text="Learn More" @click="TogglePopup" img="green-button-regular.svg" hover="green-on-click.svg" click="green-visited.svg"/>
            </div>
        </div>
    </div>
    <div v-if="isMobile" class="popup-mobile">
        <div id="popup" v-if="popupTriggers" >
            <div id="popup-inner" class="mobile">
                <h3>What is <br/>Wonder Awaits*?</h3>
                <p> We are thrilled to announce the theme for this fall's 
                    hackathon: <b>Wonder Awaits!</b> <br/><br/> 
                    Inspired by the whimsical world of Alice in Wonderland, 
                    we're diving into the rabbit hole and embarking on a 
                    nostalgic journey to celebrate our <b>10-year anniversary</b>. <br/><br/>
                    This year, we're inviting you to join us in a fantastical 
                    adventure where <b>innovation meets imagination</b>. From 
                    curious concepts to groundbreaking creations, let’s 
                    explore the wonders that await us in this magical realm.
                    Get ready to leap down the rabbit hole with us!</p>
            </div>
        </div>
    </div>
    <div  v-else>
        <div id="popup" class="d-flex justify-content-between" v-if="popupTriggers">
            <div id="popup-inner">
                <h3>What is <br/>Wonder Awaits*?</h3>
                <p> We are thrilled to announce the theme for this fall's 
                    hackathon: <b>Wonder Awaits!</b> <br/><br/> 
                    Inspired by the whimsical world of Alice in Wonderland, 
                    we're diving into the rabbit hole and embarking on a 
                    nostalgic journey to celebrate our <b>10-year anniversary</b>. <br/><br/>
                    This year, we're inviting you to join us in a fantastical 
                    adventure where <b>innovation meets imagination</b>. From 
                    curious concepts to groundbreaking creations, let’s 
                    explore the wonders that await us in this magical realm.
                    Get ready to leap down the rabbit hole with us!</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useWindowSize } from '@vueuse/core';
import { ref } from 'vue';

const learnMore = ref("Learn More");
const { width } = useWindowSize();
const isMobile = computed(() => {
    return width.value <= 1150;
});

const popupTriggers = ref(false)
const { scrollToAnchor, scrollToTop } = useAnchorScroll({
  toTop: {
    scrollOptions: {
      behavior: 'smooth',
      offsetTop: 0,
    }
  },
})

const TogglePopup = () => {
    popupTriggers.value = !popupTriggers.value
    console.log(popupTriggers.value)
    if(popupTriggers.value) {
        scrollToAnchor("#dummy")
        learnMore.value = "Close";
    } else {
        scrollToAnchor("#top")
        learnMore.value = "Learn More";
    }
};
</script>

<style scoped lang="scss">

    #wrapper {
        background-image: url("/hero/hero.svg");
        background-attachment:scroll;
        background-size: 100vw;
        resize: both;
        margin-top:0;
        padding-top: 0;
        background-repeat:no-repeat;
        padding-bottom: 20%;
        margin-bottom: 5%;
    }

    .details {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 5rem;
        margin-top: -5%;
        margin-left: 2%;
    }

    .logos {
        resize: both;
    }

    .subtext{
        color: white;
         
        width: fit-content;
        text-shadow: 5px 5px 13px black;
        border-radius: 10px;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

    .subtext p {
        font-weight: bold;
        font-size: 20px;
    }

   
    .basic-info{
        font-weight: bold;
        margin-top: 0.8rem;
        margin-bottom: 0.1rem;
        font-size: 25px !important;
    }

    .outline {
        color: white;
        -webkit-text-stroke: 1px;
        -webkit-text-stroke-color: black;
        text-shadow: 2px 5px 2px black;
    }

    #popup {
        margin-top: -30%;
        margin-left: 10%;
        width: 100%;
        resize: both;
    }

    #popup-inner h3{
        color: $DARKPURPLE;
        text-align: center;
        margin-bottom: 1rem;
    }

    #popup-inner p{
        color: $DARKPURPLE;
    }

    #popup-inner {
        padding: 2rem;
        margin: 2rem;
        margin-right: 4rem;
        height:auto;
        border-radius: 2rem;
        width: 40%;
        padding:3rem;
        background-color: white;
        color: black;
        border: 7px solid $DARKPURPLE; 
    }

    #popup-inner.mobile {
        margin-top: 30rem;
        margin-left:10%;
        margin-right:10%;
        width:auto;
    }
 
    .register {
        background-color: #aa96ca;
        color: white;
    }

    .register:hover {
        background-color: transparent !important;
        color: #aa96ca;
        border: #aa96ca solid;
    }

    .learn-more {
        background-color: transparent;
        border: #aa96ca solid;
        color: #aa96ca;
    }

    .learn-more:hover{
        background-color: #aa96ca;
        color: white;
    }

    .buttons {
        width: 40%;
    }

    .buttons a {
        margin-left: 0;
        margin-right: 0;
        margin-top: -3%;
    }

    @media screen and (max-width: 1048px) {
        #popup {
            margin-top: -40%;
            margin-left: 0;
        }

        #wrapper, #wrapper.day {
            background-size: cover;
            padding-bottom: 80%;
            overflow-x: hidden;
            overflow-y: hidden;
            height: 100vh;
        }
    }

    @media screen and (max-width: 768px) {
        .details {
            padding: 2.5rem;
        }

        .technica-logo {
            width: 50%;
        }

        .alice-logo {
            width: 35%;
        }

        #popup {
            margin-top: -65vw;
        }

        .subtext p {
            font-size: 15px;
        }

    
        .basic-info{
            font-weight: bold;
            margin-top: 0.8rem;
            margin-bottom: 0.1rem;
            font-size: 20px !important;
        }
    }

    @media screen and (max-width: 500px) {
        .details {
            padding: 1.5rem;
        }

        .technica-logo {
            width: 80%;
        }

        .alice-logo {
            width: 50%;
        }

        #wrapper, #wrapper.day {
            background-size: cover;
            padding-bottom: 80%;
            background-position-x: -10em;
            height: 100vh;
        }

        .subtext p {
            font-size: 15px;
        }

    
        .basic-info{
            font-weight: bold;
            margin-top: 0.8rem;
            margin-bottom: 0.1rem;
            font-size: 17px !important;
        }

        .buttons a {
            width: 10rem;
        }
        #popup {
            margin-top: -90vw;
        }
    }

    

</style>