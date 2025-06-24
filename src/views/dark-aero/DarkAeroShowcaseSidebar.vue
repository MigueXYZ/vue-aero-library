<template>
    <div class="docs-page">
      <h1>Dark Aero Sidebar</h1>
      <p>Menu lateral estilo Dark Aero (glassmorphism) com itens expansíveis e links via Vue Router.</p>
  
      <!-- Props -->
      <section class="example">
        <h2>Props</h2>
        <DarkAeroTable
          :columns="[
            { key: 'prop',        label: 'Prop'      },
            { key: 'type',        label: 'Tipo'      },
            { key: 'defaultVal',  label: 'Default'   },
            { key: 'description', label: 'Descrição' }
          ]"
          :data="sidebarProps"
        />
      </section>
  
      <!-- Uso -->
      <section class="example">
        <h2>Como usar</h2>
        <p>Importe e passe o array de itens com <code>href</code> ou <code>children</code>:</p> 
        <!-- Demo interativo -->
        <div class="interactive">
          <DarkAeroSidebar :items="demoItems" color="#FFD700" children_color="#00FFAA" />
        </div>
        <!-- Código de exemplo -->
        <DarkAeroCodeBlock :code="usageCode" language="vue" />
      </section>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import DarkAeroSidebar   from '@/components/dark-aero/DarkAeroSidebar.vue'
  import DarkAeroTable     from '@/components/dark-aero/DarkAeroTable.vue'
  import DarkAeroCodeBlock from '@/components/dark-aero/DarkAeroCodeBlock.vue'
  
  // Props para a tabela
  const sidebarProps = [
    { prop: 'items',          type: 'Array',  defaultVal: '[]',        description: 'Lista de { label, href?, children? }' },
    { prop: 'color',          type: 'String', defaultVal: '#ffffff',  description: 'Cor do texto dos itens principais' },
    { prop: 'children_color', type: 'String', defaultVal: '#a0cfff',  description: 'Cor do texto dos sub-itens' }
  ]
  
  // Snippet de uso (note o escape do fechamento do script)
  const usageCode = `<script setup>
  import DarkAeroSidebar from '@/components/dark-aero/DarkAeroSidebar.vue'
  
  const demoItems = [
    { label: 'Intro', href: '/' },
    {
      label: 'Components',
      children: [
        { label: 'Button',  href: '/dark/button' },
        { label: 'Balloon', href: '/dark/balloon' },
        { label: 'Table',   href: '/dark/table' }
      ]
    }
  ]
  <\\/script>
  
  <template>
    <DarkAeroSidebar
      :items="demoItems"
      color="#FFD700"
      children_color="#00FFAA"
    />
  </template>`
  
  // Dados para demo
  const demoItems = ref([
    { label: 'Intro', href: '/' },
    {
      label: 'Components',
      children: [
        { label: 'Button',  href: '/dark/button' },
        { label: 'Balloon', href: '/dark/balloon' },
        { label: 'Table',   href: '/dark/table' }
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
    text-align: center;
    justify-content: center;
    display: flex;
    margin-top: 1rem;
    height: 300px;
    overflow: auto;
    padding: 1rem;
    border-radius: 8px;
  }
  </style>
  