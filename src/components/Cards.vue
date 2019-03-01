<template>
  <v-layout justify-center>
    <!-- FRONT SIDE -->
    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <v-flex xs10 sm10>
          <v-text-field
              flat
              hide-details
              v-model="search"
              label="Search"
              prepend-inner-icon="search"
            ></v-text-field>
        </v-flex>
        <v-flex xs2 sm2>
          <v-select
            :items="[{label: 10, value: 10}, {label: 20, value: 20}, {label: 50, value: 50}, {label: 100, value: 100}, {label: 'All', value: SpellBook.length}]"
            v-model="perpage"
            item-text="label"
            itme-value="value"
            label="Per Page"
          ></v-select>
      </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex v-for="(card, key) in filteredList" :key="key">
          <v-card>
            <v-img src="https://i.pinimg.com/474x/81/11/10/81111081508e4e7bd138890ab2cdf9dd--holy-symbol-pathfinder-rpg.jpg" height="200px">
              <v-container fill-height fluid pa-2>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <span class="headline white--text" v-text="card.spell_name"></span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>

          <v-card-title primary-title>
            <div>
              <!-- <span class="grey--text">
                {{card.level | removeAsterisks}}
              </span> -->
              <div>
                <span><v-icon>timer</v-icon>{{card.duration}}</span>
                <span><v-icon>build</v-icon>{{card.components}}</span>
              </div>
              <div>
                <span><v-icon>timelapse</v-icon>{{card.casting_time}}</span>
                <span><v-icon>arrow_right_alt</v-icon>{{card.range}}</span>
              </div>
            </div>
          </v-card-title>

            <v-card-actions>
              &nbsp;<span class="grey--text">{{card | removeAsterisks}}</span>
              <v-spacer></v-spacer>
              <v-btn icon @click="toggleDesc(card.name)">
                <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
              </v-btn>              
            </v-card-actions>

            <v-slide-y-transition>
              <v-card-text :ref="card.name" v-html="card.desc">
              </v-card-text>
            </v-slide-y-transition>            
          </v-card>
        </v-flex>
      </v-layout>
      
      <div class="text-xs-center">
        <v-pagination
          v-model="page"
          :length="numOfPages"
        ></v-pagination>
      </div>
      <ul>
        <li v-for="spell of SpellBook" :key="spell['.key']">
          {{spell}}
        </li>
      </ul>
    </v-container>
  </v-layout>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  props: {},
  created () {},
  mounted () {
    this.getSpellBook()
  },
  data: () => ({
    lokiDB: '',
    show: false,
    page: 1,
    showdescription: false, // showing...
    perpage: 10,
    search: ''
  }),
  filters: {
    removeAsterisks (card) {
      if (card.level) {
        return card.level.replace(/\*/g, '')
      } else {
        return card
      }
    }
  },
  computed: {
    ...mapGetters(['SpellBook']),
    filteredList () {
      let search = this.search.toLowerCase()
      let filteredList = this.SpellBook

      // Filter down the list
      if (search) {
        filteredList = filteredList.filter(row => {
          return String(row.spell_name).toLowerCase().indexOf(search) > -1
        })
      }

      // Example: I'm on page 2 and displaying 10 per page
      // I should return 20 - 30

      // I'm on page 13 and displaying 20
      // I should return 260 - 280
      // return filteredList.slice(this.page * this.perpage, this.page * this.perpage + this.perpage)
      return filteredList
    },
    numOfPages () {
      // ** Number of Spells is determined by our filteredList
      // Number Of Pages = Number of Spells / Spells Per Page
      let numOfSpells = this.SpellBook.length
      console.log('numOfSpells: ', numOfSpells)
      let numOfPages = Math.ceil(numOfSpells / this.perpage) // Round up in case displaying a singleton
      return numOfPages
    },
    filteredListPerPage () {
      // Breaking up the filtered list of spells into pages
      // Break up filteredList into 2-D array of pages with size of perpage
      let bookOfSpells = (this.filteredList.length / this.perpage) // # of pages in our book
      // page is the index into the array
      let thePageImOn = bookOfSpells[this.page]

      // contents of the page are returned
      return thePageImOn
    }
  },
  methods: {
    ...mapActions(['getSpellBook']),
    toggleDesc (spell) {
      console.log('Spell: ', spell)
      console.log(this.$refs[spell])
    },
    selectSpell (spell) {
      this.showdescription = true
      this.currentspell = spell
    }
  }
}
</script>

<style>

</style>
