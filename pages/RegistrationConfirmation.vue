<template>
    <title>Registration Confirmation</title>
    <div class="container">
        <div class="content">
            <h1 class="purple">Thank You For Registering!</h1>
            <p>You will be sent a confirmation email for your registration.</p>
            <p>Keep in touch with Technica by following us on social media or joining our Community listserv!</p>
            <p class="mt-5"> Welcome to the TechniFAM. Get ready for the best weekend you've ever had!</p>
            
            <PixelButton text="Back to Home" link="/" img="purple-button-normal.svg" hover="purple-button-hover.svg" click="purple-button-onclick.svg" class="mt-5"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import JSConfetti from 'js-confetti';
import { onMounted } from 'vue';

onMounted(() => {
  const jsConfetti = new JSConfetti();
  jsConfetti.addConfetti();
});

</script>
<style scoped lang="scss">
    .content {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 100%;
        padding: 5%;
    }

    .content h1 {
        font-size: 400%;
    }

    .content p {
        font-size: 125%;
        margin: 0;
    }
    .container {
        width: 100%;
        height: 100vh;
    }

    .blue {
        color: $BLUE;
    }

    .pink {
        color: $PINK;
    }

    .purple {
        color: $DARK_PURPLE;
    }


    @media screen and (max-width: 550px) {
        .content h1 {
            font-size: 250%;
        }

        .content p {
            font-size: 90%;
            margin: 0;
        }
    }
</style>
