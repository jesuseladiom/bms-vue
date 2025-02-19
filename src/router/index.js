import { createRouter, createWebHistory } from 'vue-router';
import Clients from '../pages/Clients.vue';
import Finance from '../pages/Finance.vue';
import RH from '../pages/RH.vue';

const routes = [
  { path: '/clients', component: Clients },
  { path: '/finance', component: Finance },
  { path: '/rh', component: RH },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
