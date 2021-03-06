import Vue from 'vue';
import Router from 'vue-router';
import Main from './views/publics/Main.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/publics/About.vue'),
    },
    {
      path: '/project/:service/:owner/:project',
      name: 'project',
      component: () => import('./views/inspections/Project.vue'),
    },
    {
      path: '/project/:service/:owner/:project/:commit',
      name: 'commitResult',
      component: () => import('./views/inspections/CommitResult.vue'),
    },
  ],
});
