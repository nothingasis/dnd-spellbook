<template>
  <v-app dark>
    <v-content>
      <v-container>
        <v-layout row wrap align-center>

          <v-flex xs12 md5>
            <div class="text-xs-center">
              <v-avatar size="125px" tile>
                <img src="@/assets/wizard-hat.png" class="mb-1">
              </v-avatar>
                <div class="headline">Wizards <span style="font-weight:bold">Spellbook</span></div>
                <div class="subheading text-xs-center grey--text pt-1 pb-3">may the dice roll in your favor</div>
                <v-layout justify-space-around>
                  <a class="body-2">Home</a>
                  <!-- TODO: Creating a settings component -->
                  <a class="body-2">Settings</a>
                  <a class="body-2" target="blank" href="https://github.com/nothingasis/dnd-spellbook">Github</a>
                </v-layout>
            </div>
            <v-layout row wrap align-center>
              <!-- <v-form> -->
              <v-text-field v-model="spellsearch" label="Search For a Spell" required></v-text-field>
              <!-- </v-form> -->
              <spell-card :spell="spellSelected" :canCast="false"></spell-card>
            </v-layout>
          </v-flex>

          <v-spacer></v-spacer>

          <v-flex xs12 md5>
            <div>
              <spell-card v-for="(spell, index) in filteredList.slice(0, 3)" :key="index" :spell="spell" :index="spell._id"></spell-card>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
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
      page: 0,
      spellsearch: ''
    }
  },
  computed: {
    ...mapGetters(['spellSelected', 'spellbook']),
    filteredList() {
      return this.spellbook.filter(spell => {
        return spell.name.toLowerCase().includes(this.spellsearch.toLowerCase())
      })
    }
  },
  created() {},
  methods: {
    // ...mapActions(['selectSpell'])
    handleSlideClick(dataset) {
      console.log(dataset.index, dataset.name)
    }
  }
}
</script>
