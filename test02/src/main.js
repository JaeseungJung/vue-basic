import BootstrapVue, { IconsPlugin } from "bootstrap-vue";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import ApiMixin from "./api";

// import {
//     BootstrapVue,
//     IconsPlugin

// } from "bootstrap-vue"

// Vue.use(BootstrapVue)
// Vue.use(IconsPlugin)

createApp(App).use(store).use(router).mount("#app");