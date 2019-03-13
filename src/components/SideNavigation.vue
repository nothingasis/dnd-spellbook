<template>
  <!-- <v-navigation-drawer fixed clipped class="grey lighten-4" app>
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
  </v-navigation-drawer>   -->
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
        <!-- <v-list-group
          no-action
          sub-group
          value="true"
        >
          <template slot='activator'>
            <v-list-tile>
              <v-list-tile-title>Admin</v-list-tile-title>
            </v-list-tile>
          </template>

          <v-list-tile
            v-for="(admin, i) in admins"
            :key="i"
            @click=""
          >
            <v-list-tile-title v-text="admin[0]"></v-list-tile-title>
            <v-list-tile-action>
              <v-icon v-text="admin[1]"></v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-group> -->
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
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'SideNavigation',
  data () {
    return {
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
    ...mapGetters(['drawer', 'filter']),
    drawerValue: {
      set (value) { this.toggleDrawer() },
      get () { return this.drawer }
    }
  },
  methods: {
    ...mapActions(['toggleDrawer', 'setQueryFilter'])
  }
}
</script>

