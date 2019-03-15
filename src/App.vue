<template>
  <v-app id="app">
    <!-- Navigation Bar -->
    <navigation-bar></navigation-bar>

    <v-content>
      <!-- Main Body Content -->
      <cards></cards>
    </v-content>

  </v-app>
</template>

<script>
  import NavigationBar from './components/NavigationBar.vue'
  import Cards from './components/Cards.vue'
  import { mapActions, mapGetters } from 'vuex'
  export default {
    components: {
      NavigationBar,
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
