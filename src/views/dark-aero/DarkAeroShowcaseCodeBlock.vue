<template>
    <div class="docs-page">
      <h1>Dark Aero CodeBlock</h1>
      <p>Componente para exibir blocos de código com highlight(PrismJS), números de linha e botão de copiar, no estilo glassmorphism.</p>
  
      <!-- Props -->
      <section class="example">
        <h2>Props</h2>
        <DarkAeroTable
          :columns="[
            { key: 'prop',       label: 'Prop'      },
            { key: 'type',       label: 'Tipo'      },
            { key: 'defaultVal', label: 'Default'   },
            { key: 'description',label: 'Descrição' }
          ]"
          :data="[
            { prop: 'code',      type: 'String', defaultVal: '\'\'',                   description: 'O código a ser exibido no bloco' },
            { prop: 'language',  type: 'String', defaultVal: 'javascript',        description: 'Linguagem para highlight (prism)' }
          ]"
        />
      </section>
  
      <!-- Uso -->
      <section class="example">
        <h2>Como usar</h2>
        <p>Exemplo básico:</p>
        <DarkAeroCodeBlock
          :code="sampleCode"
          language="html"
        />
        <p>Code:</p>
        <DarkAeroCodeBlock
          :code="showcaseCode"
          language="html"
        />
      </section>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import DarkAeroTable from '@/components/dark-aero/DarkAeroTable.vue'
  import DarkAeroCodeBlock from '@/components/dark-aero/DarkAeroCodeBlock.vue'
  
  const sampleCode = `<template>\n  <div>Hello, Dark Aero Code Block!</div>\n</template>`
    const showcaseCode = `<template>\n  <DarkAeroCodeBlock\n    :code="sampleCode"\n    language="html"\n  />\n</template>\n\n<script setup>\n\tconst sampleCode = \`<template>\\n  <div>Hello, Dark Aero Code Block!</div>\\n</template>\`\n<\/script>`
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
  .code-block {
    background: rgba(30,30,30,0.4);
    backdrop-filter: blur(12px);
    padding: 1rem;
    border-radius: 8px;
    font-family: 'Source Code Pro', monospace;
    color: #fff;
    overflow-x: auto;
    white-space: pre;
    margin-top: 1rem;
  }
  </style>
  