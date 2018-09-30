<template>
  <v-app dark>
    <v-content>
      <v-container>
        <v-layout row wrap align-center>

          <v-flex xs6 md5>
            <div class="text-xs-center">
              <v-avatar size="300" tile>
                <img src="@/assets/wizard-hat.jpg" class="mb-5">
              </v-avatar>
                <div class="headline">Wizards <span style="font-weight:bold">Spellbook</span></div>
                <div class="subheading text-xs-center grey--text pt-1 pb-3">may the dice roll in your favor</div>
                <v-layout justify-space-between>
                  <a href="javascript:;" class="body-2">Home</a>
                  <!-- TODO: Creating a settings component -->
                  <!-- <a href="javascript:;" class="body-2">Settings</a> -->
                  <a href="javascript:;" class="body-2">Github</a>
                </v-layout>
            </div>
            <v-layout>
              <spell-card :spell="spellSelected" :canCast="false"></spell-card>
            </v-layout>
          </v-flex>

          <v-flex xs6 md5 offset-md2>
            <spell-card v-for="(spell, key) in spellbook" :key="key" :spell="spell"></spell-card>
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
