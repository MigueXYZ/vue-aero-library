<template>
    <label
      class="aero-switch"
      :class="{ disabled }"
      role="switch"
      :aria-checked="modelValue.toString()"
      :style="switchStyle"
    >
      <input
        type="checkbox"
        :checked="modelValue"
        :disabled="disabled"
        @change="onChange"
      />
      <span class="track"></span>
      <span class="thumb"></span>
    </label>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  
  const props = defineProps({
    /**
     * v-model binding
     */
    modelValue: { type: Boolean, default: false },
    /**
     * Base/track color and default thumb colour.
     */
    color: { type: String, default: 'rgba(255, 255, 255, 0.08)' },
    /**
     * Colour used for glow when the switch is ON/hovered.
     */
    glowColor: { type: String, default: 'rgba(255, 255, 255, 0.5)' },
    /**
     * Prevents user interaction.
     */
    offColor: { type: String, default: 'rgba(255, 255, 255, 0.08)' },
    disabled: { type: Boolean, default: false }
  })
  
  const emit = defineEmits(['update:modelValue', 'change'])
  
  const resolvedGlowColor = computed(() =>
    props.glowColor.trim() !== '' ? props.glowColor : props.color
  )
  
  const switchStyle = computed(() => ({
    '--base-color': props.color,
    '--glow-color': resolvedGlowColor.value,
    '--off-color': props.offColor || props.color
  }))
  
  function onChange (e) {
    if (props.disabled) return
    const { checked } = e.target
    emit('update:modelValue', checked)
    emit('change', checked)
  }
  </script>
  
  <style scoped>
  .aero-switch {
    position: relative;
    display: inline-block;
    width: 46px;
    height: 26px;
    cursor: pointer;
    user-select: none;
  }
  
  /* Hide the native checkbox but keep it accessible */
  .aero-switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  .track {
    position: absolute;
    inset: 0;
    border-radius: 15px;
    background:
      linear-gradient(to bottom right, rgba(255,255,255,0.06), rgba(255,255,255,0.02)),
      linear-gradient(to top left,    rgba(255,255,255,0.08), rgba(255,255,255,0.03));
    background-color: var(--off-color);
    backdrop-filter: blur(12px);
    background-blend-mode: screen;
    box-shadow:
      inset 0 1px 1px rgba(255,255,255,0.2),
      0 4px 12px rgba(0,0,0,0.5);
    transition: box-shadow 0.3s ease;
  }
  
  .thumb {
    position: absolute;
    top: 3px;
    left: 3px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: var(--base-color);
    backdrop-filter: blur(12px);
    box-shadow:
      inset 0 1px 1px rgba(255,255,255,0.2),
      0 2px 6px rgba(0,0,0,0.5),
      0 0 6px var(--glow-color);
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }
  
  /* ON state */
  .aero-switch input:checked ~ .thumb {
    transform: translateX(20px);
    box-shadow:
      inset 0 1px 1px rgba(255,255,255,0.25),
      0 2px 6px rgba(0,0,0,0.5),
      0 0 10px var(--glow-color);
  }
  
  .aero-switch input:checked ~ .track {
    background-color: var(--base-color);
    box-shadow:
      inset 0 1px 1px rgba(255,255,255,0.25),
      0 6px 14px rgba(0,0,0,0.5),
      0 0 10px var(--glow-color);
  }
  
  /* Disabled */
  .aero-switch.disabled,
  .aero-switch input:disabled + .track,
  .aero-switch input:disabled ~ .thumb {
    cursor: not-allowed;
    box-shadow: none;
  }
  </style>
  