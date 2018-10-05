<template>
  <v-container>
    <v-layout>
      <v-flex d-flex>
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
            School of {{ spell.school.name }}
          </v-card-title>
          <v-responsive class="black--text">
            <transition v-if="defaultView" name="slide-fade">

              <v-card-text @click="toggleView">
                <v-layout row wrap>
                  <v-flex d-flex>
                    <b>
                      Casting Time:
                    </b>
                    &nbsp;{{spell.casting_time}}
                    <font-awesome-icon icon="clock" />&nbsp;
                  </v-flex>&nbsp;
                  <v-flex d-flex>
                    <b>
                      Range:</b>&nbsp;{{spell.range}}
                    <font-awesome-icon icon="crosshairs" />&nbsp;
                  </v-flex>
                </v-layout>
                <v-layout row wrap>
                  <v-flex d-flex>
                    <b>
                      Components:
                    </b>
                    &nbsp;{{JSON.stringify(spell.components)}}
                    <font-awesome-icon icon="sitemap" />&nbsp;
                  </v-flex>
                  <v-flex d-flex>
                    <b>
                      Duration:
                    </b>
                    &nbsp;{{spell.duration}}
                    <font-awesome-icon icon="hourglass-start" />&nbsp;
                  </v-flex>
                </v-layout>
              </v-card-text>
            </transition>
            <transition name="slide-fade">
              <v-card-text @click="toggleView" v-if="!defaultView">
                <v-layout row wrap>
                  <v-flex>
                    <p style="overflow:scroll; max-height:300px;">{{spell.desc.toString()}}</p>
                  </v-flex>
                </v-layout>
              </v-card-text>
            </transition>
            <v-card-actions>
              <v-btn flat class="purple--text" v-if="canCast" @click="selectSpell(spell)">
                <font-awesome-icon icon="magic" />&nbsp;Cast Spell&nbsp;
              </v-btn>
              <v-btn flat class="blue--text" v-if="canCast" @click="addCantrip(spell)">
                <font-awesome-icon icon="plus" />&nbsp;Add Cantrip
              </v-btn>
              <v-btn flat class="teal--text" v-if="canCast" @click="addSpell(spell)">
                <font-awesome-icon icon="folder-plus" />&nbsp;Add Spell
              </v-btn>
            </v-card-actions>
          </v-responsive>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
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
    return {
      show: true,
      defaultView: true
    }
  },
  methods: {
    ...mapActions(['selectSpell']),
    toggleView() {
      this.defaultView = !this.defaultView
    }
  }
}
</script>
<style>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
