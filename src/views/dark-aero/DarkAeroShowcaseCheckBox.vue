<template>
  <div class="docs-page">
    <h1>Dark Aero CheckBox</h1>
    <p>Checkbox component in Dark Aero (glassmorphism) style with customizable state and label.</p>

    <!-- Props -->
    <section class="example">
      <h2>Props</h2>
      <DarkAeroTable :columns="[
        { key: 'prop', label: 'Prop' },
        { key: 'type', label: 'Type' },
        { key: 'defaultVal', label: 'Default' },
        { key: 'description', label: 'Description' }
      ]" :data="checkboxProps" />
    </section>

    <!-- Usage -->
    <section class="example">
      <h2>Usage</h2>
      <p>Example using v-model:</p>

      <div class="interactive">
        <DarkAeroCheckBox v-model:checked="checked" class="checkbox-demo">
          I accept the terms
        </DarkAeroCheckBox>
        <p>Status: <strong>{{ checked }}</strong></p>
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
  { prop: 'checked', type: 'Boolean', defaultVal: 'false', description: 'Initial checkbox state' },
  { prop: 'disabled', type: 'Boolean', defaultVal: 'false', description: 'Disables interaction' }
]

const usageCode = `<template>
  <DarkAeroCheckBox v-model:checked=\"checked\">\n    I accept the terms\n  </DarkAeroCheckBox>\n  <p>Status: {{ checked }}</p>\n</template>`
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
