import Vuex from 'vuex'
import clients from './modules/clients'
import filters from './modules/filters'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    clients,
    filters
  }
})
