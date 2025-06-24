<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import DarkAeroSidebar from '@/components/dark-aero/DarkAeroSidebar.vue'

// Exemplo de itens; troque pelos seus itens reais ou props
const sidebarItems = [
  { label: 'Intro', href: '/' },
  {
    label: 'Dark Aero', children: [
      { label: 'Balloon', href: '/dark/balloon' },
      { label: 'Button', href: '/dark/button' },
      { label: 'Code Block', href: '/dark/codeblock' },
      { label: 'Table', href: '/dark/table' }
    ]
  }
]

const router = useRouter()

onMounted(() => {
  // opcional: highlight do item ativo
  router.afterEach((to) => {
    // por exemplo, scroll topo ou marcação
    window.scrollTo(0, 0)
  })
})
</script>

<template>
  <div class="app-layout">
    <DarkAeroSidebar :items="sidebarItems" />
    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.app-layout {
  display: flex;
  height: 100vh;
}

.dark-aero-sidebar {
  flex: 0 0 250px;
  /* largura fixa */
  overflow-y: auto;
}

.content {
  flex: 1;
  padding: 2rem;
  overflow-y: auto;

}
</style>
