import { http } from "@/helpers/http";
import Vue from 'vue'

export default {
    namespaced: true,
    state: {
        details: null,
        options: null,
        product: null,
        shipping: null
    },

    getters: {
        details(state) {
            return state.details;
        },
        options(state) {
            return state.options;
        },
        product(state) {
            return state.product;
        },
        shipping(state) {
            return state.shipping;
        },
    },

    mutations: {

        setDetails(state, details) {
            Vue.set(state, 'details', details);
        },

        setOptions(state, options) {
            Vue.set(state, 'options', options);            
        },

        setProduct(state, product) {
            Vue.set(state, 'product', product);
        },

        setShipping(state, shipping) {
            Vue.set(state, 'shipping', shipping);
        },

    },
    actions: {
        storeDetails({ state, commit, rootState },payload) {                       
            commit('setDetails',payload.details);
            payload.callback();                               
        },
        storeProduct({state,commit, rootState},payload){
            commit('setProduct',payload.product);
            payload.callback();
        },
        storeShipping({state,commit, rootState},payload){
            commit('setShipping',payload.shipping);
            payload.callback();
        }
    }
}