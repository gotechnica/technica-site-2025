<template>
  <div class="home">

    <b-card class="mx-2 mb-5 instructions">
      <!-- <a href="https://platform.gotechnica.org/login">Get a platform login link emailed to you here.</a>
      <br>
      Copy the 6 character code and enter it below. -->
      <p>Please enter the password to access the scanner app:</p>
      <p>Status: {{status}}</p>
    </b-card>
    
    <b-container class="px-5">
      <b-form-input class="code-login" v-model="loginCode" type="password" placeholder="Password"></b-form-input>
      <b-button class="w-100 btn-login" @click="getToken">Login</b-button>
    </b-container>

  </div>
</template>

<script>
import general from '../mixins/general'
import '~/assets/styles/checkin.css'

export default {
  mixins: [general],
  name: "Login",
  data() {
    return {
      loginCode: null,
      status: "Please enter a password"
    }
  },
  methods: {
    async getToken() {
      const token = await this.performPostRequest(`tracking/login`, { password: this.loginCode });
      if (token == "Enter") {
        this.$cookie.set('token', token)
        this.$router.push({ path: "/" });
      } else {
        this.status = "Wrong password!"
      }
    },
  }
};

definePageMeta({
  layout: 'checkin'
})
</script>
<style src="~/assets/styles/checkin.css"></style>
<style scoped>

.btn-login {
  border-top-right-radius: 0px !important;
  border-top-left-radius: 0px !important;
}

.code-login {
  border-bottom-right-radius: 0px !important;
  border-bottom-left-radius: 0px !important;
}

</style>