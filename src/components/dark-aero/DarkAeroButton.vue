<template>
  <button :style="{
    '--base-color': color,
    '--initial-glow': initialGlow,
    '--glow-color': resolvedGlowColor,
    '--text-color': resolvedTextColor,
    backgroundColor: color
  }" :disabled="disabled" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  color: { type: String, default: 'rgba(255, 255, 255, 0.08)' },
  glowColor: { type: String, default: 'rgba(255, 255, 255, 0.5)' },
  textColor: { type: String, default: 'rgba(255, 255, 255, 0.7)' },
  disabled: { type: Boolean, default: false }
})

const emit = defineEmits(['click'])

/* Cor de glow base (antes do hover) */
const initialGlow = 'rgba(128, 128, 128, 0.5)'

/* Se glowColor não estiver vazio, usa-o. Caso contrário, usa a cor de fundo */
const resolvedGlowColor = computed(() =>
  props.glowColor.trim() !== '' ? props.glowColor : props.color
)

/* Sempre usa o textColor como está */
const resolvedTextColor = computed(() => props.textColor)

/* Emite o evento 'click' se não estiver desativado */
function handleClick() {
  if (!props.disabled) emit('click')
}
</script>


<style scoped>
/* ░░ BASE BUTTON STYLE ░░ */
button {
  padding: 5px 11px;
  font-size: 15px;
  font-weight: 300;
  color: var(--text-color);

  /* Estética glass */
  border-radius: 3px;
  backdrop-filter: blur(12px);
  background-blend-mode: screen;

  /* Borda e fundo */
  border: 1px solid var(--base-color);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(112, 112, 112, 0.2) 80%,
    rgba(150, 150, 150, 0.2) 100%
  );

  /* Sombra externa + glow inicial */
  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.2),
    0 0 8px var(--initial-glow);

  /* Text shadow para maior legibilidade */
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);

  /* Transições suaves para hover e active */
  transition:
    box-shadow 0.3s ease,
    background 0.3s ease,
    transform 0.3s ease;

  cursor: pointer;
}

/* ░░ HOVER STATE ░░ */
button:hover:not(:disabled) {
  box-shadow:
    inset 0 1px 1px rgba(255, 255, 255, 0.15),
    0 6px 10px rgba(0, 0, 0, 0.2),
    0 0 16px var(--glow-color);
  transform: translateY(-1px);
}

/* ░░ ACTIVE (CLICADO) ░░ */
button:active:not(:disabled) {
  transform: translateY(1px);
  box-shadow:
    inset 0 2px 4px rgba(0, 0, 0, 0.1),
    0 2px 5px rgba(0, 0, 0, 0.2),
    0 0 10px var(--glow-color);
}

/* ░░ DISABLED STATE ░░ */
button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  box-shadow: none;
}
</style>