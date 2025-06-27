<template>
    <div class="docs-page">
      <h1>Dark Aero Switch</h1>
      <p>Toggle switch with a glassmorphism look, configurable glow and full <code>v-model</code> support.</p>
  
      <!-- Props -->
      <section class="example">
        <h2>Props</h2>
        <DarkAeroTable :columns="columns" :data="switchProps" />
      </section>
  
      <!-- Examples -->
      <section class="example">
        <h2>Examples</h2>
        <div v-for="ex in examples" :key="ex.title" class="example-block">
          <h3>{{ ex.title }}</h3>
  
          <DarkAeroSwitch
            v-model="state[ex.title]"
            :rounded="ex.rounded === undefined ? true : ex.rounded"
            :color="ex.color"
            :glowColor="ex.glow"
            :offColor="ex.offColor || 'rgba(255,255,255,0.08)'"
            :disabled="ex.disabled || false"
          />
  
          <p class="message">{{ state[ex.title] ? 'On' : 'Off' }}</p>
          <DarkAeroCodeBlock :code="ex.code.trim()" language="html" />
        </div>
      </section>
    </div>
  </template>
  
  <script setup lang="ts">
  import { reactive } from 'vue'
import DarkAeroSwitch     from '@/components/dark-aero/DarkAeroSwitch.vue'
import DarkAeroTable      from '@/components/dark-aero/DarkAeroTable.vue'
import DarkAeroCodeBlock  from '@/components/dark-aero/DarkAeroCodeBlock.vue'

const columns = [
  { key: 'prop',        label: 'Prop'       },
  { key: 'type',        label: 'Type'       },
  { key: 'defaultVal',  label: 'Default'    },
  { key: 'description', label: 'Description'}
]

const switchProps = [
  {
    prop        : 'modelValue',
    type        : 'Boolean',
    defaultVal  : 'false',
    description : 'The ON/OFF state of the switch (two-way bound with v-model)'
  },
  {
    prop        : 'color',
    type        : 'String',
    defaultVal  : 'rgba(255,255,255,0.2)',
    description : 'Base background of the thumb and active track (glass-like)'
  },
  {
    prop        : 'glowColor',
    type        : 'String',
    defaultVal  : 'rgba(255,255,255,0.5)',
    description : 'Soft glow applied when active or hovered'
  },
  {
    prop        : 'offColor',
    type        : 'String',
    defaultVal  : 'rgba(255,255,255,0.08)',
    description : 'Background of the track when the switch is off'
  },
  {
    prop        : 'rounded',
    type        : 'Boolean',
    defaultVal  : 'true',
    description : 'Toggle rounded style for thumb and track'
  },
  {
    prop        : 'disabled',
    type        : 'Boolean',
    defaultVal  : 'false',
    description : 'Disables interaction and reduces opacity'
  }
]

const state = reactive({
  Default  : false,
  Primary  : false,
  Disabled : false
})

const examples = [
  {
    title : 'Default',
    code  : `<DarkAeroSwitch v-model="state.Default" />`
  },
  {
    title : 'Primary',
    color : 'rgba(0,128,255,0.2)',
    glow  : 'rgba(0,128,255,0.7)',
    rounded: false,
    code  : `<DarkAeroSwitch
  v-model="state.Primary"
  :color="'rgba(0,128,255,0.2)'"
  :rounded="false"
  :glowColor="'rgba(0,128,255,0.7)'" />`
  },
  {
    title    : 'Disabled',
    disabled : true,
    code     : `<DarkAeroSwitch v-model="state.Disabled" :disabled="true" />`
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
  .message {
    margin: 0.5rem 0;
    color: #8f8;
  }
  </style>
  