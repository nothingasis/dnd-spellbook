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
    getSpellBook: (state, spell) => {
      state.SpellBook.push(spell)
    }
  },
  getters: {
    SpellBook: state => {
      return state.SpellBook
    }
  },
  actions: {
    getSpellBook ({commit}) {
      db.collection('spells').get().then(spellsRef => {
        spellsRef.forEach(doc => {
          commit('getSpellBook', doc.data())
          console.log(doc.data())// call data() to fetch data
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
