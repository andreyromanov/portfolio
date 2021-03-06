import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./ml";

import BootstrapVue from "bootstrap-vue";
import VueLazyload from "vue-lazyload";

Vue.use(BootstrapVue);
Vue.use(VueLazyload);

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

import Default from "./views/layouts/default.vue";
import TopMenu from "./views/layouts/top_menu.vue";
import Demo from "./views/layouts/demo.vue";

Vue.component("default-layout", Default);
Vue.component("top_menu-layout", TopMenu);
Vue.component("demo-layout", Demo);

Vue.config.productionTip = false;
/* eslint-disable no-console */
/* eslint-disable */
new Vue({
  router,
  render: h => h(App)})
.$mount("#app");


//console.log('bordered')
//var nav = document.getElementById("nav-div");
//nav.classList.add("border");
