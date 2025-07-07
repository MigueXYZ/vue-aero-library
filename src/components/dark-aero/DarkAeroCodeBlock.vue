<template>
  <div class="code-block">
    <div class="code-header">
      <span class="language">{{ language.toUpperCase() }}</span>
      <button class="copy-btn" @click="copyCode">Copiar</button>
    </div>

    <!-- tudo em uma linha, sem quebras ou espaços -->
    <pre ref="preRef" class="code-content line-numbers"
      :class="`language-${language}`"><code v-text="code"></code></pre>
  </div>
</template>


<script setup>
// antes de qualquer defineProps:
import { ref, onMounted, watch, nextTick } from 'vue'
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

const props = defineProps({
  code: { type: String, required: true },
  language: { type: String, default: 'javascript' }
})

const preRef = ref(null)

function highlight() {
  nextTick(() => {
    const codeEl = preRef.value?.querySelector('code')
    if (codeEl) Prism.highlightElement(codeEl)
  })
}

onMounted(highlight)
watch(() => props.code, highlight)

const copyCode = () => {
  navigator.clipboard.writeText(props.code)
}
</script>

<style scoped>
/* ░░ CONTAINER ░░ */
.code-block {
  font-family: 'Source Code Pro', monospace;
  margin: 1rem auto;
  border-radius: 3px;
  overflow: hidden;
  width: 100%;
  max-width: 800px;

  /* Efeito vidro */
  background: rgba(30, 30, 30, 0.4);
  backdrop-filter: blur(12px);

  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.05),
    0 4px 12px rgba(0, 0, 0, 0.4);

  text-align: left;
}

/* ░░ HEADER: linguagem + botão ░░ */
.code-header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.language {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
}

/* ░░ BOTÃO COPIAR ░░ */
.copy-btn {
  padding: 4px 8px;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.8);

  background:
    linear-gradient(to bottom right, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0)),
    linear-gradient(to top left, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.01));

  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 3px;

  cursor: copy;
  transition: background 0.3s, transform 0.2s;
}

.copy-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-1px);
}

.copy-btn:active {
  transform: translateY(1px);
}

/* ░░ BLOCO DE CÓDIGO ░░ */
.code-content {
  position: relative;

  padding: 0.5rem 1rem 0;
  /* fundo ajustado para colar no fim */
  margin: 0;
  overflow-x: auto;

  background: rgba(30, 30, 30, 0.4);
  backdrop-filter: blur(12px);

  counter-reset: linenumber;
}

/* ░░ ALINHAMENTO DE NÚMEROS DE LINHA ░░ */
.line-numbers {
  padding-left: 3.5em !important;
}

/* Ajustes do plugin Prism line-numbers */
.line-numbers .line-numbers-rows {
  top: 0.5rem;
  left: 0;
  width: 3em;

  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.5);
}

/* Remove espaçamento extra após a última linha */
.line-numbers .line-numbers-rows>span:last-child {
  margin-bottom: 0 !important;
}

/* Insere os números */
.line-numbers-rows>span:before {
  counter-increment: linenumber;
  content: counter(linenumber);
}

/* ░░ ESTILO DO <code> INTERNO ░░ */
.code-content code {
  display: block;
  white-space: pre;
  font-size: 0.9rem;
  line-height: 1.3;
  padding-bottom: 0.4rem;
}
</style>