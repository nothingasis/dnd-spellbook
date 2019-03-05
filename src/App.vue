<template>
  <v-app id="app">
    <!-- Top Toolbar -->
    <toolbar></toolbar>

    <!-- Side Navigation Bar -->
    <side-navigation></side-navigation>

    <v-content>
      <!-- Main Body Content -->
      <cards></cards>
    </v-content>

  </v-app>
</template>

<script>
  import Toolbar from './components/Toolbar.vue'
  import SideNavigation from './components/SideNavigation.vue'
  import Cards from './components/Cards.vue'
  import { mapActions, mapGetters } from 'vuex'
  export default {
    components: {
      Toolbar,
      SideNavigation,
      Cards
    },
    created () {
      this.getSpellBook()
    },
    data: () => ({}),
    computed: {
      ...mapGetters(['search', 'perPage', 'page', 'filteredList'])
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