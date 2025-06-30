<template>
    <label class="dark-aero-radio" :class="{ checked: modelValue === value, disabled }">
      <input
        type="radio"
        :name="name"
        :value="value"
        :checked="modelValue === value"
        :disabled="disabled"
        @change="$emit('update:checked', value)"
      />
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

.dark-aero-radio input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
}

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
    transition: all 250ms cubic-bezier(.4, .0, .23, 1);
}

.dark-aero-radio .label {
    font-size: 0.9rem;
}

/* Hover */
.dark-aero-radio:hover .circle {
    background: rgba(255, 255, 255, 0.1);
}

/* Dot Indicator */
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
    transition: transform 200ms ease;
    opacity: 0;
}

.dark-aero-radio input:checked+.circle::before {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
}
</style>