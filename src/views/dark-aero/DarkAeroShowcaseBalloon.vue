<template>
  <div class="docs-page">
    <h1>Dark Aero Balloon</h1>
    <p>A glassmorphism/skeuomorphism tooltip activated on click, with configurable pointer position and text color.</p>

    <!-- Props -->
    <section class="example">
      <h2>Props</h2>
      <DarkAeroTable :columns="[
        { key: 'name', label: 'Prop' },
        { key: 'type', label: 'Type' },
        { key: 'default', label: 'Default' },
        { key: 'description', label: 'Description' }
      ]" :data="[
          {
            name: 'position',
            type: 'String',
            default: 'top-left',
            description: 'where the pointer appears (top-left | top-right | bottom-left | bottom-right)'
          },
          {
            name: 'textColor',
            type: 'String',
            default: '#0ff',
            description: 'text color inside the balloon'
          }
        ]" />
    </section>

    <!-- Usage -->
    <section class="example">
      <h2>How to use</h2>
      <p>Simple tooltip toggle:</p>

      <div class="interactive">
        <DarkAeroButton @click="show = !show" class="trigger-btn">
          {{ show ? 'Hide' : 'Show' }} Tooltip
        </DarkAeroButton>
        <DarkAeroBalloon v-if="show" position="top-left" textColor="#0ff">
          Tooltip example!
        </DarkAeroBalloon>
      </div>
      <DarkAeroCodeBlock :code="usageCode" language="html" />
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DarkAeroBalloon from '@/components/dark-aero/DarkAeroBalloon.vue'
import DarkAeroCodeBlock from '@/components/dark-aero/DarkAeroCodeBlock.vue'
import DarkAeroButton from '@/components/dark-aero/DarkAeroButton.vue'
import DarkAeroTable from '@/components/dark-aero/DarkAeroTable.vue'

const show = ref(false)

const usageCode = `<template>
  <button @click=\"show = !show\">Toggle</button>
  <DarkAeroBalloon
    v-if=\"show\"
    position=\"top-left\"
    textColor=\"#0ff\"
  >
    Tooltip example!
  </DarkAeroBalloon>
</template>`
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

.trigger-btn {
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
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
