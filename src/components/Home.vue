<template>
  <span>
    <spell-card :spell="spell" :index="spell._id" v-for="(spell, index) in filteredList" :key="index"></spell-card>
  </span>
</template>

<script>
import SpellCard from '@/components/SpellCard.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    SpellCard
  },
  data() {
    return {
      filterClass: [],
      classes: [
        'Barbarian',
        'Bard',
        'Cleric',
        'Druid',
        'Fighter',
        'Monk',
        'Paladin',
        'Ranger',
        'Rogue',
        'Sorcerer',
        'Warlock',
        'Wizard'
      ],
      page: 0,
      spellsearch: ''
    }
  },
  computed: {
    ...mapGetters(['spellSelected', 'spellbook']),
    filteredList() {
      return this.spellbook.filter(spell => {
        return spell.name.toLowerCase().includes(this.spellsearch.toLowerCase())
        // spell.classes
        //   .toString()
        //   .toLowerCase()
        //   .includes(this.filterClass.toString().toLowerCase())
      })
    }
  },
  created() {},
  methods: {
    // ...mapActions(['selectSpell'])
    handleSlideClick(dataset) {
      console.log(dataset.index, dataset.name)
    },

    showComponent(component) {
      this.show = component
    }
  }
}
</script>
