import Vue from 'vue'
import Vuex from 'vuex'
import SellerModule from '@/store/modules/seller';
import OnboardModule from '@/store/modules/onboard';
import UserModule from '@/store/modules/user';
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
    onboard: OnboardModule,
    user: UserModule,
  },
  plugins: [vuexLocal.plugin]
})


