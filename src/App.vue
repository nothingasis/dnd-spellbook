<template>
  <v-app dark>
    <v-content>
      <v-container>
        <v-layout row wrap align-center>

          <v-flex xs12 md4>
            <div class="text-xs-center">
              <v-avatar size="125px" tile>
                <img src="@/assets/wizard-hat.png" class="mb-1">
              </v-avatar>
                <div class="headline">Wizards <span style="font-weight:bold">Spellbook</span></div>
                <div class="subheading text-xs-center grey--text pt-1 pb-3">may the dice roll in your favor</div>
                <v-layout justify-space-around>
                  <a href="javascript:;" class="body-2">Home</a>
                  <!-- TODO: Creating a settings component -->
                  <!-- <a href="javascript:;" class="body-2">Settings</a> -->
                  <a href="javascript:;" class="body-2">Github</a>
                </v-layout>
            </div>
            <v-layout row wrap align-center>
              <spell-card :spell="spellSelected" :canCast="false"></spell-card>
            </v-layout>
          </v-flex>

          <v-flex xs12 md5 offset-md2>
            <div v-for="spell in spellbook" :key="spell.title">
              <spell-card :spell="spell"></spell-card>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import SpellCard from '@/components/SpellCard.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    SpellCard
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['spellSelected', 'spellbook'])
  },
  methods: {
    ...mapActions(['selectSpell'])
  }
}
</script>
