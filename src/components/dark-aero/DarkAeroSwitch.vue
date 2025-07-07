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
  modelValue: { type: Boolean, default: false },
  color: { type: String, default: 'rgba(255, 255, 255, 0.2)' },
  glowColor: { type: String, default: 'rgba(255, 255, 255, 0.5)' },
  offColor: { type: String, default: 'rgba(255, 255, 255, 0.08)' },
  rounded: { type: Boolean, default: true },
  disabled: { type: Boolean, default: false }
})

const emit = defineEmits(['update:modelValue', 'change'])

const resolvedGlowColor = computed(() =>
  props.glowColor.trim() !== '' ? props.glowColor : props.color
)

const switchStyle = computed(() => ({
  '--base-color': props.color,
  '--glow-color': resolvedGlowColor.value,
  '--off-color': props.offColor || props.color,
  '--track-radius': props.rounded ? '50px' : '3px',
  '--thumb-radius': props.rounded ? '50%' : '3px'
}))

function onChange(e) {
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

/* Esconde checkbox nativo */
.aero-switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* ───── Pista (track) ───── */
.track {
  position: absolute;
  inset: 0;
  border-radius: var(--track-radius);
  background: var(--off-color);
  backdrop-filter: blur(12px);
  background-blend-mode: screen;
  box-shadow:
    0 2px 6px rgba(0, 0, 0, 0.2),
    0 0 6px var(--glow-color);
  transition: background 0.25s ease, box-shadow 0.25s ease;
}

/* ───── Botão (thumb) ───── */
.thumb {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 20px;
  height: 20px;
  border-radius: var(--thumb-radius);
  background: var(--base-color);
  backdrop-filter: blur(12px);
  box-shadow:
    inset 0 1px 1px rgba(255, 255, 255, 0.2),
    0 2px 6px rgba(0, 0, 0, 0.5),
    0 0 6px var(--glow-color);
  transition:
    transform 0.25s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.25s ease;
}

/* ───── ESTADO ON ───── */
.aero-switch input:checked ~ .track {
  background: var(--base-color);
  box-shadow:
    inset 0 1px 1px rgba(255, 255, 255, 0.25),
    0 6px 14px rgba(0, 0, 0, 0.5),
    0 0 10px var(--glow-color);
}

.aero-switch input:checked ~ .thumb {
  transform: translateX(20px);
  box-shadow:
    inset 0 1px 1px rgba(255, 255, 255, 0.25),
    0 2px 6px rgba(0, 0, 0, 0.5),
    0 0 10px var(--glow-color);
}

/* ───── Hover (se não desativado) ───── */
.aero-switch:hover:not(.disabled) .thumb {
  box-shadow:
    0 2px 8px rgba(0, 0, 0, 0.3),
    0 0 12px var(--glow-color);
}

/* ───── Disabled ───── */
.aero-switch.disabled,
.aero-switch input:disabled ~ .track,
.aero-switch input:disabled ~ .thumb {
  cursor: not-allowed;
  opacity: 0.4;
  box-shadow: none;
}
</style>
