<template>
  <div class="container">

    <div class = "elems">
      <div>
      <div class="checklist">
      <p>Confirm hacker details, ask for the following:</p>
      <ul>
        <li>Photo ID</li>
        <li>Minor Waiver (if minor)</li>
        <li>Confirm Dietary Restricitons/Allergies</li>
        <li>Confirm Accomodations (keep track)</li>
      </ul>
    </div>

    <div class="loading" v-if="!dataLoaded">
        <h2 class = "status-loading">Status: {{status}}</h2>
        <div class = "buttons">
        <button class="btn" @click="goToScan">Re-scan QR code</button>
        <button class = "btn manual" @click="goToManualSearch">Manual Search</button>
        </div>
     </div>
    </div>

    <div class = "hacker-data">
      <div v-if="dataLoaded" class="px-2 hacker-info">
        <div class="info">
          <h2 class = "status-done">{{status}}</h2>
          <table class = "data">
            <tbody>
              <tr v-for = "item in getHackerDetails">
                <td>{{item.field}}</td>
                <td v-if="priorityItems.includes(item.field)">
                  <span class = "priority">
                    <span>{{ item.value }}</span>
                    <span class="icons">
                    <i v-if="item.field === 'Name'" class="bi bi-person-badge"></i>
                    <i v-else-if="item.field === 'Minor'" class="bi bi-file-earmark-text"></i>
                    <i v-else-if="item.field === 'Diet'" class="bi bi-fork-knife"></i>
                    <i v-else-if="item.field === 'Food Allergies'" class="bi bi-exclamation-triangle-fill"></i>
                    <i v-else-if="item.field === 'Accomodations'" class="bi bi-universal-access"></i>
                    </span>
                  </span>
                </td>
                <td v-else><span class = "priority">{{item.value}}</span></td>
              </tr>
            </tbody>
          </table>
        </div>
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
    </div>

    <!-- elems -->
  </div> 

    <!-- container -->
  </div>
</template>

<script>
import general from './checkin/mixins/general'
import { useRoute } from 'vue-router';
import '~/assets/styles/checkin.css';
import 'bootstrap-icons/font/bootstrap-icons.css'

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
      this.$router.push({ path: "/checkin" });
    },
    goToWrite() {

      this.dataLoaded = false;
      this.items = null;
      this.status = 'Ready to look up user'
      console.log("Writing var check: ")

      this.$router.push({
        path: "write",
        query: { email: this.routeEmail, firstName: this.routeFirstName}
      });
    },
    goToManualSearch(){
      this.$router.push({ 
        path: "/search",
      });
    }
  }
};
</script>

<style src="~/assets/styles/checkin.css"></style>

<style scoped>

.priority{
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.container{
  width: 100vw;
  height: 100vh;
  position: relative;
  top: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  overflow-x: clip;
}

.elems{
  height: max-content;
  width: 100%;
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: row;
  align-items: start;  
  justify-content: center;  
}

.checklist{
  border: solid 2px white;
  padding: 1rem;
  border-radius: 10px;
  background-color: #EFE4DC;
  color: #1a1b27;
  height: max-content;
  margin-top: 2rem;
  box-sizing: border-box;
}

.checklist *{
  color: #1a1b27
}

.info{
  margin-top: 2rem;
  background-color: #EFE4DC;
  border: solid 2px white;
  padding: 1rem;
  border-radius: 10px;
  color: #1a1b27;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* box-shadow: 0 0 50px 10px #8E80AB80; */
}

.info *{
  color: #1a1b27;
}

.data{
  max-width: 100%;
  margin: 0;
  box-sizing: border-box;
}

.data td{
  word-break: break-word;
  white-space: normal;
}

.data *{
  padding: 5px;
}

.data tr:nth-child(odd){
  background-color: #e8d6c9;
}

.next, .manual{
  background-color: #EFE4DC;
}

.manual{
  margin-left: 1rem;
}

@media only screen and (max-width: 600px){
  *{
    font-size: .95rem;
  }

  .elems{
    padding: 1rem;
    flex-direction: column;
  }

  .info{
    width: 100%;
  }
  
  .checklist{
    width: 100%;
  }

  .hacker-data{
  width: 100%;
  position: relative;
}

.hacker-info{
  width: 100%;
  position: relative;
}
}

.status-loading{
  color: white;
  margin-bottom: 2rem;
  text-align: center;
  margin: 40px 0;
  font-size: 18px;
}

.loading{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.status-done{
  color: #1a1b27;
  font-size: 1.25rem;
  text-align: center;
  margin: 15px 5px;
  margin-top: 0;
}

</style>
