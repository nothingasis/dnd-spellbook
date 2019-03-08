import Vue from 'vue'
import Vuex from 'vuex'
import db from '../firebaseConfig.js'
import * as spells from '../assets/spells.json'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    filter: {
      class: '*'
    },
    levelfilter: 'All',
    spinning: false,
    drawer: null,
    search: '',
    page: 1,
    perPage: 10,
    SpellBook: [],
    filteredList: []
  },
  mutations: {
    setLevelFilter: (state, levelfilter) => {
      state.spinning = true
      state.levelfilter = levelfilter
      levelfilter = levelfilter.toLowerCase()

      if (levelfilter !== 'All') {
        state.filteredList = state.filteredList.filter(row => {
          return String(row.level).toLowerCase().indexOf(levelfilter) > -1
        })
      }
      state.spinning = false
    },
    setQueryFilter: (state, queryfilter) => {
      // // Iterate through filter's keys
      // Object.keys(state.filter).find(filterkey => {
      //   // Set it if the key matches the secondObject's key
      //   Object.keys(queryfilter).forEach(querykey => {
      //     if (filterkey === querykey) {
      //       state.filter[filterkey] = queryfilter[querykey]
      //     }
      //   })
      // })
      state.filter = queryfilter
      queryfilter = queryfilter.toLowerCase()
      let filteredList = state.SpellBook

      // Filter down the list
      if (queryfilter) {
        filteredList = filteredList.filter(row => {
          return String(row.class).toLowerCase().indexOf(queryfilter) > -1
        })
      }
      state.filteredList = filteredList
    },
    startSpinner: (state) => {
      state.spinning = true
    },
    stopSpinner: (state) => {
      state.spinning = false
    },
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
    toggleDrawer: (state) => {
      state.drawer = !state.drawer
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
    levelfilter: state => {
      return state.levelfilter
    },
    filter: state => {
      return state.filter
    },
    spinning: state => {
      return state.spinning
    },
    drawer: state => {
      return state.drawer
    },
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
    setQueryFilter ({commit}, queryfilter) {
      commit('startSpinner')
      commit('setQueryFilter', queryfilter)
      commit('toggleDrawer')
      setTimeout(() => {
        commit('stopSpinner')
      }, 300)
    },
    startSpinner ({commit}) {
      commit('startSpinner')
    },
    stopSpinner ({commit}) {
      commit('stopSpinner')
    },
    toggleDrawer ({commit}) {
      commit('toggleDrawer')
    },
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
    async getSpellBook ({commit}) {
      commit('startSpinner')
      let spellsRef = await db.collection('spells').orderBy('name', 'asc').get()
      spellsRef.forEach(doc => {
        commit('getSpellBook', doc.data())
      })
      commit('stopSpinner')
    },
    uploadSpellBook () {
      spells.forEach((spell, index) => {
        db.collection('spells').add(spell)
      })
    }
  },
  strict: debug
})
