<template>
    <div class="docs-page">
      <h1>Dark Aero Table</h1>
      <p>Componente genérico de tabela no estilo Dark Aero (glassmorphism) para documentar props e dados.</p>
  
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
          :data="tableProps"
        />
      </section>
  
      <!-- Uso -->
      <section class="example">
        <h2>Como usar</h2>
        <p>Exemplo básico de uso em uma página de documentação:</p>
        <DarkAeroTable
          :columns="[
            { key: 'nome',       label: 'Nome'     },
            { key: 'idade',      label: 'Idade'    }
          ]"
          :data="[
            { nome: 'Alice', idade: 30},
            { nome: 'Bruno', idade: 25}
          ]"
        />
        <DarkAeroCodeBlock
          :code="usageCode"
          language="html"
        />
      </section>
    </div>
  </template>
  
  <script setup>
  import DarkAeroTable from '@/components/dark-aero/DarkAeroTable.vue'
  import DarkAeroCodeBlock from '@/components/dark-aero/DarkAeroCodeBlock.vue'
  import { ref } from 'vue'
  
  // Props do componente DarkAeroTable
  const tableProps = [
    { prop: 'columns',   type: 'Array<{ key: string, label: string }>', defaultVal: '[]', description: 'Array de colunas com chave e label' },
    { prop: 'data',      type: 'Array<Record<string, any>>',    defaultVal: '[]', description: 'Array de objetos contendo dados para cada linha' }
  ]
  
  // Snippet de uso
  const usageCode = `<template>\n  <DarkAeroTable\n    :columns="[{ key: 'nome', label: 'Nome' }.\n\t\t\t\t{ key: 'idade', label: 'Idade'}]"\n    :data="[{ nome: 'Alice', idade: 30 },\n\t\t\t\t{ nome:'Bruno', idade: 25 }]"\n  />\n</template>`
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
  </style>
  