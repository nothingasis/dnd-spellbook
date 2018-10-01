<template>
  <v-card class="my-3" hover width="100%">
    <v-responsive class="white--text">
      <v-container fill-height fluid>
        <v-layout>
          <v-flex xs12 align-end d-flex>
            <span class="headline">{{ spell.title }}</span>
          </v-flex>
        </v-layout>
      </v-container>
    </v-responsive>
    <v-card-title>
      {{ spell.type }}
    </v-card-title>
    <v-card-text>
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
    </v-card-text>
    <v-card-actions>
      <v-btn flat class="red--text" @click="selectSpell(spell)">
        Cast Spell
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn flat class="blue--text">Read More</v-btn>
    </v-card-actions>
  </v-card>
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
