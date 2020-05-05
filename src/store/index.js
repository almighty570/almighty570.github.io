import Vue from 'vue'
import Vuex from 'vuex'
import SellerModule from '@/store/modules/seller';
import OnboardModule from '@/store/modules/onboard';
import VuexPersistence from 'vuex-persist'


Vue.use(Vuex)

const vuexLocal = new VuexPersistence({ storage: window.localStorage })

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
  },
  plugins:[vuexLocal.plugin]
})


