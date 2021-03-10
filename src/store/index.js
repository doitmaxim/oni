import Vue from 'vue'
import Vuex from 'vuex'
import projects from './modules/projects.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    projects
  }
})
