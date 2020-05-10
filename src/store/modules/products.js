import { http } from "@/helpers/http";
import Vue from 'vue'

export default {
    namespaced: true,
    state: {
    products: null,        
    },

    getters: {
        products(state) {
            return state.products;
        }
    },

    mutations: {


        setProducts(state, products) {
            Vue.set(state, 'products', products);

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