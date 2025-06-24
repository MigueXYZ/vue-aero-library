<template>
  <div class="docs-page">
    <h1>Dark Aero Button</h1>
    <p>Botão com visual glassmorphism, glow configurável e texto customizável.</p>

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
        :data="[
          { prop: 'color',      type: 'String',  defaultVal: 'rgba(255,255,255,0.08)', description: 'Cor de fundo e glow inicial' },
          { prop: 'glowColor',  type: 'String',  defaultVal: 'rgba(255, 255, 255, 0.5)',                   description: 'Cor do glow ao hover'    },
          { prop: 'textColor',  type: 'String',  defaultVal: 'rgba(255,255,255,0.7)', description: 'Cor do texto interno'     },
          { prop: 'disabled',   type: 'Boolean', defaultVal: 'false',                description: 'Desabilita o botão'      }
        ]"
      />
    </section>

    <!-- Exemplos -->
    <section class="example">
      <h2>Exemplos</h2>
      <div v-for="ex in examples" :key="ex.title" class="example-block">
        <h3>{{ ex.title }}</h3>
        <DarkAeroButton
          :color="ex.color"
          :glowColor="ex.glow"
          :textColor="ex.textColor"
          :disabled="ex.disabled || false"
          @click="showMessage(ex.title)"
        >
          {{ ex.label }}
        </DarkAeroButton>
        <p v-if="message[ex.title]" class="message">{{ message[ex.title] }}</p>
        <DarkAeroCodeBlock :code="ex.code.trim()" language="html" />
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import DarkAeroButton from '@/components/dark-aero/DarkAeroButton.vue'
import DarkAeroTable from '@/components/dark-aero/DarkAeroTable.vue'
import DarkAeroCodeBlock from '@/components/dark-aero/DarkAeroCodeBlock.vue'

const message = reactive({})

function showMessage(key) {
  message[key] = `Você clicou no botão “${key}”!`
}

const examples = [
  {
    title: 'Default',
    label: 'Default',
    code: `
<DarkAeroButton @click="showMessage('Default')">
  Default
</DarkAeroButton>
    `
  },
  {
    title: 'Primary',
    label: 'Primary',
    color: 'rgba(0,128,255,0.2)',
    glow: 'rgba(0,128,255,0.7)',
    textColor: '#FFD700',
    code: `
<DarkAeroButton
  :color="'rgba(0,128,255,0.2)'"
  :glowColor="'rgba(0,128,255,0.7)'"
  :textColor="'#FFD700'"
  @click="showMessage('Primary')"
>
  Primary
</DarkAeroButton>
    `
  }
  // adicione mais exemplos conforme necessário
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
