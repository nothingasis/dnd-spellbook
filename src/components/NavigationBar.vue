<template>
  <div>
    <v-toolbar color="blue-grey" app absolute clipped-left>
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <span class="title ml-3 mr-5">DND&nbsp;<span class="font-weight-light">SpellBook</span></span>
      <v-spacer></v-spacer>
    </v-toolbar>  
    <v-navigation-drawer
      v-model="drawer"
      fixed
      clipped
      class="grey lighten-4"
      app
    >
      <v-list>
        <v-list-tile @click="setQueryFilter('*')" :style="filter === '*' ? 'font-weight: bold; color: #1867c0':''">
          <v-list-tile-action>
            <v-icon>book</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>SpellBook</v-list-tile-title>
        </v-list-tile>

        <v-list-group
          prepend-icon="account_circle"
          :value="filter !== '*'"
        >
          <template slot='activator'>
            <v-list-tile>
              <v-list-tile-title>Class Spells</v-list-tile-title>
            </v-list-tile>
          </template>
            <v-list-tile
              v-for="(object, key) in Classes"
              :key="key"
              @click="setQueryFilter(object.class)"
              :style="object.class === filter ? 'font-weight: bold; color: #1867c0':''"
            >
              <v-list-tile-action>
                <v-icon>{{object.icon}}</v-icon>
              </v-list-tile-action>
              <v-list-tile-title v-text="object.class"></v-list-tile-title>
            </v-list-tile>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'NavigationBar',
  data () {
    return {
      drawer: null,
      Classes: [
        {class: 'Bard', icon: 'fa-guitar'},
        {class: 'Cleric', icon: 'fa-medkit'},
        {class: 'Druid', icon: 'fa-leaf'},
        {class: 'Paladin', icon: 'fa-shield-alt'},
        {class: 'Ranger', icon: 'fa-bullseye'},
        {class: 'Sorcerer', icon: 'fa-moon'},
        {class: 'Warlock', icon: 'fa-magic'},
        {class: 'Wizard', icon: 'fa-hat-wizard'}
      ]
    }
  },
  computed: {
    ...mapGetters(['filter'])
    // drawerValue: {
    //   set (value) { this.toggleDrawer() },
    //   get () { return this.drawer }
    // }
  },
  methods: {
    ...mapActions(['toggleDrawer', 'setQueryFilter'])
  }
}
</script>

