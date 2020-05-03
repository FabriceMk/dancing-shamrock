<template>
  <div>
    <v-list two-line>
      <template v-for="set in setList">
        <v-list-item
          :key="set.id"
          :to="'/set-details/' + set.id"
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
            Figs: {{set.figuresCount}}
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
import SetDancesIndex from '@/assets/data/set-dances/index.json';

@Component({
  name: 'SetListComponent',
})
export default class SetListComponent extends Vue {
  setList: SetEntry[] = [];

  mounted() {
    this.setList = SetDancesIndex;
  }

  // eslint-disable-next-line class-methods-use-this
  formattedStyles(entry: SetEntry): string {
    const names = entry.styles.map((name) => name[0].toUpperCase() + name.slice(1)).join(' - ');
    return names;
  }

  // eslint-disable-next-line class-methods-use-this
  dummyMethod() { return 0; }
}

</script>
