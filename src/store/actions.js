import * as types from './mutation_types'

export default {
  setAppReady({commit}, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit(types.SET_APP_READY, payload);
        resolve();
      } catch (e) {
        console.log(e);
        reject(e);
      }
    });
  },
  setLoading({commit}, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit(types.SET_LOADING, payload);
        resolve();
      } catch (e) {
        console.log(e);
        reject(e);
      }
    });
  },
  setUnlockedView({commit}, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit(types.SET_UNLOCKED_VIEW, payload);
        resolve();
      } catch (e) {
        console.log(e);
        reject(e);
      }
    });
  }
}
