<template>
  <div class="docs-page">
    <h1>Dark Aero Table</h1>
    <p>
      Generic table in glassmorphism style. Used to list props, data or any tabular set.
      It now accepts <code>textColor</code> and <code>glowColor</code> 🎨
    </p>

    <!-- PROPS -->
    <section class="example">
      <h2>Props</h2>
      <DarkAeroTable :columns="columns" :data="tableProps" />
    </section>

    <!-- BASIC USAGE -->
    <section class="example">
      <h2>Usage</h2>
      <p>Example table with orange glow and pale‑yellow text:</p>

      <DarkAeroTable
        :columns="demoCols"
        :data="demoData"
        text-color="#fffa8b"
        glow-color="rgba(255,99,0,.55)"
      />

      <!-- code block -->
      <DarkAeroCodeBlock :code="usageCode" language="html" />
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DarkAeroTable from '@/components/dark-aero/DarkAeroTable.vue'
import DarkAeroCodeBlock from '@/components/dark-aero/DarkAeroCodeBlock.vue'

/* ------------------------------------------------------------------
 *  Props description
 * ------------------------------------------------------------------*/
const columns = [
  { key: 'prop',        label: 'Prop' },
  { key: 'type',        label: 'Type' },
  { key: 'defaultVal',  label: 'Default' },
  { key: 'description', label: 'Description' }
]

const tableProps = [
  {
    prop: 'columns',
    type: 'Array<{ key: string, label: string }>',
    defaultVal: '[]',
    description: 'Table headers (key + label)'
  },
  {
    prop: 'data',
    type: 'Array<Record<string, any>>',
    defaultVal: '[]',
    description: 'Table rows (objects)'
  },
  {
    prop: 'textColor',
    type: 'String',
    defaultVal: '#fff',
    description: 'Text color of all cells'
  },
  {
    prop: 'glowColor',
    type: 'String',
    defaultVal: 'rgba(0,0,0,.45)',
    description: 'External glow (box‑shadow) and hover glow color'
  }
]

/* ------------------------------------------------------------------
 *  Interactive demo
 * ------------------------------------------------------------------*/
const demoCols = [
  { key: 'name', label: 'Name' },
  { key: 'age',  label: 'Age' }
]

const demoData = ref([
  { name: 'Alice', age: 30 },
  { name: 'Bruno', age: 25 }
])

/* ------------------------------------------------------------------
 *  Snippet for the code block
 * ------------------------------------------------------------------*/
const usageCode = `<template>
  <DarkAeroTable
    :columns="[{ key: 'name', label: 'Name' },
               { key: 'age',  label: 'Age' }]"
    :data="[{ name: 'Alice', age: 30 },
            { name: 'Bruno', age: 25 }]"
    text-color="#fffa8b"
    glow-color="rgba(255,99,0,.55)"
  />
</template>`
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
</style>
