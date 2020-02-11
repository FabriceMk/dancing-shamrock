import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#4caf50',
        secondary: '#ff9800',
        accent: '#ff5722',
        error: '#9c27b0',
        warning: '#795548',
        info: '#607d8b',
        success: '#009688',
      },
      dark: {
        primary: '#4caf50',
        secondary: '#ff9800',
        accent: '#ff5722',
        error: '#9c27b0',
        warning: '#795548',
        info: '#607d8b',
        success: '#009688',
      },
    },
  },
});
