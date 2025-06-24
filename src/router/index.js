import { createRouter, createWebHistory } from 'vue-router'

// Gera um objeto { './DarkAeroShowcaseButton.vue': () => import(...) , ... }
const darkModules = import.meta.glob('../views/dark-aero/*.vue')

// Mapeia cada arquivo para um objeto { path, name, component }
const darkChildren = Object.entries(darkModules).map(([filePath, loader]) => {
  // ex: '../views/dark-aero/DarkAeroShowcaseButton.vue'
  const fileName = filePath.split('/').pop().replace('.vue', '')  
  // remove prefix 'DarkAeroShowcase' (ou adapte para o prefixo que você usa)
  // e deixa tudo em minúsculas para URL
  const raw = fileName.replace(/^DarkAeroShowcase/, '')  
  const path = raw.charAt(0).toLowerCase() + raw.slice(1)  // e.g. 'button', 'balloon'
  const name = fileName                                  // e.g. 'DarkAeroShowcaseButton'
  return {
    path,
    name,
    component: loader
  }
})

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: () => import('@/views/MainPage.vue')
  },
  {
    path: '/dark',
    name: 'DarkAero',
    children: darkChildren
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
