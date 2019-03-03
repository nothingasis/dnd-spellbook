<template>
  <v-app id="app">
    <!-- Top Toolbar -->
    <v-toolbar color="blue-grey" app absolute clipped-left>
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <span class="title ml-3 mr-5">DND&nbsp;<span class="font-weight-light">SpellBook</span></span>
      <v-spacer></v-spacer>
    </v-toolbar>

    <!-- Side Navigation Bar -->
    <v-navigation-drawer v-model="drawer" fixed clipped class="grey lighten-4" app>
      <v-list dense class="grey lighten-4">
        <template v-for="(item, i) in items">
          <v-layout v-if="item.heading" :key="i" row align-center>
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
          </v-layout>
          
          <v-divider v-else-if="item.divider" :key="i" dark class="my-3"></v-divider>
          
          <v-list-tile v-else :key="i" @click="">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title class="grey--text">
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>

    <!-- Main Body Content -->
    <v-content>
      <cards>
        <search-bar slot='searchbar'></search-bar>
        <v-pagination slot="pagination" v-model="pageValue" :length="numOfPages"></v-pagination>
      </cards>
    </v-content>
  </v-app>
</template>

<script>
  import Cards from './components/Cards.vue'
  import SearchBar from './components/SearchBar.vue'
  import { mapActions, mapGetters } from 'vuex'
  export default {
    components: {
      Cards,
      SearchBar
    },
    created () {
      this.getSpellBook()
    },
    data: () => ({
      drawer: null,
      items: [
        { icon: 'book', text: 'Spellbook' },
        { divider: true },
        { heading: 'Class Spells' },
        { icon: 'bookmark', text: 'Bard' },
        { icon: 'bookmark', text: 'Cleric' },
        { icon: 'bookmark', text: 'Druid' },
        { icon: 'bookmark', text: 'Paladin' },
        { icon: 'bookmark', text: 'Ranger' },
        { icon: 'bookmark', text: 'Sorcerer' },
        { icon: 'bookmark', text: 'Warlock' },
        { icon: 'bookmark', text: 'Wizard' },
        { divider: true },
        { icon: 'history', text: 'History' },
        { icon: 'delete', text: 'Trash' },
        { divider: true },
        { icon: 'settings', text: 'Settings' },
        { icon: 'help', text: 'Help' }
      ]
    }),
    computed: {
      ...mapGetters(['search', 'perPage', 'page', 'filteredList']),
      pageValue: {
        set (page) { this.turnToPage(page) },
        get () { return this.page }
      },
      numOfPages () {
        // Number Of Pages = Number of Spells / Spells Per Page
        return Math.ceil(this.filteredList.length / this.perPage) // Round up in case displaying a singleton
      }
    },
    props: {
      source: String
    },
    methods: {
      ...mapActions(['getSpellBook', 'turnToPage'])
    }
  }
</script>

<style lang="stylus">
  #app
    .v-navigation-drawer__border
      display: none
</style>