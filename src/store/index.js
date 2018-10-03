import Vue from 'vue'
import Vuex from 'vuex'
import { SPELLBOOK } from './SPELLBOOK.js'
import { SPELLBOOKIDS } from './SPELLBOOKIDs.js'

Vue.use(Vuex)

export default new Vuex.Store({
  /***********
   * States
   ***********/
  state: {
    spellSelected: {},
    spellbook: SPELLBOOK,
    spellbookIDs: SPELLBOOKIDS,
    allSpells: []
  },

  /***********
   * Mutations
   ***********/
  mutations: {
    selectSpell(state, data) {
      console.log('Mutation selectSpell: ', data)
      state.spellSelected = state.spellbookIDs[data]
    }
  },

  /***********
   * Actions
   ***********/
  actions: {
    selectSpell({ commit, state }, spell) {
      console.log('Action selectSpell: ', spell)
      commit('selectSpell', spell._id)
    }
  },

  getters: {
    spellbook: state => {
      return state.spellbook
    },
    spellSelected: state => {
      return state.spellSelected
    }
  }
})
