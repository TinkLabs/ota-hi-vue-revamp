import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

Vue.use(Vuex);

const state = {
  example: null
};
export function createStore (context) {
  return new Vuex.Store({
    state,
    actions,
    mutations,
    getters
  })
}