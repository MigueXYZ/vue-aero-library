<template>
  <div class="app-layout">
    <!-- Sidebar com props de personalização -->
    <DarkAeroSidebar
      :items="sidebarItems"
      color="#FFFFFF"
      childrenColor="#a6d8ff"
      align="left"
      glowSide="left"
      glowColor="rgba(0,128,255,0.6)"
    />


    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import DarkAeroSidebar from '@/components/dark-aero/DarkAeroSidebar.vue'

// Definição dos itens e links para cada rota
const sidebarItems = [
  { label: 'Intro',  href: '/' },
  {
    label: 'Dark Aero',
    children: [
      { label: 'Balloon',    href: '/dark/balloon'    },
      { label: 'Button',     href: '/dark/button'     },
      { label: 'Checkbox',  href: '/dark/checkbox'  },
      { label: 'Code Block', href: '/dark/codeblock' },
      { label: 'Radio Button' , href:'/dark/radio'},
      { label: 'Sidebar',    href: '/dark/sidebar'    },
      { label: 'Switch ',    href: '/dark/switch'    },
      { label: 'Table',      href: '/dark/table'      },
    ]
  }
]

const router = useRouter()
// Rola para topo após cada navegação
onMounted(() => {
  router.afterEach(() => window.scrollTo(0, 0))
})
</script>

<style scoped>
.app-layout {
  display: flex;
  height: 100vh;
}

.content {
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
}
</style>
