<template>
  <div>
    <v-app-bar
      fixed app
      color="primary"
      dark
      src="/img/hero-images/shamrock.jpg"
      fade-img-on-scroll
      elevate-on-scroll
      shrink-on-scroll
      prominent
    >
      <v-toolbar-title>Dancing Shamrock</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon @click="switchSortType">
        <v-icon v-if="!showAllSets">mdi-sort-alphabetical-variant</v-icon>
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
            <v-list-item to="/soon">
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
          v-if="showAllSets || !showAllSets && isFavorite(set.id)"
          :key="set.id"
          @click="goToDanceDetails(set.id)"
        >
          <v-list-item-action @click.stop="" @mousedown.stop @touchstart.native.stop @click=setFavorite(set.id)>
            <v-btn icon>
              <v-icon v-if="!isFavorite(set.id)" color="grey lighten-1">mdi-star-outline</v-icon>
              <v-icon v-if="isFavorite(set.id)" color="yellow">mdi-star</v-icon>
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

  showAllSets = true;

  favorites: string[] = [];

  /* Lifecycle hooks */
  created(): void {
    fetch('/data/set-dances/index.json')
      .then((response) => response.json())
      .then((data) => {
        this.setList = data;
      });
  }

  mounted(): void {
    const favorites = localStorage.getItem('sets:favorites');
    console.log(favorites);
    if (favorites) {
      try {
        this.favorites = JSON.parse(favorites);
      } catch (e) {
        localStorage.removeItem('sets:favorites');
      }
    }
  }

  /* Methods */

  formattedStyles(entry: SetEntry): string {
    const names = entry.styles.map((name) => name[0].toUpperCase() + name.slice(1)).join(' - ');
    return names;
  }

  switchSortType(): void {
    this.showAllSets = !this.showAllSets;
  }

  setFavorite(setId: string): void {
    const index = this.favorites.indexOf(setId);
    if (index >= 0) {
      this.favorites.splice(index, 1);
    } else {
      this.favorites.push(setId);
    }

    localStorage.setItem('sets:favorites', JSON.stringify(this.favorites));
  }

  isFavorite(setId: string): boolean {
    return this.favorites.indexOf(setId) >= 0;
  }

  goToDanceDetails(danceId: string): void {
    this.$router.push({ path: `/set-details/${danceId}` });
  }
}

</script>
