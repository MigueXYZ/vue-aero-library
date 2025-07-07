<template>
    <div class="docs-page">
      <h1>Dark Aero Collapse</h1>
      <p>
        Collapsible panel styled with glassmorphism. Useful for showing/hiding extra content,
        with smooth animations and custom glow. Includes a horizontal divider and toggle arrow.
      </p>
  
      <!-- Props -->
      <section class="example">
        <h2>Props</h2>
        <DarkAeroTable :columns="columns" :data="collapseProps" />
      </section>
  
      <!-- Examples -->
      <section class="example">
        <h2>Examples</h2>
        <div v-for="ex in examples" :key="ex.title" class="example-block">
          <h3>{{ ex.title }}</h3>
  
          <DarkAeroCollapse :title="ex.title" :text-color="ex.textColor" :glow-color="ex.glowColor">
            <p>{{ ex.content }}</p>
          </DarkAeroCollapse>
  
          <DarkAeroCodeBlock :code="ex.code.trim()" language="html" />
        </div>
      </section>
    </div>
  </template>
  
  <script setup lang="ts">
  import DarkAeroCollapse   from '@/components/dark-aero/DarkAeroCollapse.vue'
  import DarkAeroTable      from '@/components/dark-aero/DarkAeroTable.vue'
  import DarkAeroCodeBlock  from '@/components/dark-aero/DarkAeroCodeBlock.vue'
  
  const columns = [
    { key: 'prop',        label: 'Prop' },
    { key: 'type',        label: 'Type' },
    { key: 'defaultVal',  label: 'Default' },
    { key: 'description', label: 'Description' }
  ]
  
  const collapseProps = [
    {
      prop: 'title',
      type: 'String',
      defaultVal: "''",
      description: 'Header label for the collapse (always visible)'
    },
    {
      prop: 'textColor',
      type: 'String',
      defaultVal: "''",
      description: 'Text color (affects header and content)'
    },
    {
      prop: 'glowColor',
      type: 'String',
      defaultVal: "''",
      description: 'Glow effect color applied to the container'
    }
  ]
  
  const examples = [
    {
      title: '',
      textColor: '',
      glowColor: '',
      content: 'This is a basic collapse with default styling.',
      code: `<DarkAeroCollapse>
    <p>This is a basic collapse with default styling.</p>
  </DarkAeroCollapse>`
    },
    {
      title: 'With Custom Glow',
      textColor: '#fffa8b',
      glowColor: 'rgba(255,128,0,0.5)',
      content: 'This version uses a bright yellow text and orange glow.',
      code: `<DarkAeroCollapse
    title="With Custom Glow"
    text-color="#fffa8b"
    glow-color="rgba(255,128,0,0.5)">
    <p>This version uses a bright yellow text and orange glow.</p>
  </DarkAeroCollapse>`
    }
  ]
  </script>
  
  <style scoped>
  .docs-page {
    padding: 2rem;
    color: #eee;
    font-family: sans-serif;
  }
  .example {
    margin-bottom: 2rem;
  }
  .example-block {
    margin-bottom: 1.5rem;
  }
  h3 {
    margin-bottom: 0.5rem;
    color: #fff;
  }
  </style>
  