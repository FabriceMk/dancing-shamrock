<template>
  <v-container fill-height>
    <v-row align="center" justify="center">
      <v-col cols="10">
        <v-img src="/img/illustrations/under_construction.svg"></v-img>
      </v-col>
      <h3>Coming Soon...</h3>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
  name: 'SoonComponent',
})
export default class SoonComponent extends Vue { }
</script>
