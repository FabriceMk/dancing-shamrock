<template>
  <v-container fill-height>
    <v-row align="center" justify="center">
      <v-col cols="10">
        <v-img src="/img/illustrations/under_construction.svg"></v-img>
      </v-col>
      <p class="title">Coming Soon...</p>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

/** Component that displays a 'Coming Soon' screen. For upcmoing features. */
@Component({
  name: 'SoonComponent',
})
export default class SoonComponent extends Vue { }
</script>
