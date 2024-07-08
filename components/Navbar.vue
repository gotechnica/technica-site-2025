<template>
  <div id="navbar">
    <nav class="navbar navbar-dark navbar-expand-xl">
      <div class="container">
        <a class="navbar-brand" href="/">
          <img id="logo-img" src="../static/logo.png" />
        </a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#my-navbar">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="my-navbar">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item" @click="closeDropdown">
              <NuxtLink to="/" class="nuxt-link-active">Home</NuxtLink>
            </li>
            <li class="nav-item" @click="closeDropdown">
              <NuxtLink to="/Fellows" class="nuxt-link-active">Fellows</NuxtLink>
            </li>
            <li class="nav-item" @click="closeDropdown">
              <NuxtLink to="/Ambassadors" class="nuxt-link-active">Ambassadors</NuxtLink>
            </li>
            <li class="nav-item" @click="closeDropdown">
              <NuxtLink to="/Mentors-Volunteers" class="nuxt-link-active">Mentors and Volunteers</NuxtLink>
            </li>
            <li class="nav-item" @click="closeDropdown">
              <NuxtLink to="/Travel" class="nuxt-link-active">Travel</NuxtLink>
            </li>
            <li class="nav-item" @click="closeDropdown">
              <NuxtLink to="/Tracks" class="nuxt-link-active">Tracks</NuxtLink>
            </li>
            <li class="nav-item" @click="closeDropdown">
              <NuxtLink to="https://docs.google.com/forms/d/e/1FAIpQLSeo-xzpgBPHDoMd4kbz3V7b0Pi-XnIICiDPNMbURt5NSvHJPA/viewform" target="_blank" class="nuxt-link-active">Data Rights</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- MLH LOGO OVERLAY -->
    <a class="mlh-logo" href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2024-season&utm_content=white" target="_blank">
      <img src="https://s3.amazonaws.com/logged-assets/trust-badge/2025/mlh-trust-badge-2025-white.svg" alt="Major League Hacking 2024 Hackathon Season" style="width:100%">
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { dropdown: false, name: 'Home', path: '/' },
        { dropdown: false, name: 'Register', path: '/Register' },
        { dropdown: false, name: 'Expo', path: '/Expo' },
        { dropdown: false, name: 'Schedule', path: '/Schedule' },
        { dropdown: false, name: 'Maps', path: '/Maps' },
        { dropdown: false, name: 'Devpost', path: 'https://technica-2024.devpost.com/' },
        { dropdown: false, name: 'Data Rights', path: 'https://docs.google.com/forms/d/e/1FAIpQLSeo-xzpgBPHDoMd4kbz3V7b0Pi-XnIICiDPNMbURt5NSvHJPA/viewform' },
        {
          dropdown: true, showDropdown: false, name: 'Programs',
          items: [
            { name: 'Fellows', path: '/Fellows' },
            { name: 'Ambassadors', path: '/Ambassadors' },
            { name: 'Mentors and Volunteers', path: '/Mentors-Volunteers' },
            { name: 'Travel', path: '/Travel' },
            { name: 'Tracks', path: '/Tracks' }
          ]
        },
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
        document.getElementById("my-navbar").classList.remove('show')
      }

      link.showDropdown = !link.showDropdown
    },

    closeDropdown(link) {
      link.showDropdown = false;
      document.getElementById("my-navbar").classList.remove('show')
    }
  }
}
</script>

<style scoped lang="scss">
.navbar-brand {
  position: absolute;
  left: 1rem;
  top: 1rem;
}

.mlh-logo {
  max-width: 100px;
  min-width: 50px;
  width: 10%;
  display: block;
  position: absolute;
  right: 1.5rem;
  padding: 0;
  top: 0;
  z-index: 2010;
}

#navbar {
  position: sticky;
  top: 0;
  display: block;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 0.25rem 1rem;
  -webkit-box-shadow: 0px 5px 6px -1px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 5px 6px -1px rgba(0, 0, 0, 0.1);
  background-color: #130F1F;
  z-index: 2004;
}

.navbar {
  min-height: 84px;
}

.dropdown-options {
  position: absolute;
  background-color: #130F1F;
  line-height: 2rem;
  padding: 5%;
}


.navbar-toggler {
  margin: 0 auto 0 0;
  border: none;
  top: 1.65rem;
}

.navbar-nav {
  margin: auto;
  list-style-type: none;
}


.navbar-nav li {
  margin: 0 0.3rem;
  padding: 1rem;
}

.show .navbar-nav li {
  margin: 0;
  padding: 0;
}

.navbar-nav .nuxt-link-active {
  font-family: "Poppins";
  font-size: 1rem;
  color: white;
  text-decoration: none;

}

.navbar-nav a:hover {
  opacity: 0.7;
}

.dropdown {
  color: white;
}

/* DROPDOWN STYLING */
/* this class only works when style is not scoped */
.customDropdown {
  font-family: "Poppins";
  color: white;
  text-decoration: none;
  font-size: 1rem;
}

@media (max-width: 1199px) {
  .navbar-toggler {
    position: absolute;
    left: 75px;
  }

  .navbar-nav {
    margin-top: 5rem;
    padding: 0;
  }

  .navbar-nav li {
    margin: 0rem;
    padding: 0rem;
  }

  .nav-item {
    padding: 0.6rem 0 !important;
    text-align: center;
  }

  .dropdown {
    margin: auto !important;
    padding-left: 0.6rem !important;
  }
}

@media (max-width: 576px) {
  .customDropdown {
    font-size: .7rem;
  }
}

.dropdown-container {
  display: flex;
  max-height: 20px;
}

.dropdown-item a.dropdown-link-active {
  text-decoration: none;
  color: white;
}

.dropdown-item:hover {
  color: white;
  opacity: 0.7;
  background-color: transparent !important;
}

li .dropdown-item {
  display: flex;
  font-size: 1rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0.5rem;
  font-weight: bold;
}

li {
  font-weight: bold;
}

.dropdown-arrow {
  float: right;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid white;
  margin: 10px;
}
</style>