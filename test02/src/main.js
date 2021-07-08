import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ApiMixin from "./api";
import store from "./store/store";

createApp(App).use(router).use(store).mixin(ApiMixin).mount("#app");

window.Kakao.init("8d23aa9d01e67a499183ec489d2ba43d");
window.Kakao.isInitialized();

import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Make BootstrapVue available throughout your project
// Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
// Vue.use(IconsPlugin);
