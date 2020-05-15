<template>
  <div class="about">
    <v-app-bar fixed app elevate-on-scroll color="white">
      <v-btn icon @click="back()">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>

      <v-toolbar-title>About</v-toolbar-title>
    </v-app-bar>

    <v-container>
      <h4>Description</h4>
      <p>
        Dancing Shamrock is a non-profit application to help people memorize Irish Set Dances.
        <br />It will be regularly updated to add more features and dances.
      </p>
      <p>
        Author:
        <a target="_blank" href="https://github.com/FabriceMk">FabriceMk</a>
      </p>
      <h4>Enable offline mode</h4>
      <p>
        You can add this website to your applications list on Android, iOS, Windows 10 or ChromeOS by clicking on
        <b>Add to Home screen</b> in Chrome/Firefox or Safari (iOS > 12), this will transform the webapp into an application
        that can even work when there is no network. Give it a try!
      </p>

      <div>
        <h4>Dances descriptions references</h4>
        <p>
          <ul>
            <li>
              <a target="_blank" href="https://setdanceteacher.ie">https://setdanceteacher.ie</a>
            </li>
            <li>
              <a target="_blank" href="https://danceminder.com">https://danceminder.com</a>
            </li>
          </ul>
        </p>
      </div>

      <div>
        <h4>License and sources</h4>
        <p>
          The whole application is distributed under the
          <a target="_blank" href="https://github.com/FabriceMk/dancing-shamrock/blob/master/LICENSE"
            >Open Source GPLv3 license</a
          >.
        </p>
        <p>
          Sources of the application are accessible
          <a target="_blank" href="https://github.com/FabriceMk/dancing-shamrock">HERE</a>.
        </p>
      </div>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
  name: 'AboutComponent',
})
export default class AboutComponent extends Vue {
  /** Navigates to the previous route in the history. */
  back(): void {
    // eslint-disable-next-line no-unused-expressions
    window.history?.length > 2 ? this.$router.go(-1) : this.$router.push('/');
  }
}
</script>
