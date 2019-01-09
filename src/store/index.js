import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  example: null,
  global: {
    lang: 'English',
    currency: 'GBP',
  },
  user: {
    isLoggin: false,
  },
}
export default function createStore(context) {
  let tmpContext = { ...context }

  if (!context) {
    // eslint-disable-next-line no-underscore-dangle
    tmpContext = window.__INITIAL_STATE__
  }
  state.isMobile = tmpContext.isMobile
  return new Vuex.Store({
    state,
    actions,
    mutations,
    getters,
  })
}
