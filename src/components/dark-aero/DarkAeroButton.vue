<template>
  <button :style="{
    '--base-color': props.color,
    '--initial-glow': initialGlow,
    '--glow-color': resolvedGlowColor,
    '--text-color': resolvedTextColor,
    backgroundColor: props.color
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

const initialGlow = 'rgba(128, 128, 128, 0.5)'
const resolvedGlowColor = computed(() =>
  props.glowColor.trim() !== '' ? props.glowColor : props.color
)
const resolvedTextColor = computed(() => props.textColor)

function handleClick() {
  if (!props.disabled) emit('click')
}
</script>

<style scoped>
button {
  padding: 5px 11px;
  font-size: 15px;
  font-weight: 300;
  color: var(--text-color);
  border-radius: 3px;
  backdrop-filter: blur(12px);
  background-blend-mode: screen;
  border:1px solid var(--base-color);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.2) 0%,         
    rgba(112, 112, 112, 0.2) 80%,  
    rgba(150, 150, 150, 0.2) 100%  
  );
  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.2),
    0 0 8px var(--initial-glow);

  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  transition:
    box-shadow 2s ease-in-out,
    background 0.3s ease,
    transform 0.3s ease;
  cursor: pointer;
}

button:hover:not(:disabled) {
  box-shadow:
    inset 0 1px 1px rgba(255,255,255,0.15),
    0 6px 10px rgba(0,0,0,0.2),
    0 0 16px var(--glow-color);
  transform: translateY(-1px);
}

button:active:not(:disabled) {
  transform: translateY(1px);
  box-shadow:
    inset 0 2px 4px rgba(0, 0, 0, 0.1),
    0 2px 5px rgba(0, 0, 0, 0.2),
    0 0 10px var(--glow-color);
}

button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  box-shadow: none;
}
</style>