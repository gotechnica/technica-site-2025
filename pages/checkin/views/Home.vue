<template>
  <div class="home">
    <b-card class="mx-2 mb-5 instructions"
      ><p>
        Ask the hacker to look for a "Check-In Steps" email from
        <strong>tech@gotechnica.org</strong>.
        <br />
        <br />
        The hacker might need to turn their phone's brightness up all the way
        for you to scan their code.
      </p></b-card
    >

    <div v-if="hideScanner" class="viewfinder-wrapper">
      <b-button @click="hideScanner = false">
        <h4>Scan Check-In QR Code</h4>
      </b-button>
    </div>
    <div v-else class="viewfinder-wrapper">
      <div class="viewfinder">
        <qrcode-stream :key="qkey" @decode="onDecode" />
      </div>
    </div>
  </div>
</template>

<script>
import { QrcodeStream } from "vue-qrcode-reader";
import '~/assets/styles/checkin.css';

export default {
  components: { QrcodeStream },
  name: "Register",
  props: {
    default_track: {
      type: String,
      default: "general",
    },
  },
  data() {
    return {
      hideScanner: true,
    };
  },
  methods: {
    onDecode(decodedString) {
      this.hideScanner = true;

      let decodedInfo = decodedString.split(",");
      this.$router.push({ path: "view", query: {email: decodedInfo[0], firstName: decodedInfo[1]} });
      console.log(decodedInfo);
    },
  },
};
</script>

<style src="~/assets/styles/checkin.css"></style>

<style scoped>
.viewfinder {
  /* background-color: grey; */
  width: 100%;
  height: 100%;
}

.viewfinder-wrapper {
  margin: auto;
  text-align: center;
  width: 75vw;
  height: 75vw;
}
</style>
