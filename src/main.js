import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// styles
import "./styles/main.scss";

// import layouts
import Seller from "./layouts/Seller.vue";
Vue.component('seller-layout', Seller);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
