import * as types from '../mutation-types';

// initial state
// shape: [{ id, quantity }]
const states = {
  added: [],
  checkoutStatus: null,
};

// getters
const getters = {
  checkoutStatus: state => state.checkoutStatus,
};

// actions
const actions = {
  checkout({
    commit,
  }, data) {
    setTimeout(() => {
      commit(types.CHECKOUT_REQUEST);
      console.log(data);
    }, 3000);
  },
};

// mutations
const mutations = {
  [types.CHECKOUT_REQUEST](state) {
    // clear cart
    const nowState = state;
    nowState.added = [];
    nowState.checkoutStatus = null;
  },
};

export default {
  state: states,
  getters,
  actions,
  mutations,
};
