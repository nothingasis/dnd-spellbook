import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  /***********
   * States
   ***********/
  state: {
    spellSelected: {
      title: 'Acid Splash',
      type: 'Conjuration cantrip',
      castingtime: '1 action',
      range: '60 feet',
      components: 'V,S',
      duration: 'Instantaneous',
      description:
        'You hurl a bubble of acid. Choose one creature within range, or choose two creatures within range that are within 5 feet of each other. A target must succeed on a Dexterity saving throw or take 1d6 acid damage. &nbsp; This spells damage increase by 1d6 when you reach 5th level (2d6), 11th level (3d6) and 17th level (4d6).',
      imgUrl: 'https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/drop.jpg'
    },
    spellbook: [
      {
        title: 'Acid Splash',
        type: 'Conjuration cantrip',
        castingtime: '1 action',
        range: '60 feet',
        components: 'V,S',
        duration: 'Instantaneous',
        description:
          'You hurl a bubble of acid. Choose one creature within range, or choose two creatures within range that are within 5 feet of each other. A target must succeed on a Dexterity saving throw or take 1d6 acid damage. &nbsp; This spells damage increase by 1d6 when you reach 5th level (2d6), 11th level (3d6) and 17th level (4d6).',
        imgUrl: 'https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/drop.jpg'
      },
      {
        title: 'Donec vitae suscipit lectus, a luctus diam.',
        content:
          'Donec vitae suscipit lectus, a luctus diam. Proin vitae felis gravida, lobortis massa sit amet, efficitur erat. Morbi vel ultrices nisi.',
        imgUrl: 'https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/docks.jpg'
      },
      {
        title: 'Vestibulum condimentum quam',
        content:
          'At sagittis sapien vulputate. Vivamus laoreet lacus id magna rutrum dapibus. Donec vel pellentesque arcu. Maecenas mollis odio tempus felis elementum commodo.',
        imgUrl: 'https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/plane.jpg'
      }
    ]
  },

  /***********
   * Mutations
   ***********/
  mutations: {
    selectSpell(state, data) {
      console.log('Mutation selectSpell: ', data)
      state.spellbook.forEach(spell => {
        console.log('Spell: ', spell)
        if (spell.title === data.title) {
          state.spellSelected = spell
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
      commit('selectSpell', spell)
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
