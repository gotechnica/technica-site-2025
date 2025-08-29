<template>
  <div class="home">

    <div class="mx-2 mb-5 instructions">
      <p>
        These are the hacker's details. Make sure they're correct.
        <br>
        Make sure to ask the hacker for the following:
      </p>
      <ul>
        <li>Photo ID</li>
        <li>Minor Waiver (if minor)</li>
        <li>Confirm Dietary Restricitons/Allergies</li>
        <li>Confirm Accomodations (keep track)</li>
      </ul>
    </div>
    <h2 class = "status">{{status}}</h2>
    <div v-if="dataLoaded" class="px-2">

      <div no-body class="mx-2">
        <table striped hover :items="getHackerDetails"></table>
      </div>

      <!-- BACK/FORWARD BUTTONS -->
      <div class = "buttons">
        <div class="mt-3 mb-5 row">
          <div xs="6" class="p-0 mx-2 col">
            <button class="w-100 btn" @click="goToScan">Re-scan QR code</button>
          </div>
          <div xs="6" class="p-0 mx-2 col">
            <button class="w-100" @click="goToWrite">Hacker info is OK!</button>
          </div>
        </div>
      </div>

    </div>
    <div v-else>
      <button class="btn" @click="goToScan">Re-scan QR code</button>
    </div>
  </div>
</template>

<script>
import general from './checkin/mixins/general'
import { useRoute } from 'vue-router';
import '~/assets/styles/checkin.css';

definePageMeta({
  middleware: 'checkin',
  layout: 'checkin'
})

export default {
  mixins: [general],
  name: "ViewHacker",
  props: {
    email: {
      type: String,
    },
    firstName: {
      type: String,
    },
  },
  data() {
    return {
      dataLoaded: false,
      items: null,
      status: 'Looking up user...'
    }
  },
  created() {
    this.$watch(
      () => this.$route.params,
    async () => {
      console.log(this.email, this.firstName)
    const user = this.user = await this.performPostRequest("tracking/getreg", {
      email: this.email,
      firstName: this.firstName
    })

    if (this.user.Item == null) {
      this.status = 'User not found'
      this.dataLoaded = false
    } else {
      this.status = 'Verify hacker info'
      this.items = [
        { field: 'Name', value: user.Item.firstName + ' ' + user.Item.lastName },
        { field: 'Track', value: user.Item.track },
        { field: 'Email', value: user.Item.email },
        { field: 'School', value: user.Item.school },
        { field: 'Minor', value: (user.Item.age >= 18 ? 'No' : 'Yes') },
        { field: 'Diet', value: user.Item.dietaryRestrictions },
        { field: 'Food Allergies', value: (user.Item.foodAllergies) + (user.Item.foodAllergiesText ? ', ' + user.Item.foodAllergiesText : '') },
        { field: 'Accomodations', value: user.Item.accommodations } ];
      this.dataLoaded = true;
    }
  },
    { immediate: true }
    )
  },
  computed: {
    getHackerDetails() {
      return this.items;
    }
  },
  methods: {
    async lookupUser() {
      try {
        this.readyToCheckin = true;
        // get user using email (primary key)
        this.user = await this.performPostRequest("tracking/getreg", {
          email: this.email,
          firstName: this.firstName
        })
      } catch (error) {
        this.status = 'User not found'
        console.log(error)
      }
    },
    goToScan() {
      this.dataLoaded = false;
      this.items = null;
      this.status = 'Ready to look up user'
      this.$router.push({ path: "/" });
    },
    goToWrite() {
      this.dataLoaded = false;
      this.items = null;
      this.status = 'Ready to look up user'
      this.$router.push({ path: "write", query: { email: this.email, firstName: this.firstName} });
    },
  }
};
</script>

<style src="~/assets/styles/checkin.css"></style>

<style scoped>

.instructions{
  border: solid 2px white;
  padding: 2rem;
  border-radius: 10px;
  background-color: #1a1b27;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.4), 0 0 40px rgba(150, 120, 255, 0.3), 0 0 60px rgba(100, 120, 255, 0.2);
}

.instructions *{
  margin-bottom: 10px;
  color: white;
}

.status{
  color: white;
  margin-bottom: 2rem;
}

</style>
