<template>
    <button
      :style="{
        '--base-color': props.color,
        '--initial-glow': initialGlow,
        '--glow-color': resolvedGlowColor,
        '--text-color': resolvedTextColor,
        backgroundColor: props.color
      }"
      :disabled="disabled"
      @click="handleClick"
    >
      <slot></slot>
    </button>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  
  const props = defineProps({
    color:     { type: String, default: 'rgba(255, 255, 255, 0.08)' },
    glowColor: { type: String, default: 'rgba(255, 255, 255, 0.5)' },
    textColor: { type: String, default: 'rgba(255, 255, 255, 0.7)' },
    disabled:  { type: Boolean, default: false }
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
    /* usa a variável para o texto */
    color: var(--text-color);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 3px;
  
    background:
      linear-gradient(to bottom right, rgba(255,255,255,0.03), rgba(255,255,255,0)),
      linear-gradient(to top left,    rgba(255,255,255,0.04), rgba(255,255,255,0.01));
    background-blend-mode: screen;
    backdrop-filter: blur(12px);
  
    box-shadow:
      inset 0 1px 1px rgba(255, 255, 255, 0.1),
      0 4px 12px rgba(0, 0, 0, 0.25),
      0 0 8px var(--initial-glow);
  
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
    transition:
      box-shadow 2s ease-in-out,
      background 0.3s ease,
      transform 0.3s ease;
    cursor: pointer;
  }
  
  button:hover:not(:disabled) {
    box-shadow:
      inset 0 1px 1px rgba(255, 255, 255, 0.15),
      0 6px 14px rgba(0, 0, 0, 0.35),
      0 0 16px var(--glow-color);
    transform: translateY(-1px);
  }
  
  button:active:not(:disabled) {
    transform: translateY(1px);
    box-shadow:
      inset 0 2px 4px rgba(0, 0, 0, 0.2),
      0 2px 6px rgba(0, 0, 0, 0.3),
      0 0 12px var(--glow-color);
  }
  
  button:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    box-shadow: none;
  }
  </style>
  