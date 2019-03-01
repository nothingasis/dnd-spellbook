import Vue from 'vue'
import Vuex from 'vuex'
import db from '../firebaseConfig.js'
import * as spells from '../assets/spells.json'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    SpellBook: []
  },
  mutations: {
    toggleShow: (state, name) => {
      state.SpellBook.forEach(spell => {
        if (spell.name === name) {
          spell.show = !spell.show
        }
      })
    },
    getSpellBook: (state, spell) => {
      spell.show = false
      state.SpellBook.push(spell)
    }
  },
  getters: {
    SpellBook: state => {
      return state.SpellBook
    }
  },
  actions: {
    toggleShow ({commit}, name) {
      commit('toggleShow', name)
    },
    getSpellBook ({commit}) {
      db.collection('spells').orderBy('name', 'asc').get().then(spellsRef => {
        spellsRef.forEach(doc => {
          commit('getSpellBook', doc.data())
        })
      })
    },
    uploadSpellBook () {
      spells.forEach((spell, index) => {
        db.collection('spells').add(spell)
      })
    }
  },
  strict: debug
})
