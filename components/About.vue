<template>
    <div class="wrapper">
        <Header>About Technica</Header>
        <div class="row">
            <div class="col-md-6 padding">
                <p>Technica is the world's largest hackathon for underrepresented genders in tech. The hackathon is hosted annually at the University of Maryland, and is a weekend jam-packed with swag, workshops, networking, and awesome projects!</p>
                <p>Last year we had over 800+ hackers participate (both in-person and online), compromised of underrepresented groups from many different backgrounds. We had 121 awesome projects submitted, many of which that tackle real-world issues with unique solutions!</p>
            </div>
            <div class="col-md-6">
                <div class="video-container">
                    <img src="/video-container.svg">
                </div>
            </div>
        </div>
    </div>
</template>
<script setup="ts">
</script>
<style scoped lang="scss">

.video-container img {
    width: 100%;
}
.col-md-6 {
    margin-top: 3%;
}

.padding {
    padding: 5%;
}
p {
    color: $DARKWHITE;
}

</style>