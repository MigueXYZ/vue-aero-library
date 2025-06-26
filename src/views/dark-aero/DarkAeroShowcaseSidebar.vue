<template>
  <div class="docs-page">
    <h1>Dark Aero Sidebar</h1>
    <p>
      Lateral menu in <em>Dark Aero</em> style.
    </p>

    <!-- PROPS ------------------------------------------------------------ -->
    <section class="example">
      <h2>Props</h2>
      <DarkAeroTable :columns="columns" :data="sidebarProps" />
    </section>

    <!-- USAGE ------------------------------------------------------------- -->
    <section class="example">
      <h2>Usage</h2>
      <p>Full example with collapse and glow on the right:</p>

      <!-- LIVE DEMO -->
      <div class="interactive">
        <DarkAeroSidebar
          :items="demoItems"
          color="#FFD700"
          childrenColor="#00FFAA"
          align="left"
          glowSide="right"
          glowColor="rgba(255,215,0,.6)"
        />
      </div>

      <!-- CODE BLOCK -->
      <DarkAeroCodeBlock :code="usageCode" language="html" />
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import DarkAeroSidebar from '@/components/dark-aero/DarkAeroSidebar.vue'
import DarkAeroTable from '@/components/dark-aero/DarkAeroTable.vue'
import DarkAeroCodeBlock from '@/components/dark-aero/DarkAeroCodeBlock.vue'

/* ------------------------------------------------------------------ */
/*   Table data                                                       */
/* ------------------------------------------------------------------ */
const columns = [
  { key: 'prop',        label: 'Prop'        },
  { key: 'type',        label: 'Type'        },
  { key: 'defaultVal',  label: 'Default'     },
  { key: 'description', label: 'Description' }
]

const sidebarProps = [
  {
    prop: 'items', type: 'Array', defaultVal: '[]',
    description: 'Array of objects { label, href?, children? }'
  },
  {
    prop: 'color', type: 'String', defaultVal: '#ffffff',
    description: 'Text color of top‑level items'
  },
  {
    prop: 'childrenColor', type: 'String', defaultVal: '#a0cfff',
    description: 'Text color of sub‑items'
  },
  {
    prop: 'align', type: 'String', defaultVal: 'left',
    description: 'Content alignment: left | center | right'
  },
  {
    prop: 'glowSide', type: 'String', defaultVal: 'left',
    description: 'Side of the glow bar: left | right'
  },
  {
    prop: 'glowColor', type: 'String', defaultVal: 'rgba(0,128,255,.55)',
    description: 'Glow bar color'
  }
]

/* ------------------------------------------------------------------ */
/*   Usage code string                                                */
/* ------------------------------------------------------------------ */
const usageCode = `
<script setup>
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
/*   Items for the live demo                                          */
/* ------------------------------------------------------------------ */
const demoItems = ref([
  { label: 'Intro', href: '/' },
  {
    label: 'Components',
    children: [
      { label: 'Button',  href: '/dark/button' },
      { label: 'Balloon', href: '/dark/balloon' },
      { label: 'Table',   href: '/dark/table'  }
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
  margin-bottom: 0.75rem;
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
