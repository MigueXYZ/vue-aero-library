<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import DarkAeroSidebar from '@/components/dark-aero/DarkAeroSidebar.vue'

const sidebarItems = [
  { label: 'Intro', href: '/' },
  {
    label: 'Dark Aero', children: [
      { label: 'Balloon', href: '/dark/balloon' },
      { label: 'Button',  href: '/dark/button'  },
      { label: 'Code',    href: '/dark/codeblock' },
      { label: 'Table',   href: '/dark/table'   }
    ]
  }
]

const router = useRouter()
onMounted(() => router.afterEach(() => window.scrollTo(0,0)))
</script>

<template>
  <div class="app-layout">
    <!-- <router-link> ou <a> não: usar <router-link> dentro do sidebar -->
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
