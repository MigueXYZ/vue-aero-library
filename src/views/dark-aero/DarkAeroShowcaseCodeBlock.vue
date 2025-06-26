<template>
  <div class="docs-page">
    <h1>Dark Aero CodeBlock</h1>
    <p>Component for displaying code blocks with PrismJS syntax highlighting, line numbers and a copy button, in a glassmorphism style.</p>

    <!-- Props -->
    <section class="example">
      <h2>Props</h2>
      <DarkAeroTable :columns="columns" :data="codeBlockProps" />
    </section>

    <!-- Usage -->
    <section class="example">
      <h2>Usage</h2>
      <p>Basic example:</p>

      <DarkAeroCodeBlock :code="sampleCode" language="html" />

      <p>Code:</p>
      <DarkAeroCodeBlock :code="showcaseCode" language="html" />
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DarkAeroTable from '@/components/dark-aero/DarkAeroTable.vue'
import DarkAeroCodeBlock from '@/components/dark-aero/DarkAeroCodeBlock.vue'

/* ------------------------------------------------------------------
 *  Table data
 * ------------------------------------------------------------------*/
const columns = [
  { key: 'prop',        label: 'Prop'       },
  { key: 'type',        label: 'Type'       },
  { key: 'defaultVal',  label: 'Default'    },
  { key: 'description', label: 'Description'}
]

const codeBlockProps = [
  {
    prop        : 'code',
    type        : 'String',
    defaultVal  : "''",
    description : 'The code to display in the block'
  },
  {
    prop        : 'language',
    type        : 'String',
    defaultVal  : 'javascript',
    description : 'Language for syntax highlighting (Prism)'
  }
]

/* ------------------------------------------------------------------
 *  Example code strings
 * ------------------------------------------------------------------*/
const sampleCode = `<template>\n  <div>Hello, Dark Aero Code Block!</div>\n</template>`

const showcaseCode = `<template>\n  <DarkAeroCodeBlock\n    :code=\"sampleCode\"\n    language=\"html\"\n  />\n</template>\n\n<script setup>\nimport { ref } from 'vue'\n\nconst sampleCode = \`<template>\\n  <div>Hello, Dark Aero Code Block!</div>\\n</template>\`\n<\/script>`
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
  background: rgba(30, 30, 30, 0.4);
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
