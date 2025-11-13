<template>
  <div class="home">
    <div class="mx-2 mb-5 instructions">
      <p>
        Ask the hacker to look for a "Check-In Steps" email from
        <strong>tech@gotechnica.org</strong>.
        <br />
        <br />
        The hacker might need to turn their phone's brightness up all the way
        for you to scan their code.
      </p>
    </div>

    <div v-if="hideScanner" class="viewfinder-wrapper">
      <div class = "buttons">
        <button @click="hideScanner = false" class = "btn">Scan QR Code</button>
        <button @click="goToManualSearch" class = "btn manual">Manual Search</button>
      </div>
    </div>
    <div v-else class="viewfinder-wrapper">
      <div class="viewfinder">
        <qrcode-stream :key="qkey" @decode="onDecode" @init = "onInit"/>
      </div>
    </div>
  </div>
</template>

<script>
import { QrcodeStream } from "vue3-qrcode-reader";
import '~/assets/styles/checkin.css';

definePageMeta({
  middleware: 'checkin',
  layout: 'checkinlayout'
})

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
      this.$router.push({ path: "viewHacker", query: {email: decodedInfo[0], firstName: decodedInfo[1]} });
      console.log(decodedInfo);
    },
    onInit(prom){
      prom.then(() => {
        console.log("camera perms granted")
      })
      .catch(error => {
        console.log("camera failed:", error)
      })
    },
    goToManualSearch(){
      this.$router.push({ 
        path: "Search"
      });
  }
  },
  
};

</script>

<style src="~/assets/styles/checkin.css"></style>

<style scoped>

/* .home{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
} */

@media only screen and (max-width: 600px){
  *{
    font-size: .95rem;
  }
}

.buttons{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.instructions{
  border: solid 2px white;
  padding: 2rem;
  border-radius: 10px;
  background-color: #1a1b27;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.4), 0 0 40px rgba(150, 120, 255, 0.3), 0 0 60px rgba(100, 120, 255, 0.2);
}


.manual{
  background-color: #EFE4DC;
  margin-left: 1rem;
}

</style>
