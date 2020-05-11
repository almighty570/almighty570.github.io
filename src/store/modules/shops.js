import { http } from "@/helpers/http";
import Vue from "vue";

export default {
  namespaced: true,
  state: {
    shops: [],
    shop: null,
  },

  getters: {
    shops(state) {
      return state.shops;
    },

    shop(state) {
      return state.shop;
    },
  },

  mutations: {
    addShops(state, shop) {
      state.shops.push(shop);
    },
    setShops(state, shops) {
      Vue.set(state, "shops", shops);
    },
    setShop(state, shop) {
      Vue.set(state, "shop", shop);
    },
  },
  actions: {
    fetchShops({ state, commit, rootState }) { },

    fetchShopDetail({ state, commit, rootState }, payload) {
      let shops = state.shops;
      let index = shops.findIndex((item) => item.id == payload.id);
      let shop = shops[index];
      commit("setShop", shop);
      payload.callback(state.shop);
    },

    createShop({ state, commit, rootState }, payload) {
      commit("addShops", payload.shop);
      if (payload.callback) payload.callback();
      console.log(state.shops);
    },

    updateShop({ state, commit, rootState }, payload) {
      let shops = state.shops;
      let index = shops.findIndex((item) => item.id == payload.id);
      shops[index] = payload.shop;
      commit("setShops", shops);
      if (payload.callback) payload.callback();
    },

    deleteShop({ state, commit, rootState }, payload) {
      let shops = state.shops;
      let index = shops.findIndex((item) => item.id == payload.id);
      shops.splice(index, 1);
      commit("setShops", shops);
      if (payload.callback) payload.callback();
    },
  },
};
