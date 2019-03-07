<template>
  <v-layout row wrap>
    <v-flex xs8 sm8>
      <v-text-field flat hide-details v-model="searchFilter" label="Search" prepend-inner-icon="search">
      </v-text-field>
    </v-flex>
    <v-flex xs2 sm2>
      <v-select :items="perPageOptions" v-model="perPageValue" item-text="label" item-value="value" label="Per Page">
      </v-select>
    </v-flex>
    <v-flex xs2 sm2>
      <v-select :items="SpellLevels" v-model="value" label="Spell Level">
      </v-select>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'SearchBar',
  data () {
    return {
      value: 'All',
      SpellLevels: ['All', '1st-level', '2nd-level', '3rd-level', '4th-level', '5th-level', '6th-level', '7th-level', '8th-level', '9th-level', '10th-level']
    }
  },
  computed: {
    ...mapGetters(['search', 'page', 'perPage', 'filteredList']),
    perPageOptions () {
      return [
        {label: 'All', value: this.filteredList.length},
        {label: 10, value: 10},
        {label: 20, value: 20},
        {label: 50, value: 50},
        {label: 100, value: 100}
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

