<template>
  <div id="navbar">
    <nav class="navbar navbar-dark navbar-expand-xl">
      <div class="container-fluid">
        <div class="navbar-left">

          <a class="navbar-brand" href="/">
            <img id="logo-img" src="../static/logo.png" />
          </a>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#my-navbar">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>

        <div class="collapse navbar-collapse" id="my-navbar">
          <ul class="navbar-nav mr-auto">
            <!-- KEY GOES HERE -->
            <template v-for="link in links" :key="link.name">
              <!-- Dropdown -->
              <li class="nav-item dropdown" v-if="link.dropdown">
                <div variant="none" min-width="100px" :text="link.name" size="sm">
                  <div type="button" @click="toggleDropdown(link)" style="display: flex; padding: 0.2rem">
                    {{ link.name }}
                    <div class="dropdown-arrow"></div>
                  </div>
                  <div v-if="link.showDropdown" class="dropdown-options">
                    <div class="dropdown-item" @click="toggleDropdown(link)" v-for="item in link.items" :key="item.name">
                      <NuxtLink :to="item.path" class="dropdown-link-active">
                        {{ item.name }}
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </li>

              <!-- External links -->
              <li v-else-if="link.name === 'Data Rights' || link.name === 'Devpost' || link.name === 'Incident Report Form'">
                <div class="nav-item" @click="closeDropdown(links[links.length-1])" style="margin: 0; padding: 0.2rem">
                  <NuxtLink :to="link.path" target="_blank" class="nuxt-link-active">
                    {{ link.name }}
                  </NuxtLink>
                </div>
              </li>

              <!-- Regular links -->
              <li v-else>
                <div class="nav-item" @click="closeDropdown(links[links.length-1])" style="margin: 0; padding: 0.2rem">
                  <NuxtLink :to="link.path" class="nuxt-link-active">
                    {{ link.name }}
                  </NuxtLink>
                </div>
              </li>
            </template>
          </ul>
        </div>

        <a id="mlh-trust-badge" href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=white" target="_blank">
          <img src="https://s3.amazonaws.com/logged-assets/trust-badge/2026/mlh-trust-badge-2026-white.svg" alt="Major League Hacking 2026 Hackathon Season" style="width:100%">
        </a>

        <!-- using this as reference to add into the navbar... -->
        <!-- <a id="mlh-trust-badge" style="display:block;max-width:5vw;min-width:60px;position:fixed;right:5vw;top:0;width:10%;z-index:10000" href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=white" target="_blank">
          <img src="https://s3.amazonaws.com/logged-assets/trust-badge/2026/mlh-trust-badge-2026-white.svg" alt="Major League Hacking 2026 Hackathon Season" style="width:100%">
        </a> -->
      </div>

    </nav>

    <!-- MLH LOGO OVERLAY -->
    <!-- <a id="mlh-trust-badge" style="display:block;max-width:5vw;min-width:60px;position:fixed;right:1vw;top:0;width:10%;z-index:10000" href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=white" target="_blank"> -->
      <!-- <img src="https://s3.amazonaws.com/logged-assets/trust-badge/2026/mlh-trust-badge-2026-white.svg" alt="Major League Hacking 2026 Hackathon Season" style="width:100%">
    </a> --> 
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { dropdown: false, name: 'Home', path: '/'},
        // { dropdown: false, name: 'Slack', path: 'https://join.slack.com/t/technica2025/shared_invite/zt-3ilafj6id-Bx0WY_K_in2UfaARK1H12Q'},
        { dropdown: false, name: 'Devpost', path: 'https://technica-2025.devpost.com/'},
        { dropdown: false, name: 'Maps', path: './maps'},
        { dropdown: false, name: 'Schedule', path: './schedule'},
        { dropdown: false, name: 'Gather', path: './gather'},
        { dropdown: false, name: 'Expo', path: './expo'},
        { dropdown: false, name: 'Incident Report Form', path:'https://forms.gle/HJ5s6KqxkokE5efJA'},
        { dropdown: false, name: 'Data Rights', path:'https://docs.google.com/forms/d/e/1FAIpQLSd66NhgTJHy4UOim73TOx76U1xU7A15thwVvgpwUqmgXYqT8w/viewform'},
        // { dropdown: false, name: 'Register', path: './register'},
        // { dropdown: false, name: 'Donate', path: 'http://www.paypal.com/donate/?hosted_button_id=83S778CAUXCLS'},
        // { dropdown: false, name: 'Travel', path: '/travel' },
        // { dropdown: false, name: 'Tracks', path: '/tracks' },
        { dropdown: false, name: 'Meet the Team', path:'/meet-the-team'},
        // { dropdown: false, name: 'Sponsors', path: '/sponsor'},
        // { dropdown: false, name: 'Annual Report', path: '/report'},
        // {
        //   dropdown: true,
        //   name: 'Programs',
        //   showDropdown: false,
        //   items: [
        //     { name: 'Fellows', path: '/fellows' },
        //     { name: 'Ambassadors', path: '/ambassadors' },
        //     { name: 'Mentors & Volunteers', path: '/mentors-volunteers' }
        //   ]
        // },

        // { dropdown: false, name: 'Check In', path:'/checkin'},
]

    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll)
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY
    },
    toggleDropdown(link) {
      if (link.showDropdown) {
        document.getElementById('my-navbar').classList.remove('show')
      }
      link.showDropdown = !link.showDropdown
    },
    closeDropdown(link) {
      link.showDropdown = false
      document.getElementById('my-navbar').classList.remove('show')
    }
  }
}
</script>

<style scoped lang="scss">
// .navbar-brand { position: absolute; left: 1rem; top: 1rem; }
.navbar-brand { display: block;} //flexbox should do the job?? 
.mlh-logo { max-width: 100px; min-width: 50px; width: 10%; display: block; position: absolute; right: 1.5rem; padding: 0; top: 0; z-index: 2010; }
#navbar { position: sticky; top: 0; overflow: visible; display: block; flex-wrap: wrap; justify-content: flex-start; padding: 0.25rem 1rem; -webkit-box-shadow: 0px 5px 6px -1px rgba(0, 0, 0, 0.1); box-shadow: 0px 5px 6px -1px rgba(0, 0, 0, 0.1); background-color: #130F1F; z-index: 2004; }
// .navbar { min-height: 84px; }
.navbar { min-height: 70px; margin-bottom: -3.5%; margin-top: -10px; display: flex; align-items: center; justify-content: space-between; } //turning navbar into a flex boxxx

.navbar .container-fluid { display: flex; align-items: flex-start; flex-wrap: nowrap; justify-content: space-between; padding: 0 0.5rem !important; }
.navbar-left { display: flex; align-items: center; gap: 0.5rem; padding-top: 1.5%; } //second flex for the logo and hamburger to stay together

.dropdown-options { position: absolute; background-color: #130F1F; line-height: 2rem; padding: 5%; }
// .navbar-toggler { margin: 0 auto 0 0; border: none; top: 1.65rem; }
.navbar-toggler { margin: 0; border: none; }
.navbar-collapse { flex: 1;  text-align: center; margin-bottom: 4%; padding-top: 1.5%;}

.navbar-nav { margin: auto; list-style-type: none; }
.navbar-nav li { margin: 0 0.3rem; padding: 1rem; }
.show .navbar-nav li { margin: 0; padding: 0; }
.navbar-nav .nuxt-link-active { font-family: "Poppins"; font-size: 1rem; color: white; text-decoration: none;}
.navbar-nav a:hover { opacity: 0.7; }
.dropdown { color: white; }
.customDropdown { font-family: "Poppins"; color: white; text-decoration: none; font-size: 1rem; }

#mlh-trust-badge { display: block; width: 80px; flex-shrink: 0; align-self: flex-start; margin-top: 0; padding-top: 0; position: relative; z-index: 2005;} //general rule, will do more custom rules for this inside the different media views 

@media (max-width: 1199px) {
  // .navbar-toggler { left: 75px; }  -> flex should handle positioning now
  .navbar-nav { margin-top: 5rem; padding: 0; }
  .navbar-nav li { margin: 0rem; padding: 0rem; }
  .nav-item { padding: 0.6rem 0 !important; text-align: center; }
  .dropdown { margin: auto !important; padding-left: 0.6rem !important; }
  #mlh-trust-badge { width: 70px; }
}

@media (max-width: 576px) { 
  .customDropdown { font-size: .7rem; } 
  #mlh-trust-badge { width: 60px; }
}

.dropdown-container { display: flex; max-height: 20px; }
.dropdown-item a.dropdown-link-active { text-decoration: none; color: white; }
.dropdown-item:hover { color: white; opacity: 0.7; background-color: transparent !important; }
li .dropdown-item { display: flex; font-size: 1rem; padding-left: 0.5rem; padding-right: 0.5rem; padding-top: 0.5rem; font-weight: bold; }
li { font-weight: bold; }
.dropdown-arrow { float: right; width: 0; height: 0; border-left: 5px solid transparent; border-right: 5px solid transparent; border-top: 5px solid white; margin: 10px; }
</style>
