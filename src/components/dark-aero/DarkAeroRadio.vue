<template>
  <label class="dark-aero-radio" :class="{ checked: modelValue === value, disabled }">
    <input type="radio" :name="name" :value="value" :checked="modelValue === value" :disabled="disabled"
      @change="$emit('update:checked', value)" />
    <span class="circle" :style="{
      '--border-color': borderColor,
      '--dot-color': dotColor
    }"></span>
    <span class="label">
      <slot />
    </span>
  </label>
</template>

<script setup>
const props = defineProps({
  modelValue: [String, Number, Boolean],
  value: [String, Number, Boolean],
  name: String,
  disabled: Boolean,
  borderColor: { type: String, default: 'rgba(255,255,255,0.2)' },
  dotColor: { type: String, default: 'rgba(0,128,255,0.8)' }
})

const emit = defineEmits(['update:checked'])
</script>

<style scoped>
/* ░░ CONTAINER DO RADIO BUTTON ░░ */
.dark-aero-radio {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  user-select: none;

  font-family: 'Source Code Pro', monospace;
  color: #eee;
}

.dark-aero-radio.disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

/* ░░ ESCONDE O RADIO NATIVO ░░ */
.dark-aero-radio input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

/* ░░ CÍRCULO VISUAL DO RADIO ░░ */
.dark-aero-radio .circle {
  position: relative;
  width: 1.2em;
  height: 1.2em;
  margin-right: 0.5em;

  background: linear-gradient(0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(112, 112, 112, 0.2) 80%,
      rgba(150, 150, 150, 0.2) 100%);

  border: 2px solid var(--border-color);
  border-radius: 50%;

  transition: all 250ms cubic-bezier(.4, 0, .23, 1);
}

/* ░░ LABEL DE TEXTO AO LADO ░░ */
.dark-aero-radio .label {
  font-size: 0.9rem;
}

/* ░░ HOVER (aplica leve brilho) ░░ */
.dark-aero-radio:not(.disabled):hover .circle {
  background: rgba(255, 255, 255, 0.1);
}

/* ░░ PONTO CENTRAL INDICADOR ░░ */
.dark-aero-radio .circle::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;

  width: 0.6em;
  height: 0.6em;
  background-color: var(--dot-color);
  border-radius: 50%;

  transform: translate(-50%, -50%) scale(0);
  opacity: 0;

  transition: transform 200ms ease, opacity 200ms ease;
}

/* ░░ ANIMAÇÃO DE APARECIMENTO DO PONTO ░░ */
.dark-aero-radio input:checked+.circle::before {
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
}
</style>