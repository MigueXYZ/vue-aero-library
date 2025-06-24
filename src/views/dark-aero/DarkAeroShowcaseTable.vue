<!-- src/views/dark-aero/DarkAeroShowcaseTable.vue -->
<template>
  <div class="docs-page">
    <h1>Dark Aero Table</h1>
    <p>
      Tabela genérica em estilo glassmorphism.  
      É usada para listar props, dados ou qualquer conjunto tabular.
      Agora aceita <code>textColor</code> e <code>glowColor</code> 🎨
    </p>

    <!-- PROPS -->
    <section class="example">
      <h2>Props</h2>
      <DarkAeroTable
        :columns="[
          { key:'prop',        label:'Prop'       },
          { key:'type',        label:'Tipo'       },
          { key:'defaultVal',  label:'Default'    },
          { key:'description', label:'Descrição'  }
        ]"
        :data="tableProps"
      />
    </section>

    <!-- USO BÁSICO -->
    <section class="example">
      <h2>Como usar</h2>
      <p>Exemplo de tabela com brilho laranja e texto amarelo-pálido:</p>

      <DarkAeroTable
        :columns="demoCols"
        :data   ="demoData"
        text-color="#fffa8b"
        glow-color="rgba(255,99,0,.55)"
      />

      <!-- bloco de código -->
      <DarkAeroCodeBlock
        :code="usageCode"
        language="html"
      />
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import DarkAeroTable     from '@/components/dark-aero/DarkAeroTable.vue'
import DarkAeroCodeBlock from '@/components/dark-aero/DarkAeroCodeBlock.vue'

/* ------- DESCRIÇÃO DAS PROPS ------- */
const tableProps = [
  { prop:'columns',   type:'Array<{ key:string , label:string }>',
    defaultVal:'[]',
    description:'Cabeçalhos da tabela (chave + rótulo)' },

  { prop:'data',      type:'Array<Record<string, any>>',
    defaultVal:'[]',
    description:'Linhas da tabela (objetos)' },

  { prop:'textColor', type:'String',
    defaultVal:'#fff',
    description:'Cor do texto de todas as células' },

  { prop:'glowColor', type:'String',
    defaultVal:'rgba(0,0,0,.45)',
    description:'Cor do brilho (box-shadow) externo e do hover' }
]

/* ------- DEMO INTERATIVO ------- */
const demoCols = [
  { key:'nome',  label:'Nome' },
  { key:'idade', label:'Idade'}
]

const demoData = ref([
  { nome:'Alice', idade:30 },
  { nome:'Bruno', idade:25 }
])

/* ------- SNIPPET PARA O BLOCO DE CÓDIGO ------- */
const usageCode = `<template>
  <DarkAeroTable
    :columns="[{ key: 'nome', label: 'Nome' },
               { key: 'idade', label: 'Idade' }]"
    :data="[{ nome: 'Alice', idade: 30 },
            { nome: 'Bruno', idade: 25 }]"
    text-color="#fffa8b"
    glow-color="rgba(255,99,0,.55)"
  />
</template>`
</script>

<style scoped>
.docs-page {
  padding: 2rem;
  color: #eee;
  font-family: sans-serif;
}
.example {
  margin-bottom: 2.5rem;
}
.example h2 { margin-bottom: .75rem; color:#fff }
</style>
