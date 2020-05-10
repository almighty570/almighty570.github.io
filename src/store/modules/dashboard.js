import { http } from "@/helpers/http";
import Vue from 'vue'

export default {
    namespaced: true,
    state: {
        dashboardData: null,        
    },


    mutations: {
        setDashboardData(state, dashboardData) {
            Vue.set(state, 'dashboardData', dashboardData);
        },       
    },
    actions: {
        
    }
}