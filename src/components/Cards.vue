<template>
  <v-layout justify-center>
    <v-container fluid grid-list-md>
      <!-- Search Bar -->
      <search-bar></search-bar>
      <div class="text-xs-center">
        <v-icon v-if="spinning" size="64">fas fa-spinner fa-spin</v-icon>
      </div>
      <v-fade-transition>
        <!-- Cards Layout -->
        <v-layout row wrap v-if="!spinning">
          <v-flex v-for="(card, key) in filteredList.slice(displayRangeStart, displayRangeEnd)" :key="key">
            <v-card>
              <v-img src="https://i.pinimg.com/474x/81/11/10/81111081508e4e7bd138890ab2cdf9dd--holy-symbol-pathfinder-rpg.jpg" height="200px">
                <v-container fill-height fluid pa-2>
                  <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>
                      <span class="headline red--text" v-text="card.name"></span>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-img>

            <v-card-title primary-title>
              <div>
                <div>
                  <span><v-icon>timer</v-icon>{{card.duration}}</span>
                  <span><v-icon>build</v-icon>{{card.components}} {{card.material ? `(${card.material})`:''}}</span>
                </div>
                <div>
                  <span><v-icon>timelapse</v-icon>{{card.casting_time}}{{card.concentration ? ' + concentration':''}}</span>
                  <span><v-icon>arrow_right_alt</v-icon>{{card.range}}</span>
                </div>
              </div>
            </v-card-title>

              <v-card-actions>
                &nbsp;<span class="grey--text">{{card.level}} {{card.school}}</span>
                <v-spacer></v-spacer>
                <v-btn icon @click="toggleShow(card.name)">
                  <v-icon>{{ card.show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                </v-btn>
              </v-card-actions>

              <v-slide-y-transition>
                <v-card-text v-if="card.show" v-html="
                `${card.desc} \n
                 <h2>${JSON.stringify(card)}</h2>`
                ">
                </v-card-text>
              </v-slide-y-transition>
            </v-card>
          </v-flex>
        </v-layout>
      </v-fade-transition>
      <!-- Pagination -->
      <div class="text-xs-center">
        <v-pagination slot="pagination" v-if="!spinning" v-model="pageValue" :length="numOfPages"></v-pagination>
      </div>
    </v-container>
  </v-layout>
</template>

<script>
import SearchBar from './SearchBar.vue'
import {mapActions, mapGetters} from 'vuex'
export default {
  props: {},
  components: { SearchBar },
  created () {},
  mounted () {},
  data: () => ({}),
  filters: {},
  computed: {
    ...mapGetters(['spinning', 'SpellBook', 'search', 'filteredList', 'perPage', 'page']),
    displayRangeStart () { return (this.page - 1) * this.perPage },
    displayRangeEnd () { return (this.page - 1) * this.perPage + this.perPage },
    pageValue: {
      set (page) { this.turnToPage(page) },
      get () { return this.page }
    },
    numOfPages () {
      // Number Of Pages = Number of Spells / Spells Per Page
      return Math.ceil(this.filteredList.length / this.perPage) // Round up in case displaying a singleton
    }
  },
  methods: {
    ...mapActions(['setPerPage', 'toggleShow', 'turnToPage'])
  }
}
</script>

<style>

</style>
