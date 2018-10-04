<template>
  <v-app>
    <v-content>
      <v-container>
        <v-layout row wrap align-center>

          <v-flex d-flex xs12 sm6 md6>
            <v-layout column wrap>
              <!-- Wizard Hat -->
              <v-flex d-flex>
                <v-avatar size="125px" tile>
                  <img src="@/assets/wizard-hat.png" class="mb-1">
              </v-avatar>
              </v-flex>
              <v-flex d-flex>
                <div class="headline text-xs-center">Wizards <span style="font-weight:bold">Spellbook</span></div>
              </v-flex>

              <v-flex d-flex>
                <div class="subheading text-xs-center grey--text pt-1 pb-3">may the dice roll in your favor</div>
              </v-flex>

              <v-flex d-flex>
                <v-layout justify-space-around>
                  <a class="body-2">Home</a>
                  <a class="body-2">Settings</a>
                  <a class="body-2" target="blank" href="https://github.com/nothingasis/dnd-spellbook">Github</a>
                </v-layout>
              </v-flex>

              <v-flex d-flex>
                <v-text-field v-model="spellsearch" label="Search For a Spell" required></v-text-field>
              </v-flex>

              <v-flex d-flex>
                <spell-card :spell="spellSelected" :canCast="false"></spell-card>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-spacer></v-spacer>
          <v-flex d-flex xs12 sm6 md4 v-for="(spell, index) in filteredList.slice(0, 6)" :key="index">
            <spell-card :spell="spell" :index="spell._id"></spell-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <!-- <home-2></home-2> -->
  </v-app>
</template>

<script>
import SpellCard from '@/components/SpellCard.vue'
import { mapGetters } from 'vuex'
import Home2 from './views/Home2.vue'

export default {
  name: 'App',
  components: {
    SpellCard,
    Home2
  },
  data() {
    return {
      page: 0,
      spellsearch: '',
      lorem:
        'Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.'
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
