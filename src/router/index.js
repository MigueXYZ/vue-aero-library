import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/views/MainPage.vue';
import Win7Button from '@/views/Win7/Win7Button.vue';

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage,
  },
  {
    path: '/win7',
    name: 'Win7',
    children:[
        {
          path: 'button',
          name: 'Win7Button',
          component: Win7Button,
        }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;