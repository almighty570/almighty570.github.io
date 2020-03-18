import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueFormulate from '@braid/vue-formulate'

// styles
import "./styles/main.scss";

// import layouts
import Seller from "./layouts/Seller.vue";
Vue.component('seller-layout', Seller);

import Auth from "./layouts/Auth.vue";
Vue.component('auth-layout',Auth);

Vue.config.productionTip = false
Vue.use(VueFormulate)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
