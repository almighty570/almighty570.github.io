import { http } from "@/helpers/http";
import Vue from 'vue'

export default {
    namespaced: true,
    state: {
        details: null,
        options: null,
        product: null,
        shippingMethod: null
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
        shippingMethod(state) {
            return state.shippingMethod;
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

        setshippingMethod(state, shippingMethod) {
            Vue.set(state, 'shippingMethod', shippingMethod);
        }
    },
    actions: {
        storeDetails({ state, commit, rootState }, payload) {
            commit('setDetails', payload.details);
            if (payload.callback) payload.callback();
        },
        storeOptions({ state, commit, rootState }, payload) {
            commit('setOptions', payload.options);
            if (payload.callback) payload.callback();
        },
        storeProduct({ state, commit, rootState }, payload) {
            commit('setProduct', payload.product);
            if (payload.callback) payload.callback();
        },
        storeshippingMethod({ state, commit, rootState }, payload) {
            commit('setshippingMethod', payload.shippingMethod);
            if (payload.callback) payload.callback();
        }
    }
}