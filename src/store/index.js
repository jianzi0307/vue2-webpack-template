import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";

// 引入子模块
import aModule from "./modules/moduleA";
import bModule from "./modules/moduleB";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {
    ...getters,
  },
  modules: {
    aModule,
    bModule,
  },
  strict: process.env.NODE_ENV !== "production",
});
