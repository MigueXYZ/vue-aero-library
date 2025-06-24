<template>
    <div class="docs-page">
      <h1>Dark Aero CheckBox</h1>
      <p>Componente de checkbox no estilo Dark Aero (glassmorphism), com estado e rótulo customizáveis.</p>
  
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
          :data="checkboxProps"
        />
      </section>
  
      <!-- Usage -->
      <section class="example">
        <h2>Como usar</h2>
        <p>Exemplo de uso com v-model:</p>
        
  
        <div class="interactive">
          <DarkAeroCheckBox v-model:checked="checked" class="checkbox-demo">
            Aceito os termos
          </DarkAeroCheckBox>
          <p>Estado: <strong>{{ checked }}</strong></p>
        </div>
        <DarkAeroCodeBlock :code="usageCode" language="html" />
      </section>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import DarkAeroCheckBox from '@/components/dark-aero/DarkAeroCheckBox.vue'
  import DarkAeroTable from '@/components/dark-aero/DarkAeroTable.vue'
  import DarkAeroCodeBlock from '@/components/dark-aero/DarkAeroCodeBlock.vue'
  
  const checked = ref(false)
  
  const checkboxProps = [
    { prop: 'checked',  type: 'Boolean', defaultVal: 'false', description: 'Estado inicial do checkbox' },
    { prop: 'disabled', type: 'Boolean', defaultVal: 'false', description: 'Desabilita a interação' }
  ]
  
  const usageCode = `<template>\n  <DarkAeroCheckBox v-model:checked=\"checked\">\n    Aceito os termos\n  </DarkAeroCheckBox>\n  <p>Estado: {{ checked }}</p>\n</template>\n\n<script setup>\nimport { ref } from 'vue'\n\nconst checked = ref(false)\n<\/script>`
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

  .checkbox-demo {
    margin-right: 1rem;
  }
  </style>
  