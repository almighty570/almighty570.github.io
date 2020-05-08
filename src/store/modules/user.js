import { http } from "@/helpers/http";
import Vue from 'vue'

export default {
    namespaced: true,
    state: {
        registrationData: null,
        authData: null
    },

    getters: {
        registrationData(state) {
            return state.registrationData;
        },

        authData(state) {
            return state.authData;
        }
    },

    mutations: {
        setRegistrationData(state, registrationData) {
            Vue.set(state, 'registrationData', registrationData);
        },

        setAuthData(state, authData) {
            Vue.set(state, 'authData', authData);
        }
    },
    actions: {
        storeRegistrationData({ state, commit, rootState }, payload) {
            commit('setRegistrationData', payload.data);
            if (payload.callback) payload.callback(true, null);
        }
    }
}