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
    allSpells: [],
    cantrips: [],
    spellslots: []
  },

  /***********
   * Mutations
   ***********/
  mutations: {
    selectSpell(state, data) {
      console.log('Mutation selectSpell: ', data)
      state.spellSelected = state.spellbookIDs[data]
    },

    addCantrip(state, data) {
      console.log('Mutation addCantrip: ', data)
      state.cantrips.push(data)
    },
    removeCantrip(state, data) {
      state.cantrips.forEach((spell, index) => {
        if (spell.id === data.id) {
          Vue.delete(state.cantrips, index)
        }
      })
    },
    addSpell(state, data) {
      console.log('Mutation addSpell: ', data)
      state.spellslots.push(data)
    },
    removeSpell(state, data) {
      state.spellslots.forEach((spell, index) => {
        if (spell.id === data.id) {
          Vue.delete(state.spellslots, index)
        }
      })
    }
  },

  /***********
   * Actions
   ***********/
  actions: {
    selectSpell({ commit, state }, spell) {
      console.log('Action selectSpell: ', spell)
      commit('selectSpell', spell._id)
    },
    addCantrip({ commit, state }, data) {
      console.log('Action addCantrip: ', data)
      commit('addCantrip', data)
    },
    removeCantrip({ commit, state }, data) {
      console.log('Action removeCantrip: ', data)
      commit('removeCantrip', data)
    },
    addSpell({ commit, state }, data) {
      console.log('Action addSpell: ', data)
      commit('addSpell', data)
    },
    removeSpell({ commit, state }, data) {
      console.log('Action removeSpell: ', data)
      commit('removeSpell', data)
    }
  },

  getters: {
    spellbook: state => {
      return state.spellbook
    },
    spellSelected: state => {
      return state.spellSelected
    },
    cantrips: state => {
      return state.cantrips
    },
    spellslots: state => {
      return state.spellslots
    }
  }
})
