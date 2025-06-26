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
            :color="ex.color"
            :glowColor="ex.glow"
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
  
  /* ------------------------------------------------------------------
   *  Table definitions
   * ----------------------------------------------------------------*/
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
      description : 'On / off state (bind with v‑model)'
    },
    {
      prop        : 'color',
      type        : 'String',
      defaultVal  : 'rgba(255,255,255,0.08)',
      description : 'Base color of track and thumb'
    },
    {
      prop        : 'glowColor',
      type        : 'String',
      defaultVal  : 'rgba(255,255,255,0.5)',
      description : 'Glow color when switched on'
    },
    {
      prop        : 'offColor',
      type        : 'String',
      defaultVal  : 'rgba(255,255,255,0.08)',
      description : 'Track color when switched off'
    },
    {
      prop        : 'disabled',
      type        : 'Boolean',
      defaultVal  : 'false',
      description : 'Disables interaction'
    }
  ]
  
  /* ------------------------------------------------------------------
   *  Reactive demo state
   * ----------------------------------------------------------------*/
  const state = reactive({
    Default  : false,
    Primary  : false,
    Disabled : false
  })
  
  /* ------------------------------------------------------------------
   *  Example definitions
   * ----------------------------------------------------------------*/
  const examples = [
    {
      title : 'Default',
      code  : `<AeroSwitch v-model="state.Default" />`
    },
    {
      title : 'Primary',
      color : 'rgba(0,128,255,0.2)',
      glow  : 'rgba(0,128,255,0.7)',
      code  : `<AeroSwitch
    v-model="state.Primary"
    :color="'rgba(0,128,255,0.2)'"
    :glowColor="'rgba(0,128,255,0.7)'" />`
    },
    {
      title   : 'Disabled',
      disabled: true,
      code    : `<AeroSwitch v-model="state.Disabled" :disabled="true" />`
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
  