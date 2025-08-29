<template>
  <b-navbar toggleable="lg" type="light" variant="light" class="checkinnavbar">
    <b-navbar-brand class="m-0 p-0">
      <img src="~/assets/checkin/technica-logo.png" alt="Technica Logo" height="25" class="pl-2">
    </b-navbar-brand>
    <b class="pr-2 m-0 ml-auto"><a href="/" style="color: black">Hacker Check-In</a></b>
  </b-navbar>
</template>

<script>
export default {
  name: 'CheckInNavbar',
};
</script>

<style scoped>
.checkinnavbar {
  box-shadow: 0 4px 4px -5px rgba(0, 0, 0, 0.5);
  margin-bottom: 4vh;
}
</style>