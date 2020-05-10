import { http } from "@/helpers/http";
import Vue from "vue";

export default {
  namespaced: true,
  state: {
    salesAgents: [],
    salesAgent: null,
  },

  getters: {
    salesAgents(state) {
      return state.salesAgents;
    },

    salesAgent(state) {
      return state.salesAgent;
    },
  },

  mutations: {
    addSalesAgents(state, salesAgent) {
      state.salesAgents.push(salesAgent);
    },
    setSalesAgents(state, salesAgents) {
      Vue.set(state, "salesAgents", salesAgents);
    },
    setSalesAgents(state, salesAgent) {
      Vue.set(state, "salesAgent", salesAgent);
    },
  },
  actions: {
    fetchSaleAgents({ state, commit, rootState }) {},

    fetchSalesAgentDetail({ state, commit, rootState }, payload) {
      let salesAgents = state.salesAgents;
      let index = salesAgents.findIndex((item) => item.id == payload.id);
      let salesAgent = salesAgents.splice(index, 1);
      commit("setSalesAgent", salesAgent);
    },

    createSalesAgent({ state, commit, rootState }, payload) {
      commit("addSalesAgents", payload.SalesAgent);
    },

    updateSalesAgent({ state, commit, rootState }, payload) {
      let salesAgents = state.salesAgents;
      let index = salesAgents.findIndex((item) => item.id == payload.id);
      salesAgents[index] = payload.salesAgent;
      commit("setSalesAgents", salesAgents);
    },

    deleteSalesAgent({ state, commit, rootState }, payload) {
      let salesAgents = state.salesAgents;
      let index = salesAgents.findIndex((item) => item.id == payload.id);
      salesAgents.splice(index, 1);
      commit("setSalesAgents", salesAgents);
    },
  },
};
