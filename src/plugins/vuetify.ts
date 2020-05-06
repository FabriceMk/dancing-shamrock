import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.green.base,
        secondary: colors.green.darken2,
        accent: colors.orange.accent3,
        error: colors.purple.base,
        warning: colors.brown.base,
        info: colors.blueGrey.base,
        success: colors.teal.base,
      },
      dark: {
        primary: colors.green.base,
        secondary: colors.green.lighten2,
        accent: colors.orange.accent3,
        error: colors.purple.base,
        warning: colors.brown.base,
        info: colors.blueGrey.base,
        success: colors.teal.base,
      },
    },
    options: {
      customProperties: true,
    },
  },
});
