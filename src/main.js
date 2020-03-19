import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// styles
import "./styles/main.scss";

// layouts
import Seller from "./layouts/Seller.vue";
Vue.component('seller-layout', Seller);
import Auth from "./layouts/Auth.vue";
Vue.component('auth-layout', Auth);

Vue.config.productionTip = false

// vee validate
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
import {applyValidators} from './helpers/validators';
applyValidators();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
