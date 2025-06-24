import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/views/MainPage.vue';
import DarkAeroShowcaseButton from '../views/dark-aero/DarkAeroShowcaseButton.vue';
import DarkAeroShowcaseBalloon from '../views/dark-aero/DarkAeroShowcaseBalloon.vue';
import DarkAeroShowcaseCodeBlock from '../views/dark-aero/DarkAeroShowcaseCodeBlock.vue';

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
        },
        {
          path: 'balloon',
          name: 'Dark Aero Balloon',
          component: DarkAeroShowcaseBalloon,
        },
        {
          path: 'code-block',
          name: 'Dark Aero Code Block',
          component: DarkAeroShowcaseCodeBlock,
        }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;