import Vue from 'vue'
import Vuex from 'vuex'
import db from '../firebaseConfig.js'
import * as spells from '../assets/spells.json'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    filter: '*',
    levelFilter: 'All',
    schoolFilter: 'All',
    spinning: false,
    drawer: null,
    search: '',
    page: 1,
    perPage: 10,
    SpellBook: [],
    filteredList: []
  },
  mutations: {
    setSearchFilter: (state, search) => {
      // Search: [{ filter: String, value: String }, {...}, {...}]}
      state.search = search
      search = search.toLowerCase()

      let filteredList = state.SpellBook
      if (search !== '') {
        filteredList = filteredList.filter(row => {
          return String(row.name).toLowerCase().indexOf(search) > -1
        })
      }

      state.filteredList = filteredList
    },
    setLevelFilter: (state, levelFilter) => {
      state.levelFilter = levelFilter
      levelFilter = levelFilter.toLowerCase()

      // Start filteredList over
      let filteredList = state.SpellBook

      // Filter first by name
      if (state.search) {
        filteredList = filteredList.filter(row => {
          return String(row.name).toLowerCase().indexOf(state.search.toLowerCase()) > -1
        })
      }
      // Then by Class
      if (state.filter !== '*') {
        filteredList = filteredList.filter(row => {
          return String(row.class).toLowerCase().indexOf(state.filter.toLowerCase()) > -1
        })
      }
      // Then by School
      if (state.schoolFilter.toLowerCase() !== 'all') {
        filteredList = filteredList.filter(row => {
          return String(row.school).toLowerCase().indexOf(state.schoolFilter.toLowerCase()) > -1
        })
      }
      // Then by level
      if (levelFilter !== 'all') {
        filteredList = filteredList.filter(row => {
          return String(row.level).toLowerCase().indexOf(levelFilter) > -1
        })
      }

      state.filteredList = filteredList
    },
    setSchoolFilter: (state, schoolFilter) => {
      state.schoolFilter = schoolFilter
      schoolFilter = schoolFilter.toLowerCase()

      // Start filteredList over
      let filteredList = state.SpellBook

      // Filter first by name
      if (state.search) {
        filteredList = filteredList.filter(row => {
          return String(row.name).toLowerCase().indexOf(state.search.toLowerCase()) > -1
        })
      }
      // Then by Class
      if (state.filter !== '*') {
        filteredList = filteredList.filter(row => {
          return String(row.class).toLowerCase().indexOf(state.filter.toLowerCase()) > -1
        })
      }
      // Then by Level
      if (state.levelFilter.toLowerCase() !== 'all') {
        filteredList = filteredList.filter(row => {
          return String(row.level).toLowerCase().indexOf(state.levelFilter.toLowerCase()) > -1
        })
      }
      // Then by the school
      if (schoolFilter !== 'all') {
        filteredList = filteredList.filter(row => {
          return String(row.school).toLowerCase().indexOf(schoolFilter) > -1
        })
      }

      state.filteredList = filteredList
    },
    setQueryFilter: (state, queryfilter) => {
      state.filter = queryfilter
      queryfilter = queryfilter.toLowerCase()
      let filteredList = state.SpellBook

      // Filter down the list
      if (queryfilter !== '*') {
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
    schoolFilter: state => {
      return state.schoolFilter
    },
    levelFilter: state => {
      return state.levelFilter
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
    setSearchFilter ({commit}, search) {
      commit('setSearchFilter', search)
    },
    setLevelFilter ({commit}, levelFilter) {
      commit('setLevelFilter', levelFilter)
    },
    setSchoolFilter ({commit}, schoolFilter) {
      commit('setSchoolFilter', schoolFilter)
    },
    setQueryFilter ({commit}, data) {
      commit('setQueryFilter', data)
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
