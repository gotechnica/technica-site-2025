// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  typescript: {
    strict: true,
    typeCheck: true,
  },
  routeRules: {
    '/google': { redirect: 'https://google.com' },
  },
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    '~/assets/styles/global.css',
    'primevue/resources/themes/lara-light-blue/theme.css',
    'primevue/resources/primevue.css',
    'vue-final-modal/style.css',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/_variables.scss" as *;',
        },
      },
    },
  },
  build: {
    transpile: ['primevue'],
  },
  modules: [
    '@nuxt/content',
    'nuxt-anchorscroll'
  ],
  plugins: ['~/plugins/useBootstrap.client.ts', '~/plugins/vue-gtag.client.ts'],
  runtimeConfig: {
    public: {
      calendarID: '',
      googleApiKey: '',
    },
  },
});
