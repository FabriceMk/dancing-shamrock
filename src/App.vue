<template>
  <v-app app>
    <v-content>
      <router-view />
    </v-content>

    <v-bottom-navigation v-model="activeNav" color="secondary" fixed>
      <v-btn value="sets" to="/set-list" >
        <span>Dance Sets</span>
        <v-icon>mdi-format-list-bulleted</v-icon>
      </v-btn>

      <v-btn value="glossary" to="/soon">
        <span>Glossary</span>
        <v-icon>mdi-book-alphabet</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<style>
  .v-item-group.v-bottom-navigation .v-btn.v-size--default {
      height: inherit;
  }
</style>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
  name: 'App',
})
export default class App extends Vue {
  activeNav = 'sets';
}
</script>
