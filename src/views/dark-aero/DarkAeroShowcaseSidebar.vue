<template>
  <div class="docs-page">
    <h1>Dark Aero Sidebar</h1>
    <p>
      Menu lateral no estilo <em>Dark Aero</em>
    </p>


    <!-- PROPS ------------------------------------------------------------ -->
    <section class="example">
      <h2>Props</h2>
      <DarkAeroTable :columns="[
        { key: 'prop', label: 'Prop' },
        { key: 'type', label: 'Tipo' },
        { key: 'defaultVal', label: 'Default' },
        { key: 'description', label: 'Descrição' }
      ]" :data="sidebarProps" />
    </section>

    <!-- USO -------------------------------------------------------------- -->
    <section class="example">
      <h2>Como usar</h2>
      <p>Exemplo completo com colapso e glow à direita:</p>

      <!-- DEMO AO VIVO -->
      <div class="interactive">
        <DarkAeroSidebar :items="demoItems" color="#FFD700" childrenColor="#00FFAA" align="left" glowSide="right"
          glowColor="rgba(255,215,0,.6)" />
      </div>

      <!-- BLOCO DE CÓDIGO -->
      <DarkAeroCodeBlock :code="usageCode" language="html" />
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import DarkAeroSidebar from '@/components/dark-aero/DarkAeroSidebar.vue'
import DarkAeroTable from '@/components/dark-aero/DarkAeroTable.vue'
import DarkAeroCodeBlock from '@/components/dark-aero/DarkAeroCodeBlock.vue'

/* ------------------------------------------------------------------ */
/*   Dados da tabela de props                                         */
/* ------------------------------------------------------------------ */
const sidebarProps = [
  {
    prop: 'items', type: 'Array', defaultVal: '[]',
    description: 'Lista de objetos { label, href?, children? }'
  },

  {
    prop: 'color', type: 'String', defaultVal: '#ffffff',
    description: 'Cor do texto dos itens principais'
  },

  {
    prop: 'childrenColor', type: 'String', defaultVal: '#a0cfff',
    description: 'Cor do texto dos sub-itens'
  },

  {
    prop: 'align', type: 'String', defaultVal: 'left',
    description: 'Alinhamento: left | center | right'
  },

  {
    prop: 'glowSide', type: 'String', defaultVal: 'left',
    description: 'Lado da barra de glow: left | right'
  },

  {
    prop: 'glowColor', type: 'String',
    defaultVal: 'rgba(0,128,255,.55)',
    description: 'Cor da barra de glow'
  }
]

/* ------------------------------------------------------------------ */
/*   Código de uso (exibido no <CodeBlock>)                           */
/* ------------------------------------------------------------------ */
const usageCode = `
<script setup>
import DarkAeroSidebar from '@/components/dark-aero/DarkAeroSidebar.vue'

const demoItems = [
  { label: 'Intro', href: '/' },
  {
    label: 'Components',
    children: [
      { label: 'Button',  href: '/dark/button' },
      { label: 'Balloon', href: '/dark/balloon' },
      { label: 'Table',   href: '/dark/table'  }
    ]
  }
]
<\/script>

<template>
  <DarkAeroSidebar
    :items="demoItems"
    color="#FFD700"
    childrenColor="#00FFAA"
    align="left"
    glowSide="right"
    glowColor="rgba(255,215,0,.6)"
  />
</template>
`.trim()

/* ------------------------------------------------------------------ */
/*   Itens para o demo interativo                                     */
/* ------------------------------------------------------------------ */
const demoItems = ref([
  { label: 'Intro', href: '/' },
  {
    label: 'Components',
    children: [
      { label: 'Button', href: '/dark/button' },
      { label: 'Balloon', href: '/dark/balloon' },
      { label: 'Table', href: '/dark/table' }
    ]
  }
])
</script>

<style scoped>
.docs-page {
  padding: 2rem;
  color: #eee;
  font-family: sans-serif;
}

.example {
  margin-bottom: 2.5rem;
}

.example h2 {
  margin-bottom: .75rem;
  color: #fff;
}

.interactive {
  display: flex;
  justify-content: center;
  margin: 1rem 0;
  padding: 1rem;
  overflow: auto;
  height: 300px;
}
</style>
