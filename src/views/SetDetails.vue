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

    <v-container>
      <v-row dense>
        <v-col cols="12">
          <v-tabs-items
            v-model="currentTab"
            v-if="setDetails && setDetails.figures">
            <v-tab-item :value="'tab-info'">
              <v-card
                color="basil"
              >
                <v-img
                  class="white--text align-end"
                  height="200px"
                  src="/img/hero-images/GiantsCausewayCasparDiederikbg.jpg"
                  gradient="to bottom left, rgba(100,115,201,.10), rgba(25,32,72,.9)"
                >
                  <v-card-title>{{ setDetails.name }}</v-card-title>
                </v-img>
              </v-card>
            </v-tab-item>
            <v-tab-item
              v-for="(figure, i) in setDetails.figures"
              :key="i"
              :value="`tab-${i}`"
            >
              <v-card
                color="basil"
              >
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
                <v-card-text>{{ figure }}</v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-col>
      </v-row>
    </v-container>
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

  created() {
    fetch(`/data/set-dances/${this.$route.params.id}.json`)
      .then((response) => response.json())
      .then((data) => {
        this.setDetails = data;
      });
  }

  backHome() {
    this.$router.push({ path: '/set-list' });
  }
}

</script>
