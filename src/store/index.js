import Vue from 'vue'
import Vuex from 'vuex'
import DashboardModule from '@/store/modules/dashboard';
import OnboardModule from '@/store/modules/onboard';
import ProductsModule from '@/store/modules/products';
import OrdersModule from '@/store/modules/orders';
import SalesAgentModule from '@/store/modules/salesAgent';
import PaymentModule from '@/store/modules/payment';
import ShopsModule from '@/store/modules/shops';
import SettingsModule from '@/store/modules/settings';
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
    dashboard: DashboardModule,
    products: ProductsModule,
    orders: OrdersModule,
    onboard: OnboardModule,
    user: UserModule,
    salesAgent: SalesAgentModule,
    payment: PaymentModule,
    settings: SettingsModule,
    shops: ShopsModule
  },
  plugins: [vuexLocal.plugin]
})


