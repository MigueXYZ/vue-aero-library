<template>
    <div class="showcase">
      <h1>Dark Aero Showcase</h1>
  
      <DarkAeroButton
        :color="'rgba(255, 255, 255, 0.08)'"
        :glowColor="'rgba(0, 128, 255, 0.5)'"
        @click="showMessage"
      >
        Click Me
      </DarkAeroButton>
  
      <p v-if="message">{{ message }}</p>
  
      <p>Code:</p>
      
      <!-- wrapper que centraliza e limita largura -->
      <div class="code-wrapper">
        <DarkAeroCodeBlock
          :code="basicButton"
          language="html"
        />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import DarkAeroButton from '@/components/dark-aero/DarkAeroButton.vue'
  import DarkAeroCodeBlock from '@/components/dark-aero/DarkAeroCodeBlock.vue'
  
  const message = ref('')
  const basicButton = ref(
    `<DarkAeroButton
      :color="'rgba(255, 255, 255, 0.08)'"
      :glowColor="'rgba(0, 128, 255, 0.5)'"
      :disabled="false"
      @click="showMessage"
    >
      Click Me
    </DarkAeroButton>`.trim()
  )
  
  function showMessage() {
    message.value = 'Button clicked! Welcome to the Dark Aero Showcase!'
  }
  </script>
  
  <style scoped>
  .showcase {
    padding: 2rem;
  }
  
  /* Esse wrapper impede que o código estique 100% da tela */
  .code-wrapper {
    max-width: 800px;
    margin: 0.5rem auto;  /* centraliza */
  }
  </style>
  