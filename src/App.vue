<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-toolbar-title>Dancing Shamrock</v-toolbar-title>
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
            <v-list-item @click="() => {}">
              <v-list-item-content>
                <v-list-item-title>About</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>

    <v-bottom-navigation v-model="activeBtn" color="secondary" fixed="true">
      <v-btn value="sets" to="/set-list" >
        <span>Dance Sets</span>
        <v-icon>mdi-format-list-bulleted</v-icon>
      </v-btn>

      <v-btn value="favorites" to="/about">
        <span>Favorites</span>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
  name: 'App',
})
export default class App extends Vue {
  activeBtn = 1;

  showNav = true;
}
</script>
