import Vue from 'vue';
import VueRouter from 'vue-router';
import SetListComponent from '../views/SetList.vue';
import SetDetailsComponent from '../views/SetDetails.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/set-list',
  },
  {
    path: '/set-list',
    component: SetListComponent,
  },
  {
    path: '/set-details/:id',
    component: SetDetailsComponent,
  },
  {
    path: '/about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/soon',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "soon" */ '../views/Soon.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
