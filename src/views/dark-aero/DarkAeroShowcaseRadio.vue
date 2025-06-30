<template>
    <div class="docs-page">
      <h1>Dark Aero Radio</h1>
      <p>Radio button component in Dark Aero (glassmorphism) style with customizable state and label.</p>
  
      <!-- Props -->
      <section class="example">
        <h2>Props</h2>
        <DarkAeroTable :columns="[
          { key: 'prop', label: 'Prop' },
          { key: 'type', label: 'Type' },
          { key: 'defaultVal', label: 'Default' },
          { key: 'description', label: 'Description' }
        ]" :data="radioProps" />
      </section>
  
      <!-- Usage -->
      <section class="example">
        <h2>Usage</h2>
        <p>Example using <code>v-model:checked</code>:</p>
  
        <div class="interactive">
          <DarkAeroRadio
            name="fruit"
            :value="'apple'"
            v-model:checked="selected"
          >
            Apple
          </DarkAeroRadio>
          <DarkAeroRadio
            name="fruit"
            :value="'banana'"
            v-model:checked="selected"
          >
            Banana
          </DarkAeroRadio>
          <p>Selected: <strong>{{ selected }}</strong></p>
        </div>
  
        <DarkAeroCodeBlock :code="usageCode" language="html" />
      </section>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import DarkAeroRadio from '@/components/dark-aero/DarkAeroRadio.vue'
  import DarkAeroTable from '@/components/dark-aero/DarkAeroTable.vue'
  import DarkAeroCodeBlock from '@/components/dark-aero/DarkAeroCodeBlock.vue'
  
  const selected = ref('apple')
  
  const radioProps = [
    { prop: 'checked', type: 'Boolean', defaultVal: 'false', description: 'If the radio is selected' },
    { prop: 'value', type: 'String | Number | Boolean', defaultVal: 'undefined', description: 'Value of the radio option' },
    { prop: 'name', type: 'String', defaultVal: 'undefined', description: 'Name for radio group behavior' },
    { prop: 'disabled', type: 'Boolean', defaultVal: 'false', description: 'Disables interaction' },
    { prop: 'borderColor', type: 'String', defaultVal: 'rgba(255,255,255,0.2)', description: 'Border color of the radio circle' },
    { prop: 'dotColor', type: 'String', defaultVal: 'rgba(0,128,255,0.8)', description: 'Color of the selected dot' }
  ]
  
  const usageCode = `<template>
    <DarkAeroRadio
      name="fruit"
      :value="'apple'"
      v-model:checked="selected"
    >
      Apple
    </DarkAeroRadio>
    <DarkAeroRadio
      name="fruit"
      :value="'banana'"
      v-model:checked="selected"
    >
      Banana
    </DarkAeroRadio>
    <p>Selected: {{ selected }}</p>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const selected = ref('apple')
  <\/script>`

  </script>
  
  <style scoped>
  .docs-page {
    padding: 2rem;
    color: #eee;
    font-family: sans-serif;
  }
  
  .example {
    margin-bottom: 2rem;
    text-align: center;
    align-items: center;
    justify-content: center;
  }
  
  .interactive {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    margin-top: 1.5rem;
  }
  </style>
  