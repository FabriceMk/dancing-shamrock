<template>
  <div>
    Set Details
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

  mounted() {
    this.setDetails = new SetDetails('', '', []);
  }
}

</script>
