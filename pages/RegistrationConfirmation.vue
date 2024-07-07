<template>
    <title>Registration Confirmation</title>
    <div class="container">
        <div class="content">
            <Header>Thank You For Registering!</Header>
            <p>You will be sent a confirmation email for your registration.</p>
            <p>Keep in touch with Technica by following us on <a href="https://linktr.ee/gotechnica_">social media</a> or joining our <a href="gotechnica.org/discord">Community listserv</a>!</p>
            <p class="mt-5"> Welcome to the TechniFAM. Get ready for the best weekend you've ever had!</p>
            
            <PixelButton text="Back to Home" link="/" img="purple-button-regular.svg" hover="purple-button-regular.svg" click="purple-on-click.svg" class="mt-5"/>
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
    a {
        color: $DARKYELLOW;
    }
    
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