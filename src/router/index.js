import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/views/MainPage.vue';
import DarkAeroButton from '@/views/dark-aero/DarkAeroShowcaseButton.vue';
import DarkAeroShowcaseButton from '../views/dark-aero/DarkAeroShowcaseButton.vue';

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage,
  },
  {
    path: '/dark',
    name: 'DarkAero',
    children:[
        {
          path: 'button',
          name: 'Dark Aero Button',
          component: DarkAeroShowcaseButton,
        }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;