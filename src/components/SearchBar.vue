<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex fluid>
        <v-text-field flat hide-details v-model="searchFilterValue" label="Search" prepend-inner-icon="search">
        </v-text-field>
      </v-flex>
      <v-flex xs2 sm2>
        <v-select :items="SpellLevels" v-model="levelFilterValue" label="Spell Level">
        </v-select>
      </v-flex>
      <v-flex xs2 sm2>
        <v-select :items="SchoolsOfMagic" v-model="schoolFilterValue" label="Schools of Magic">
        </v-select>
      </v-flex>
      <v-flex xs2 sm2 mx-4>
        <v-select :items="perPageOptions" v-model="perPageValue" item-text="label" item-value="value" label="Per Page">
        </v-select>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'SearchBar',
  data () {
    return {
      SpellLevels: ['All', 'Cantrip', '1st-level', '2nd-level', '3rd-level', '4th-level', '5th-level', '6th-level', '7th-level', '8th-level', '9th-level', '10th-level'],
      SchoolsOfMagic: ['All', 'Abjuration', 'Conjuration', 'Divination', 'Enchantment', 'Evocation', 'Illusion', 'Necromancy', 'Transmutation'] // Univeral
    }
  },
  computed: {
    ...mapGetters(['search', 'filteredList', 'perPage', 'schoolFilter', 'levelFilter']),
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
    searchFilterValue: {
      set (value) {
        this.setSearchFilter(value)
      },
      get () {
        return this.search
      }
    },
    schoolFilterValue: {
      set (value) {
        this.setSchoolFilter(value)
      },
      get () {
        return this.schoolFilter
      }
    },
    levelFilterValue: {
      set (value) {
        this.setLevelFilter(value)
      },
      get () {
        return this.levelFilter
      }
    }
  },
  methods: {
    ...mapActions(['setPerPage', 'setSearchFilter', 'setLevelFilter', 'setSchoolFilter'])
  }
}
</script>

