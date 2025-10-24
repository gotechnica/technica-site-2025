<template>
  <div class="home">

    <div class="instructions">
      <p>
        Confirm hacker details, ask for the following:
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

      <div no-body class="mx-2 instructions">
        <table class = "data">
          <tbody>
            <tr v-for = "item in getHackerDetails">
              <td>
                <!-- <input type = "checkbox" class = "check" v-if = "priorityItems.includes(item.field)"></input>
                <span v-else></span> -->
                <span v-if = "priorityItems.includes(item.field)">&#10132;</span>
              </td>
              <td>{{item.field}}</td>
              <td>{{item.value}}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- BACK/FORWARD BUTTONS -->
      <div class = "buttons">
        <div class="mt-3 mb-5 row">
          <div xs="6" class="p-0 mx-2 col">
            <button class="w-100 btn" @click="goToScan">Re-scan QR code</button>
          </div>
          <div xs="6" class="p-0 mx-2 col">
            <button class="w-100 btn next" @click="goToWrite">Hacker info is OK!</button>
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
  layout: 'checkinlayout'
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
      status: 'Looking up user...',
      priorityItems: ["Name", "Minor", "Diet", "Food Allergies", "Accomodations"],
      routeEmail: null,
      routeFirstName: null,
    }
  },
  created() {
    const route = useRoute();
    const email = route.query.email;
    const firstName = route.query.firstName;

    this.routeEmail = email;
    this.routeFirstName = firstName;

    this.$watch(
      () => route.query,
    async () => {
      console.log(email, firstName)
    const user = this.user = await this.performPostRequest("tracking/getreg", {
      email: email,
      firstName: firstName
    })

    if (!user || !user.Item) {
      this.status = 'User not found'
      this.dataLoaded = false
      console.log("can't find him! get the redbull")
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
        console.log(this.email)
        console.log(this.firstName)
      } catch (error) {
        this.status = 'User not found'
        console.log(error)
      }
    },
    goToScan() {
      this.dataLoaded = false;
      this.items = null;
      this.status = 'Ready to look up user'
      this.$router.push({ path: "/checkin" });
    },
    goToWrite() {

      this.dataLoaded = false;
      this.items = null;
      this.status = 'Ready to look up user'
      console.log("Writing var check: ")
      console.log(this.routeEmail);
      console.log(this.routeFirstName)

      this.$router.push({
        path: "write",
        query: { email: this.routeEmail, firstName: this.routeFirstName}
      });
    },
  }
};
</script>

<style src="~/assets/styles/checkin.css"></style>

<style scoped>

.home{
  top: 25%;
}

.instructions{
  border: solid 2px white;
  padding: 2rem;
  border-radius: 10px;
  background-color: #1a1b27;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.4), 0 0 40px rgba(150, 120, 255, 0.3), 0 0 60px rgba(100, 120, 255, 0.2);
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 60%;
  display: flex;
  align-items: center; */
}

.instructions *{
  margin-bottom: 10px;
  color: white;

}

.status{
  color: white;
  margin-bottom: 2rem;
}

.next{
  background-color: white;
}

.container{
  /* height: 80vh;
  width: 80%;
  margin: auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative; */
}

.check{
  background-color: #1a1b27;
  border: none;
  accent-color: #1a1b27;
}

.data *{
  padding: 5px;
}

/* .data td:first-child{
  margin-right: 10px;
} */

</style>
