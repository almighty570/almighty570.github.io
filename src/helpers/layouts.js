import Vue from 'vue'
import Seller from "@/layouts/Seller.vue";
import Auth from "@/layouts/Auth.vue";
import Onboard from "@/layouts/Onboard.vue";

export const registerLayouts = function () {
    Vue.component('seller-layout', Seller);
    Vue.component('auth-layout', Auth);
    Vue.component('onboard-layout', Onboard);
}
