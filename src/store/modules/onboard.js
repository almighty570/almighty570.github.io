import { http } from "@/helpers/http";
import Vue from 'vue'

export default {
    namespaced: true,
    state: {
        details: null,
        options: null,
        product: null,
        shippingMethods: null
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
        shippingMethods(state) {
            return state.shippingMethods;
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

        setshippingMethods(state, shippingMethods) {
            Vue.set(state, 'shippingMethods', shippingMethods);
        }
    },
    actions: {
        storeDetails({ state, commit, rootState }, payload) {
            commit('setDetails', payload.details);
            if (payload.callback) payload.callback(true, null);
        },
        storeOptions({ state, commit, rootState }, payload) {
            commit('setOptions', payload.options);
            if (payload.callback) payload.callback(true, null);
        },
        storeProduct({ state, commit, rootState }, payload) {
            commit('setProduct', payload.product);
            if (payload.callback) payload.callback(true, null);
        },
        storeshippingMethods({ state, commit, rootState }, payload) {
            commit('setshippingMethods', payload.shippingMethods);
            if (payload.callback) payload.callback(true, null);
        }
    }
}