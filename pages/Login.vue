<template>
  <div class="home">

    <div class="mx-2 mb-5 instructions">
      <!-- <a href="https://platform.gotechnica.org/login">Get a platform login link emailed to you here.</a>
      <br>
      Copy the 6 character code and enter it below. -->
      <p>Please enter the password to access the scanner app:</p>
      <p class = "subtext"><strong>Status: </strong>{{status}}</p>
    </div>
    
    <div class="form">
      <input class="code-login" v-model="loginCode" type="password" placeholder="Password"></input>
      <button class="w-100 btn" @click="getToken">Login</button>
    </div>

  </div>
</template>

<script>
import general from './checkin/mixins/general'
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
        const tok = useCookie('token', {path: '/Checkin'})
        tok.value = token;

        navigateTo('/Checkin')

        // this.$cookie.set('token', token)
        // this.$router.push({ path: "/" });
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

.instructions{
  padding-top: 4rem;
  text-align: center;
}

.subtext{
  color: #aba0df;
}

.form{
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 20rem;
  max-width: 100vw;
}

.code-login {
  /* border-bottom-right-radius: 0px !important;
  border-bottom-left-radius: 0px !important; */
  border: solid 2px #aba0df;
  padding: 6px 12px;
  border-radius: 5px;
  margin-bottom: 1rem;
  box-sizing: border-box;
}

</style>