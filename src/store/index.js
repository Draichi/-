import Vue from 'vue'
import Vuex from 'vuex'
import 'es6-promise/auto'
import state from './state'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  getters,
  mutations,
  state
})

export default store

