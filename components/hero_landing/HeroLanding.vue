<template>
    <div id="wrapper" :class = "timeClass">
        <div id="overlay"></div>
        <div class="details" id="top">
            <div class="logos">
                <div class="col-md">
                    <img class = "create-your-reality-logo" src="/logos/create-your-reality-hi-res.png" width="24%"/>
                </div>
                <div class="col-md">
                    <img class = "technica-logo" src = "/logos/technica-logo-hi-res.png" width="30%"/>
                </div>
            </div>
            
            <div class="dark-bg">
                <div class="subtext">
                    <p class = "basic-info" >October 21-22 at The Hotel, UMD | Hybrid Environment</p>
                    <p>The world's largest hackathon for underrepresented genders</p>
                </div>
                <div id="dummy"></div>
                <div class="buttons">
                    <PixelButton text="Register" link="/register" img="blue-button-normal.svg" hover="blue-button-hover.svg" click="blue-button-onclick.svg"/>
                    <PixelButton class="learn-more" @click="() => TogglePopup('buttonTrigger')" :text="learnMore" img="pink-button-normal.svg" hover="pink-button-hover.svg" click="pink-button-onclick.svg"/>
                </div>
            </div>
        </div>
    </div>
    <div v-if="isMobile" class="popup-mobile">
        <div id="popup" v-if="popupTriggers.buttonTrigger" >
            <div id="popup-inner" class="mobile">
                <h3>What is <br/>Create Your Reality*?</h3>
                <p> In this new world, the possibilities are endless. 
                This year, we want you to Create Your Reality 
                at Technica! <br/><br/>We encourage you to forge your own 
                path, whether this means embarking on your first 
                journey to hacking, pushing yourself past your 
                own comfort zone, or coming to relax and just 
                having fun: <b>choose the reality that fits you. </b>
                <br/><br/>Technica is a safe space; regardless of what you 
                decide, the reality you create can open doors to a
                new realm of opportunity where you can prosper!</p>
            </div>
        </div>
    </div>
    <div  v-else>
        <div id="popup" class="d-flex justify-content-between" v-if="popupTriggers.buttonTrigger">
           <!-- <div class="icons pull-left">
                <img class="yellow-icon" src = "/hero-landing/yellow.svg"/>
                <img class="pink-icon" src = "/hero-landing/pink.svg"/>
                <img class="blue-icon" src = "/hero-landing/blue.svg"/>
            </div> -->
            <div id="popup-inner">
                <h3>What is <br/>Create Your Reality*?</h3>
                <p> In this new world, the possibilities are endless. 
                This year, we want you all to Create Your Reality 
                at Technica! <br/><br/>We encourage you to forge your own 
                path, whether this means embarking on your first 
                journey to hacking, pushing yourself past your 
                own comfort zone, or coming to relax and just 
                have fun: <b>choose the reality that fits you. </b>
                <br/><br/>Technica is a safe space; regardless of what you 
                decide, the reality you create can open doors to a
                new realm of opportunity where you can prosper!</p>
            </div>
        </div>
    </div>
</template>

<script>
import { useWindowSize } from '@vueuse/core';

// Detect mobile layout based on screen width

import { ref } from 'vue';

export default {

    //popup
    setup() {
        const { width } = useWindowSize();
        const isMobile = computed(() => {
            return width.value <= 1150;
        });

        let bottomMargin = 40;

        const popupTriggers = ref({
			buttonTrigger:false
		});

        const learnMore = ref("Learn More");

		const TogglePopup = (trigger) => {
			popupTriggers.value[trigger] = !popupTriggers.value[trigger]
            if(popupTriggers.value[trigger] == true) {
                document.getElementById("dummy").scrollIntoView(true, { behavior: "smooth", block: "nearest", inline: "nearest" });
                learnMore.value = "Close";
            } else {
                document.getElementById("top").scrollIntoView(true, { behavior: "smooth", block: "nearest", inline: "nearest" });
                learnMore.value = "Learn More";
            }
            learnMoreButton();
		};

		return {
			popupTriggers,
			TogglePopup,
            bottomMargin,
            isMobile,
            learnMore,
		}
    },

    // making changing background
    data() {
        return {
            timeClass: '',
            mousePosX: 0,
            mousePosY: 0
        }
    },

    methods: {
        // turning time into integer military time
        getNow: function() {
            const currentDate = new Date();
            let militaryTime = (currentDate.getHours() * 100) + currentDate.getMinutes()
            return militaryTime >=730 && militaryTime <= 1930 ? 'day':'night'
        },
        on() {
            document.getElementById("overlay").style.opacity = 1;
        },

        off() {
            document.getElementById("overlay").style.opacity = 0;
        },
    },
    beforeMount() {
        this.timeClass = this.getNow()
    },
    mounted() {
        this.root = document.documentElement;
            document.addEventListener("mousemove", (event) => {
            this.mousePosX = event.clientX;
            this.mousePosY = event.clientY;
            if(this.mousePosX > window.innerWidth/1.7) {
                this.on();
            } else {
                this.off();
            }
        });
    },

}
</script>

<style scoped lang="scss">
    :root {
        --opacity: 0.5;
    }

    #overlay {
        overflow: hidden;
        position: absolute;
        opacity: 0;
        width: 29%;
        height: 51.5vw;
        top: 0;
        left:64.5%;
        right: 0;
        bottom: 0;
        background-color: rgba(255, 250, 250, 0.25);
        z-index: 2;
        transition: all 0.3s ease;
        cursor: pointer;

        -webkit-box-shadow:0px 0px 110px 27px rgba(255,255,255,0.3);
        -moz-box-shadow: 0px 0px 110px 27px rgba(255,255,255,0.3);
        box-shadow: 0px 0px 110px 27px rgba(255,255,255,0.3);
    }

    #wrapper {
        background-image: url("/hero-landing/nighttime.svg");
        background-attachment:scroll;
        background-size: 100vw;
        resize: both;
        margin-top:0;
        padding-top: 0;
        background-repeat:no-repeat;
        padding-bottom: 40%;
        margin-bottom: -20%;
    }

    // changing background based on local time
    #wrapper.day {
        background-image: url("/hero-landing/daytime.svg");
        background-attachment:scroll;
        background-size: 100vw;
        resize: both;
        margin-top:0;
        padding-top: 0;
        background-repeat:no-repeat;
        padding-bottom: 40%;
        margin-bottom: -30%;
    }
    .details {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 5rem;
        margin-top: -5%;
    }

    .logos {
        resize: both;
        margin-top: 5%;
    }

    .subtext{
        color: white;
        font-weight: bold;
         
        width: fit-content;
        text-shadow: 5px 5px 13px black;
        border-radius: 10px;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

    .basic-info{
        margin-top: 1.5rem;
        margin-bottom: 0.3rem;
        font-size: 20px;
    }

    .register {
        width: 10rem;
        height: 2.75rem;
        margin-right: 3rem;
        background: none;
        border: none;
        background-image: url("/buttons/blue-button-normal.svg");
        background-size: 100%;
        color: white;
    }
    
    .register:hover {
        transition: 5ms;
        background-image: url("/buttons/blue-button-hover.svg");
    }

    .register:active {
        transition: 5ms;
        background-image: url("/buttons/blue-button-onclick.svg");
    }

    #popup {
        margin-top: -40%;
        margin-left: 10%;
        width: 100%;
        resize: both;
    }

    #popup-inner h3{
        color: #4E23AA;
        text-align: center;
        margin-bottom: 1rem;
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
        border: 7px solid #DEB62A; 
    }

    #popup-inner.mobile {
        margin-right:10%;
        width:auto;
    }

    // .popup-container {
    //     position: fixed;
    //     margin-top: 50px;
    //     left: 0;
    //     width: 100%;
    //     height: 100%;
    //     display: flex;
    //     justify-content: center;
    //     align-items: center;
    //     z-index: 3; /* Ensure the pop-up is above the overlay */
    // }

    .icons {
        margin:4rem;
        display: flex;
        flex-direction: column;
    }

    .icons img{
        width:25%;
    }

    .yellow-icon {
        margin-left:15vw;
        float:left;
    }

    .pink-icon {
        margin-top:-2rem;
        margin-left:30vw;
    }
    .blue-icon {
        margin-top:-2rem;
        margin-left:5vw;
    }

    .buttons {
        display: flex;
        flex-wrap: wrap;
        width: 50%;
        gap: 10%;
    }

    .buttons a {
        margin-left: 0;
        margin-right: 0;
    }

    @media screen and (max-width: 1048px) {
        #popup {
            margin-top: -40%;
            margin-left: 0;
        }
    }

    @media screen and (max-width: 768px) {
        .details {
            padding: 2.5rem;
        }

        #wrapper, #wrapper.day {
            background-size: cover;
            padding-bottom: 80%;
            overflow-x: hidden;
            overflow-y: hidden;
            height: 100vh;
        }

        .logos img {
            width: 80%;
        }

        .buttons {
            width: 150%;
        }

        #popup {
            margin-top: -65vw;
        }

        #overlay {
            display: none !important;
        }
    }

    @media screen and (max-width: 500px) {
        .details {
            padding: 1.5rem;
        }

        #wrapper, #wrapper.day {
            background-size: cover;
            padding-bottom: 80%;
            background-position-x: -10em;
            height: 100vh;
        }

        .buttons {
            flex-direction: column;
        }

        .buttons a {
            width: 40% !important;
        }

        #popup {
            margin-top: -90vw;
        }
    }

    

</style>