/* Import dependencies */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

/* Mutations, actions and getters */
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

/* Modules */
// Import modules here

export default new Vuex.Store({
  state: {
    appReady: false,
    loading: true,
    unlockedView: null
  },
  actions,
  mutations,
  getters,
  modules: {
    // Register modules here
  }
});
