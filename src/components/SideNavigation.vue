<template>
  <v-navigation-drawer  fixed clipped class="grey lighten-4" app>
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
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'SideNavigation',
  data () {
    return {
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
    }
  },
  computed: {
    ...mapGetters(['drawer']),
    drawerValue: {
      set (value) { this.toggleDrawer() },
      get () { return this.drawer }
    }
  },
  methods: {
    ...mapActions(['toggleDrawer'])
  }
}
</script>

