import { http } from "@/helpers/http";

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
            state.products = products;
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
        }
    }
}