<template>
  <div>
    <v-list two-line>
      <v-list-item
        v-for="set in setList"
        :key="set.id"
      >
        <v-list-item-content>
          <v-list-item-title v-text="set.name"></v-list-item-title>
          <v-list-item-subtitle v-text="set.figuresCount"></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { SetEntry } from '@/models/SetEntry';
import SetDancesIndex from '@/assets/data/set-dances/index.json';

@Component({
  name: 'SetListComponent',
})
export default class SetList extends Vue {
  setList: SetEntry[] = [];

  mounted() {
    this.setList = SetDancesIndex;
  }
}

</script>
