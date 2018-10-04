<template>
  <v-card class="my-3" hover width="50%">
    <v-responsive class="black--text">
      <v-container fill-height fluid>
        <v-layout>
          <v-flex xs12 align-end d-flex>
            <span class="headline">{{ spell.name }}</span>
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
          <b>Casting Time:</b>&nbsp;{{spell.casting_time}}
        </v-flex>
        <v-flex xs6>
          <b>Range:</b>&nbsp;{{spell.range}}
        </v-flex>
        <v-flex xs6>
          <b>Components:</b>&nbsp;{{JSON.stringify(spell.components)}}
        </v-flex>
        <v-flex xs6>
          <b>Duration:</b>&nbsp;{{spell.duration}}
        </v-flex>
      </v-layout>
    </v-card-text>
    <v-card-actions>
      <v-btn flat class="red--text" v-if="canCast" @click="selectSpell(spell)">
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
    index: { type: String },
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
