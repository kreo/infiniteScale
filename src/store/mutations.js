import * as types from './mutation_types';

export default {
  [types.SET_APP_READY](state, value) {
    state.appReady = value;
  },
  [types.SET_LOADING](state, value) {
    state.loading = value;
  },
  [types.SET_UNLOCKED_VIEW](state, value) {
    state.unlockedView = value;
  }
};
