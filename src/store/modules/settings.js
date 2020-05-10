import { http } from "@/helpers/http";
import Vue from 'vue'

export default {
    namespaced: true,
    state: {
        settings:{
            accounts:null,
            shipping:[]
        }
    },

    getters: {
        accounts(state) {
            return state.settings.accounts;
        },
        shipping(state) {
            return state.settings.shipping;
        }
    },

    mutations: {

        setAccounts(state, accounts) {
            Vue.set(state.settings, 'accounts', accounts);
        },

        setShipping(state, shipping) {
            state.shipping.push(shipping);
        },

      
    },
    actions: {
        storeAccounts({ state, commit, rootState }, payload) {
            commit('setAccounts', payload.accounts);
            
        },
        storeShipping({ state, commit, rootState }, payload) {
            commit('setShipping', payload.shipping);
            
        },
        
    }
}