import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

Vue.use(VueRouter);

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
