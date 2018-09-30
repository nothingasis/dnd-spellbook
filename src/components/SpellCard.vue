<template>
  <!-- <div> -->
  <!-- <v-container> -->
  <!-- <v-layout row wrap align-center> -->

  <!-- <v-flex xs6 md5> -->
  <v-card class="my-3" hover width="475">
    <v-container fluid>
      <v-layout>
        <v-flex xs12 align-end d-flex>
          <span class="headline">{{ spell.title }}</span>
        </v-flex>
      </v-layout>
    </v-container>
    <v-card-title>
      <v-layout>
        <span class="grey--text">{{spell.type}}</span>
      </v-layout>

      <v-container>
        <v-layout row wrap>
          <v-flex xs6>
            <b>Casting Time:</b>&nbsp;{{spell.castingtime}}
          </v-flex>
          <v-flex xs6>
            <b>Range:</b>&nbsp;{{spell.range}}
          </v-flex>
          <v-flex xs6>
            <b>Components:</b>&nbsp;{{spell.components}}
          </v-flex>
          <v-flex xs6>
            <b>Duration:</b>&nbsp;{{spell.duration}}
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-title>
    <v-card-actions>
      <v-btn color="success" v-if="canCast" @click="selectSpell(spell)">Cast a Spell</v-btn>
      <v-spacer></v-spacer>
      <v-btn flat class="blue--text">Read More</v-btn>
    </v-card-actions>
  </v-card>
  <!-- </v-flex> -->
  <!-- </v-layout> -->
  <!-- </v-container> -->
  <!-- </div> -->
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'SpellCard',
  props: {
    spell: { type: Object, required: true },
    canCast: { type: Boolean, default: true }
  },
  data() {
    return {}
  },
  methods: {
    ...mapActions(['selectSpell'])
  }
}
</script>
