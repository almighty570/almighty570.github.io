import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// styles
import "./styles/main.scss";

// layouts
import { registerLayouts } from './helpers/layouts';
registerLayouts();

// axios setup
import { setup } from './helpers/http';
setup();

Vue.config.productionTip = false

// form validator
import { applyValidators } from './helpers/validators';
applyValidators();

// Toast
import { initToastr } from './helpers/toastr';
initToastr();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
