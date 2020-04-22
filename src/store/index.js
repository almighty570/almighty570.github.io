import Vue from 'vue'
import Vuex from 'vuex'
import SellerModule from '@/store/modules/seller';
import OnboardModule from '@/store/modules/onboard';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    seller: SellerModule,
    onboard:OnboardModule,
  }
})
