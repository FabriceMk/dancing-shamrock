<template>
  <div>
    <v-app-bar
      color="primary"
      dark
      fixed
      app>
      <v-btn icon @click="backHome()">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>

      <div class="d-flex align-center">
        <v-toolbar-title>{{setDetails.name}}</v-toolbar-title>
      </div>

      <v-spacer></v-spacer>

      <v-btn icon @click="toggleDescriptions()">
        <v-icon v-if="showDescriptions">mdi-eye</v-icon>
        <v-icon v-else>mdi-eye-off</v-icon>
      </v-btn>

      <v-menu left bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item-group>
            <v-list-item @click="() => {}">
              <v-list-item-content>
                <v-list-item-title>Settings</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item to="/about">
              <v-list-item-content>
                <v-list-item-title>About</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-menu>

      <template v-slot:extension>
        <v-tabs
          show-arrows
          center-active
          v-model="currentTab"
          v-if="setDetails && setDetails.figures">
          <v-tab
            :href="'#tab-info'"
          >
            Info
          </v-tab>
          <v-tab
            v-for="(figure, i) in setDetails.figures"
            :key="i"
            :href="`#tab-${i}`"
          >
            Fig. {{ i+1 }}
          </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-tabs-items
      v-model="currentTab"
      v-if="setDetails && setDetails.figures">
        <v-tab-item
          :value="'tab-info'">
          <v-container>
            <v-row dense>
              <v-col cols="12">
                <v-card>
                  <v-img
                    class="white--text align-end"
                    height="200px"
                    src="/img/hero-images/GiantsCausewayCasparDiederikbg.jpg"
                    gradient="to bottom left, rgba(100,115,201,.10), rgba(25,32,72,.9)"
                  >
                    <v-card-title>{{ setDetails.name }}</v-card-title>
                  </v-img>

                  <v-card-subtitle
                    v-if="setDetails.alternativeNames && setDetails.alternativeNames.length > 0"
                  >
                    Alternative names: {{ setDetails.alternativeNames }}
                  </v-card-subtitle>

                  <v-card-text class="text--primary">
                    <v-skeleton-loader
                      class="mx-auto"
                      max-width="300"
                      type="paragraph"
                      :boilerplate="boilerplate"
                  ></v-skeleton-loader>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-tab-item>

          <v-tab-item
            v-for="(figure, i) in setDetails.figures"
            :key="i"
            :value="`tab-${i}`"
          >
          <v-container>
          <v-row dense>
            <v-col cols="12">
              <v-card>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="headline">
                      {{ figure.name }}
                    </v-list-item-title>
                    <v-list-item-subtitle>
                      <v-chip
                        class="ma-2"
                        color="green"
                        text-color="white"
                      >
                        {{ figure.style | capitalize }}
                      </v-chip>
                      <v-chip
                        class="ma-2"
                      >
                        {{ figure.duration }} bars
                      </v-chip>
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
                <v-list two-line>
                  <template v-for="(movementGroup, movementGroupIndex) in figure.movements">
                    <template v-for="(movement, movementIndex) in movementGroup">
                      <v-list-item
                        :key="`${movementGroupIndex}-${movementIndex}`"
                      >
                        <v-list-item-content>
                          <v-list-item-title v-if="movement.name" v-text="movement.name"></v-list-item-title>
                          <v-list-item-title v-else>Repeat</v-list-item-title>
                          <v-list-item-subtitle v-text="displayCouples(movement.couples)"></v-list-item-subtitle>
                          <p class="body-2 text-justify" v-if="showDescriptions" v-text="movement.description"></p>
                        </v-list-item-content>

                        <v-chip
                          class="ma-2"
                        >
                          {{ movement.duration }}
                        </v-chip>
                      </v-list-item>
                    </template>
                  </template>
                </v-list>
                <v-card-actions>
                  <v-btn text color="secondary">
                    Share
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>

            <v-col cols="12" md="4">
              <v-skeleton-loader
                elevation="2"
                type="card-avatar, article, actions"
                :boilerplate="boilerplate"
                ></v-skeleton-loader>
            </v-col>
          </v-row>
        </v-container>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import SetDetails from '@/models/SetDetails';

@Component({
  name: 'SetDetailsComponent',
})
export default class SetDetailsComponent extends Vue {
  setDetails: SetDetails = new SetDetails('', '', []);

  currentTab = 'info';

  showDescriptions = false;

  created(): void {
    fetch(`/data/set-dances/${this.$route.params.id}.json`)
      .then((response) => response.json())
      .then((data) => {
        this.setDetails = data;
      });
  }

  backHome(): void {
    this.$router.push({ path: '/set-list' });
  }

  toggleDescriptions(): void {
    this.showDescriptions = !this.showDescriptions;
  }

  /**
   * Displays a nice string for couples.
   */
  displayCouples(couplesArray: number[]): string {
    let firstTop = false;
    let secondTop = false;
    let firstSide = false;
    let secondSide = false;

    couplesArray.forEach((couple) => {
      switch (couple) {
        case 1: firstTop = true; break;
        case 2: firstSide = true; break;
        case 3: secondTop = true; break;
        case 4: secondSide = true; break;
        default: break;
      }
    });

    if (firstSide && secondTop && firstSide && secondSide) {
      return 'All couples';
    }

    if (firstTop && secondTop && !firstSide && !secondSide) {
      return 'Tops';
    }

    if (!firstTop && !secondTop && firstSide && secondSide) {
      return 'Sides';
    }

    const result = [];

    if (firstTop) {
      result.push('1st Top');
    }

    if (secondTop) {
      result.push('2nd Top');
    }

    if (firstSide) {
      result.push('1st Side');
    }

    if (secondSide) {
      result.push('2nd Side');
    }
    return result.join(' - ');
  }
}

</script>
