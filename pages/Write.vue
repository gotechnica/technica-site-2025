<template>
  <div class="home">
    <div class="mx-2 mb-5 instructions">
      <p v-if="!checkedIn">Checking in... <br /></p>
      <h4>Status: {{ status }}</h4>
    </div>

    <p v-if="readyToCheckin && error">{{ error }}</p>

    <div>
      <div class="mt-3 row">
        <div xs="6" class="p-0 mx-2 col">
          <button @click="goToScan"  class = "btn" v-if="status === 'Check In Complete!'"
            >Scan next hacker</button
          >
          <button
            @click="goToScan" class = "btn"
            v-if="status === 'This user has already checked in'"
            >Scan next hacker</button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import general from "./checkin/mixins/general";
import '~/assets/styles/checkin.css';

definePageMeta({
  middleware: 'checkin',
  layout: 'checkinlayout'
})

export default {
  mixins: [general],
  name: "Write",
  props: {
    email: {
      type: String,
    },
    firstName: {
      type: String,
    }
  },
  data() {
    return {
      status: "Ready to write to DB",
      error: null,
      readyToCheckin: false,
      checkedIn: false,
    };
  },
  beforeRouteEnter(to, from, next) {
    next(async (vm) => {
      const user = (vm.user = await vm.performPostRequest("tracking/getreg", {
        email: vm.email,
        firstName: vm.firstName
      }));
      vm.tryScan();
    });
  },
  computed: {},
  methods: {
    async tryScan() {
      try {
        const res = await this.performPostRequest(
          "tracking/status",
          {
            email: this.email,
            firstName: this.firstName,
            checkInType: "In-Person"
          }
        );
        console.log(res);
        this.checkedIn = true;
        if (res == "Already Checked In") {
          this.status = "This user has already checked in";
        } else {
          this.status = "Check In Complete!";
        }
      } catch (error) {
        console.log(error);
        this.status = "Something went wrong :/";
        this.error = error;
      }
    },
    goToScan() {
      this.status = "Ready to write to DB";
      this.error = null;
      this.readyToCheckin = false;
      this.$router.push({ path: "/" });
    },
  },
};

</script>

<style src="~/assets/styles/checkin.css"></style>

<style scoped>

.instructions *{
  color: white;
}

.btn{
  font-size: 1.2rem;
}

</style>
