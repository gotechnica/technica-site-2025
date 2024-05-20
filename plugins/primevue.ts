import { defineNuxtPlugin } from "#app";
import PrimeVue from "primevue/config";
import AutoComplete from "primevue/autocomplete";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, { ripple: true });
    nuxtApp.vueApp.component("AutoComplete", AutoComplete);
});
