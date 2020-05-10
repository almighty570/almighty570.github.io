import { http } from "@/helpers/http";
import Vue from "vue";

export default {
  namespaced: true,
  state: {
    orders: [],
    order: null,
  },

  getters: {
    orders(state) {
      return state.orders;
    },

    order(state) {
      return state.order;
    },
  },

  mutations: {
    addOrders(state, order) {
      state.orders.push(order);
    },
    setOrders(state, orders) {
      Vue.set(state, "orders", orders);
    },
    setOrder(state, order) {
      Vue.set(state, "order", order);
    },
  },
  actions: {
    fetchOrders({ state, commit, rootState }) {},

    fetchOrderDetail({ state, commit, rootState }, payload) {
      let orders = state.orders;
      let index = orders.findIndex((item) => item.id == payload.id);
      let order = orders.splice(index, 1);
      commit("setOrder", order);
    },

    createOrder({ state, commit, rootState }, payload) {
      commit("addOrders", payload.order);
    },

    updateOrder({ state, commit, rootState }, payload) {
      let orders = state.orders;
      let index = orders.findIndex((item) => item.id == payload.id);
      orders[index] = payload.order;
      commit("setOrders", orders);
    },

    deleteOrder({ state, commit, rootState }, payload) {
      let orders = state.orders;
      let index = orders.findIndex((item) => item.id == payload.id);
      orders.splice(index, 1);
      commit("setOrders", orders);
    },
  },
};
