// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/' : '/',
  },
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
      calendarID: 'c_37b7d271a1cb2de0b6a1e7e6db8d0573d7b6746786af5ec6d6c595b2da1651c9@group.calendar.google.com',
      googleApiKey: 'AIzaSyC5M08gJ1g5zur4te02Jf8ExM8-zO5EfT4',
    },
  },
});
