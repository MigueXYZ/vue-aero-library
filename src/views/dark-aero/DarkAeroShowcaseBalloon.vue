<template>
    <div class="docs-page">
      <h1>Dark Aero Balloon</h1>
      <p>Uma tooltip glassmorphism/skeuomorphism ativada por clique, com ponta e cor de texto configuráveis.</p>
  
      <!-- Props -->
      <section class="example">
        <h2>Props</h2>
        <table>
          <thead>
            <tr><th>Prop</th><th>Tipo</th><th>Default</th><th>Descrição</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><code>position</code></td>
              <td>String</td>
              <td><code>top-left</code></td>
              <td>Define onde a ponta do balão aparece (<code>top-left</code> | <code>top-right</code> | <code>bottom-left</code> | <code>bottom-right</code>).</td>
            </tr>
            <tr>
              <td><code>textColor</code></td>
              <td>String</td>
              <td><code>#0ff</code></td>
              <td>Cor do texto dentro do balão (qualquer valor CSS válido).</td>
            </tr>
          </tbody>
        </table>
      </section>
  
      <!-- Uso -->
      <section class="example">
        <h2>Como usar</h2>
        <p>Toggle simples de tooltip:</p>
  
        <!-- usa o componente de code block -->
        <DarkAeroCodeBlock :code="usageCode" language="html" />
  
        <div class="interactive">
          <DarkAeroButton @click="show = !show" class="trigger-btn">
            {{ show ? 'Ocultar' : 'Mostrar' }} Tooltip
          </DarkAeroButton>
          <DarkAeroBalloon v-if="show" position="top-left" textColor="#0ff">
            Exemplo de tooltip!
          </DarkAeroBalloon>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import DarkAeroBalloon from '@/components/dark-aero/DarkAeroBalloon.vue'
  import DarkAeroCodeBlock from '@/components/dark-aero/DarkAeroCodeBlock.vue'
  import DarkAeroButton from '@/components/dark-aero/DarkAeroButton.vue'
  
  const show = ref(false)
  
  const usageCode = `
  <template>
    <button @click="show = !show">Toggle</button>
    <DarkAeroBalloon
      v-if="show"
      position="top-left"
      textColor="#0ff"
    >
      Exemplo de tooltip!
    </DarkAeroBalloon>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import DarkAeroBalloon from '@/components/dark-aero/DarkAeroBalloon.vue'
  
  const show = ref(false)
  <\/script>
  `
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
  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 1rem;
    background: rgba(30, 30, 30, 0.4);
    backdrop-filter: blur(12px);
    border-radius: 8px;
    overflow: hidden;
    /* glassmorphism shadow */
    box-shadow:
      inset 0 1px 0 rgba(255,255,255,0.05),
      0 4px 12px rgba(0,0,0,0.4);
}

  th, td {
    border: none;
    padding: 0.75rem 1rem;
    text-align: left;
}

/* Header styling */
th {
    background: rgba(255, 255, 255, 0.05);
    color: #fff;
    font-weight: 500;
}

/* Row backgrounds */
tbody tr:nth-child(odd) td {
    background: rgba(255, 255, 255, 0.02);
}
tbody tr:nth-child(even) td {
    background: rgba(255, 255, 255, 0.01);
}
  .trigger-btn {
    padding: 0.5rem 1rem;
    background: rgba(255,255,255,0.1);
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    margin-top: 1rem;
  }
  .interactive {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    margin-top: 0.5rem;
  }
  </style>
