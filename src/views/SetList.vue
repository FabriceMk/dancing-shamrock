<template>
  <div>
    <v-app-bar color="primary" dark>
      <div class="d-flex align-center">
        <v-toolbar-title>Dancing Shamrock</v-toolbar-title>
      </div>

      <v-spacer></v-spacer>

      <v-btn icon @click="switchSortType">
        <v-icon v-if="alphabeticalSortType">mdi-sort-alphabetical-variant</v-icon>
        <v-icon v-else>mdi-playlist-star</v-icon>
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
    </v-app-bar>

    <v-list two-line>
      <template v-for="set in setList">
        <v-list-item
          :key="set.id"
          @click="goToDanceDetails(set.id)"
        >
          <v-list-item-action @click.stop="" @mousedown.stop @touchstart.native.stop>
            <v-btn icon>
              <v-icon color="grey lighten-1">mdi-star-outline</v-icon>
            </v-btn>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title v-text="set.name"></v-list-item-title>
            <v-list-item-subtitle v-text="formattedStyles(set)"></v-list-item-subtitle>
          </v-list-item-content>

          <v-chip
            class="ma-2"
          >
             {{ set.figuresCount }} Figs
          </v-chip>
        </v-list-item>
      </template>
    </v-list>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import SetEntry from '@/models/SetEntry';

@Component({
  name: 'SetListComponent',
})
export default class SetListComponent extends Vue {
  setList: SetEntry[] = [];

  alphabeticalSortType = true;

  /* Lifecycle hooks */
  created(): void {
    fetch('/data/set-dances/index.json')
      .then((response) => response.json())
      .then((data) => {
        this.setList = data;
      });
  }

  /* Methods */

  formattedStyles(entry: SetEntry): string {
    const names = entry.styles.map((name) => name[0].toUpperCase() + name.slice(1)).join(' - ');
    return names;
  }

  switchSortType(): void {
    this.alphabeticalSortType = !this.alphabeticalSortType;
  }

  goToDanceDetails(danceId: string): void {
    this.$router.push({ path: `/set-details/${danceId}` });
  }
}

</script>
