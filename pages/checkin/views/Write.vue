<template>
  <div class="home">
    <b-card class="mx-2 mb-5 instructions">
      <p v-if="!checkedIn">Checking in... <br /></p>
      <h4>Status: {{ status }}</h4>
    </b-card>

    <p v-if="readyToCheckin && error">{{ error }}</p>

    <b-container>
      <b-row class="mt-3">
        <b-col xs="6" class="p-0 mx-2">
          <b-button @click="goToScan" v-if="status === 'Check In Complete!'"
            ><h3>Scan next hacker</h3></b-button
          >
          <b-button
            @click="goToScan"
            v-if="status === 'This user has already checked in'"
            ><h3>Scan next hacker</h3></b-button
          >
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import general from "../mixins/general";
import '~/assets/styles/checkin.css';

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

<style scoped></style>
