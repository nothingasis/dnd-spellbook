<template>
  <v-layout row wrap>
    <v-flex xs10 sm10>
      <v-text-field flat hide-details v-model="searchFilter" label="Search" prepend-inner-icon="search">
      </v-text-field>
    </v-flex>
    <v-flex xs2 sm2>
      <v-select :items="perPageOptions" v-model="perPageValue" item-text="label" itme-value="value" label="Per Page">
      </v-select>
    </v-flex>
  </v-layout>     
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'SearchBar',
  computed: {
    ...mapGetters(['search', 'page', 'perPage', 'filteredList']),
    perPageOptions () {
      return [
        {label: 10, value: 10},
        {label: 20, value: 20},
        {label: 50, value: 50},
        {label: 100, value: 100},
        {label: 'All', value: this.filteredList.length}
      ]
    },
    perPageValue: {
      set (perPage) { this.setPerPage(perPage) },
      get () { return this.perPage }
    },
    searchFilter: {
      set (value) {
        this.setSearchFilter(value)
      },
      get () {
        return this.search
      }
    }
  },
  methods: {
    ...mapActions(['setPerPage', 'setSearchFilter'])
  }
}
</script>

