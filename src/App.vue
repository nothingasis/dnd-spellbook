<template>
  <v-app light>
    <v-content>
      <v-container>
        <v-layout row wrap align-center>

          <v-flex xs12 md4>
            <div class="text-xs-center">
              <v-avatar size="300" tile>
                <img src="@/assets/wizard-hat.jpg" class="mb-5">
              </v-avatar>
                <div class="headline">Wizards <span style="font-weight:bold">Spellbook</span></div>
                <div class="subheading text-xs-center grey--text pt-1 pb-3">may the dice roll in your favor</div>
                <v-layout justify-space-between>
                  <a href="javascript:;" class="body-2">Home</a>
                  <a href="javascript:;" class="body-2">Settings</a>
                  <a href="javascript:;" class="body-2">Github</a>
                </v-layout>
            </div>
          </v-flex>

          <v-flex xs12 md5 offset-md2>
            <div v-for="post in posts" :key="post.title">
              <v-card class="my-3" hover>
                <v-card-media class="white--text" height="170px" :src="post.imgUrl">
                  <v-container fill-height fluid>
                    <v-layout>
                      <v-flex xs12 align-end d-flex>
                        <span class="headline">{{ post.title }}</span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-media>
                <v-card-title>
                  <v-layout>
                    <span class="grey--text">{{post.type}}</span>
                  </v-layout>

                  <v-container>
                    <v-layout row wrap>
                      <v-flex xs6>
                        <b>Casting Time:</b>{{post.castingtime}}
                      </v-flex>
                      <v-flex xs6>
                        <b>Range:</b>{{post.range}}
                      </v-flex>
                      <v-flex xs6>
                        <b>Components:</b>{{post.components}}
                      </v-flex>
                      <v-flex xs6>
                        <b>Duration:</b>{{post.duration}}
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-title>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn flat class="blue--text">Read More</v-btn>
                </v-card-actions>
              </v-card>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <!-- <v-footer class="secondary" app>
      <v-layout row wrap align-center>
        <v-flex xs12>
          <div class="white--text ml-3">
            Made with
            <v-icon class="red--text">favorite</v-icon>
          </div>
        </v-flex>
      </v-layout>
    </v-footer> -->
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      posts: [
        {
          title: 'Acid Splash',
          type: 'Conjuration cantrip',
          castingtime: '1 action',
          range: '60 feet',
          components: 'V,S',
          duration: 'Instantaneous',
          description: 'You hurl a bubble of acid. Choose one creature within range, or choose two creatures within range that are within 5 feet of each other. A target must succeed on a Dexterity saving throw or take 1d6 acid damage. &nbsp; This spells damage increase by 1d6 when you reach 5th level (2d6), 11th level (3d6) and 17th level (4d6).',
          imgUrl: 'https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/drop.jpg'
        },
        {
          title: 'Donec vitae suscipit lectus, a luctus diam.',
          content: 'Donec vitae suscipit lectus, a luctus diam. Proin vitae felis gravida, lobortis massa sit amet, efficitur erat. Morbi vel ultrices nisi.',
          imgUrl: 'https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/docks.jpg'
        },
        {
          title: 'Vestibulum condimentum quam',
          content: 'At sagittis sapien vulputate. Vivamus laoreet lacus id magna rutrum dapibus. Donec vel pellentesque arcu. Maecenas mollis odio tempus felis elementum commodo.',
          imgUrl: 'https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/plane.jpg'
        }
      ]
    }
  }
}
</script>
