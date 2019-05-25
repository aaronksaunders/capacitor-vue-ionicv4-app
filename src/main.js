import Vue from "vue";
import Ionic from "@ionic/vue";

import VeeValidate from "vee-validate";

import App from "./App.vue";
import router from "./router";

import { defineCustomElements } from '@ionic/pwa-elements/loader';


Vue.config.productionTip = false;

Vue.use(Ionic);
Vue.use(VeeValidate);
// check if there is actually a user that has been
// saved by previous instance of Firebase...
  new Vue({
    router,
    render: h => h(App)
  }).$mount("#app");

  defineCustomElements(window);
