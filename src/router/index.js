import { createRouter, createWebHistory } from 'vue-router';
import List from '../views/List.vue';

const routes = [
  {
    path: '/',
    name: 'List',
    component: List,
  },
  {
    path: '/about',
    name: 'About',

    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
