import { http } from "@/helpers/http";
import Vue from 'vue'

export default {
    namespaced: true,
    state: {
        registrationData: null
    },

    getters: {
        registrationData(state) {
            return state.registrationData;
        }
    },

    mutations: {
        setRegistrationData(state, registrationData) {
            Vue.set(state, 'registrationData', registrationData);
        }
    },
    actions: {
        storeRegistrationData({ state, commit, rootState }, payload) {
            commit('setRegistrationData', payload.data);
            if (payload.callback) payload.callback(true, null);
        }
    }
}