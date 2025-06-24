<template>
    <div class="docs-page">
      <h1>Dark Aero Button – Variantes de Cor e Texto</h1>
      
      <section v-for="example in examples" :key="example.title" class="example">
        <h2>{{ example.title }}</h2>
        <p>{{ example.description }}</p>
        
        <!-- O botão de demonstração -->
        <DarkAeroButton
          :color="example.color"
          :glowColor="example.glow"
          :textColor="example.textColor"
          @click="showClick(example.title)"
        >
          {{ example.label }}
        </DarkAeroButton>
        
        <p v-if="message[example.title]" class="message">
          {{ message[example.title] }}
        </p>
        
        <!-- O bloco de código correspondente -->
        <DarkAeroCodeBlock
          class="code-block"
          :code="example.code.trim()"
          language="html"
        />
      </section>
    </div>
  </template>
  
  <script setup>
  import { reactive, ref } from 'vue'
  import DarkAeroButton from '@/components/dark-aero/DarkAeroButton.vue'
  import DarkAeroCodeBlock from '@/components/dark-aero/DarkAeroCodeBlock.vue'
  
  const message = reactive({})
  
  function showClick(key) {
    message[key] = `Você clicou no botão “${key}”!`
  }
  
  const examples = [
    {
      title: 'Padrão (Branco)',
      description: 'Botão com glow sutil branco e texto padrão.',
      label: 'Default',
      code: `
  <DarkAeroButton
    @click="showClick('Padrão (Branco)')"
  >
    Default
  </DarkAeroButton>
      `
    },
    {
      title: 'Primária (Azul)',
      description: 'Botão azul com glow forte e texto amarelo.',
      label: 'Primary',
      color: 'rgba(0, 128, 255, 0.2)',
      glow: 'rgba(0, 128, 255, 0.7)',
      textColor: '#FFD700',
      code: `
  <DarkAeroButton
    :color="'rgba(0, 128, 255, 0.2)'"
    :glowColor="'rgba(0, 128, 255, 0.7)'"
    :textColor="'#FFD700'"
    @click="showClick('Primária (Azul)')"
  >
    Primary
  </DarkAeroButton>
      `
    },
    {
      title: 'Sucesso (Verde)',
      description: 'Botão verde para ações bem-sucedidas com texto branco.',
      label: 'Success',
      color: 'rgba(0, 200, 83, 0.2)',
      glow: 'rgba(0, 200, 83, 0.6)',
      textColor: 'white',
      code: `
  <DarkAeroButton
    :color="'rgba(0, 200, 83, 0.2)'"
    :glowColor="'rgba(0, 200, 83, 0.6)'"
    :textColor="'white'"
    @click="showClick('Sucesso (Verde)')"
  >
    Success
  </DarkAeroButton>
      `
    },
    {
      title: 'Perigo (Vermelho)',
      description: 'Botão vermelho para ações críticas com texto preto.',
      label: 'Danger',
      color: 'rgba(255, 0, 0, 0.2)',
      glow: 'rgba(255, 0, 0, 0.6)',
      textColor: 'black',
      code: `
  <DarkAeroButton
    :color="'rgba(255, 0, 0, 0.2)'"
    :glowColor="'rgba(255, 0, 0, 0.6)'"
    :textColor="'black'"
    @click="showClick('Perigo (Vermelho)')"
  >
    Danger
  </DarkAeroButton>
      `
    }
  ]
  </script>
  
  <style scoped>
  .docs-page {
    padding: 2rem;
    color: #eee;
  }
  
  .example {
    margin-bottom: 3rem;
  }
  
  .example h2 {
    margin-bottom: 0.5rem;
    color: #fff;
  }
  
  .example p {
    margin-bottom: 1rem;
  }
  
  .message {
    margin: 0.5rem 0 1rem;
    color: #8f8;
  }
  
  .code-block {
    margin-top: 1rem;
  }
  </style>
  