<template>
  <v-container>
    Hello {{data.name}}!
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'HelloWorld',

  data: () => ({
    name: 'Clover',
  }),
});
</script>
