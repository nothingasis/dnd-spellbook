import Vue from 'vue'
import Vuex from 'vuex'
import db from '../firebaseConfig.js'
import * as spells from '../assets/spells.json'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    search: '',
    page: 1,
    perPage: 10,
    SpellBook: [],
    filteredList: []
  },
  mutations: {
    turnToPage: (state, page) => {
      state.page = page
    },
    setPerPage: (state, perPage) => {
      state.perPage = perPage
    },
    setSearchFilter: (state, search) => {
      state.search = search

      search = search.toLowerCase()
      let filteredList = state.SpellBook

      // Filter down the list
      if (search) {
        filteredList = filteredList.filter(row => {
          return String(row.name).toLowerCase().indexOf(search) > -1
        })
      }
      state.filteredList = filteredList
    },
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
      state.filteredList.push(spell)
    }
  },
  getters: {
    page: state => {
      return state.page
    },
    perPage: state => {
      return state.perPage
    },
    search: state => {
      return state.search
    },
    SpellBook: state => {
      return state.SpellBook
    },
    filteredList: state => {
      return state.filteredList
    }
  },
  actions: {
    turnToPage ({commit}, page) {
      commit('turnToPage', page)
    },
    setPerPage ({commit}, perPage) {
      commit('setPerPage', perPage)
    },
    setSearchFilter ({commit}, search) {
      commit('setSearchFilter', search)
    },
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
