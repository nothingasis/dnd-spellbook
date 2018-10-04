<template>
  <v-app>
    <v-container fluid grid-list-md>
      <!-- 1 -->
      <v-layout row wrap>

        <v-flex d-flex xs12 sm6 md4>
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

        <v-flex d-flex xs12 sm6 md3>
          <v-layout row wrap>
            <v-flex d-flex>
              <v-card color="indigo" dark>
                <v-card-text>{{ lorem.slice(0, 70) }}</v-card-text>
              </v-card>
            </v-flex>
            <v-flex d-flex>
              <v-layout row wrap>
                <v-flex v-for="n in 2" :key="n" d-flex xs12>
                  <v-card color="red lighten-2" dark>
                    <v-card-text>{{ lorem.slice(0, 40) }}</v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-flex>

        <v-flex d-flex xs12 sm6 md2 child-flex>
          <v-card color="green lighten-2" dark>
            <v-card-text>{{ lorem.slice(0, 90) }}</v-card-text>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12 sm6 md3>
          <v-card color="blue lighten-2" dark>
            <v-card-text>{{ lorem.slice(0, 100) }}</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'Home2',
  data() {
    return {
      lorem:
        'Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.'
    }
  }
}
</script>
