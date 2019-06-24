import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "jquery/dist/jquery";
import "bootstrap";
import "bootstrap/js/dist/modal";
import "bootstrap/js/dist/tooltip";

import "bootstrap/dist/css/bootstrap.css";

window.$ = window.jQuery = global.$ = require('jquery')

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
