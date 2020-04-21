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
// import { appplyInterceptors } from './helpers/http';
// appplyInterceptors();

Vue.config.productionTip = false

// form validator
import { applyValidators } from './helpers/validators';
applyValidators();

// Toast
import { initToastr } from './helpers/toastr';

import i18n from './i18n'
initToastr();

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
