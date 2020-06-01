import Vue from 'vue';
import Vuex from 'vuex';
import pathify from '@/plugins/pathify';
import order from './Modules/order/order';

const store = {
  state: {},
  mutations: {},
  actions: {},
  modules: {
    order
  }
};

Vue.use(Vuex);
export default new Vuex.Store({
  plugins: [pathify.plugin],
  ...store
});
