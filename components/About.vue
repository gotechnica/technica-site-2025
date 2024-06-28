<template>
    <div class="wrapper">
        <Header>About Technica</Header>
        <div class="row">
            <div class="col-md-6 padding">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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