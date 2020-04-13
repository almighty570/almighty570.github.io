import { http } from "@/helpers/http";
import Vue from 'vue'

export default {
    namespaced: true,
    state: {
        dashboardData: null,
        products: null,
        orders: null,
        salesAgents: null,
        settings: null
    },

    getters: {
        products(state) {
            return state.products;
        }
    },

    mutations: {

        setDashboardData(state, dashboardData) {
            state.dashboardData = dashboardData;
        },

        setProducts(state, products) {
            Vue.set(state, 'products', products);
            // state.products = products;
        },

        setOrders(state, orders) {
            state.orders = orders;
        },

        setSalesAgents(state, salesAgents) {
            state.salesAgents = salesAgents;
        },

    },
    actions: {
        fetchProducts({ state, commit, rootState }) {
            http.get("/products").then(response => {
                commit('setProducts', response.data);
            })
        },

        fetchProductDetail({ state, commit, rootState }, payload) {
            http.get("/products/" + payload.id).then(response => {
                payload.callback(response.data);
            })
        },

        createProduct({ state, commit, rootState }, payload) {
            http.post("/products/", payload.product).then(response => {
                payload.callback(response.data);
            })
        },

        updateProduct({ state, commit, rootState }, payload) {
            http.put("/products/" + payload.product.id, payload.product).then(response => {
                payload.callback(response.data);
            })
        },

        deleteProduct({ state, commit, rootState }, payload) {
            http.delete("/products/" + payload.id).then(response => {
                let products = state.products;
                let index = products.findIndex(item => item.id == payload.id);
                products.splice(index, 1);
                commit('setProducts', products);
            })
        }
    }
}