import { createRouter, createWebHistory } from 'vue-router';
import Clients from '../Pages/Clients.vue';
import Finance from '../Pages/Finance.vue';
import Rh from '../Pages/Rh.vue';

const routes = [
  { path: '/clients', component: Clients },
  { path: '/finance', component: Finance },
  { path: '/rh', component: Rh },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
