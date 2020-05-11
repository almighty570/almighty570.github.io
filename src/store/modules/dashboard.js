import { http } from "@/helpers/http";
import Vue from 'vue'

export default {
    namespaced: true,
    state: {
        dashboardData: null,
        sideNav: true,
    },


    mutations: {
        setDashboardData(state, dashboardData) {
            Vue.set(state, 'dashboardData', dashboardData);
        },

        setSideNav(state, sideNav) {
            Vue.set(state, 'sideNav', sideNav);
        },
    },
    actions: {
        showSideNav({ state, commit, rootState }, payload) {
            commit("setSideNav", true);
        },

        hideSideNav({ state, commit, rootState }, payload) {
            commit("setSideNav", false);
        }
    }
}