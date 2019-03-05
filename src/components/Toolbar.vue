<template>
  <v-toolbar color="blue-grey" app absolute clipped-left>
    <v-toolbar-side-icon @click="toggleDrawer()"></v-toolbar-side-icon>
    <span class="title ml-3 mr-5">DND&nbsp;<span class="font-weight-light">SpellBook</span></span>
    <v-spacer></v-spacer>
  </v-toolbar>  
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Toolbar',
  data () {
    return {}
  },
  methods: {
    ...mapActions(['toggleDrawer'])
  }
}
</script>

