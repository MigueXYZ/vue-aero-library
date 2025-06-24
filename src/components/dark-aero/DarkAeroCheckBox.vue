<template>
    <label class="dark-aero-checkbox" :class="{ checked, disabled }">
      <input
        type="checkbox"
        :checked="checked"
        :disabled="disabled"
        @change="$emit('update:checked', $event.target.checked)"
      />
      <span
        class="box"
        :style="{
          '--border-color': borderColor,
          '--check-color': checkColor
        }"
      ></span>
      <span class="label"><slot /></span>
    </label>
  </template>
  
  <script setup>
  const props = defineProps({
    checked: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    borderColor: { type: String, default: 'rgba(255,255,255,0.2)' },
    checkColor: { type: String, default: 'rgba(0,128,255,0.8)' }
  })
  const emit = defineEmits(['update:checked'])
  </script>
  
  <style scoped>

  .dark-aero-checkbox {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
    font-family: 'Source Code Pro', monospace;
    color: #eee;
  }
  .dark-aero-checkbox.disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  .dark-aero-checkbox input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }
  .dark-aero-checkbox .box {
    position: relative;
    width: 1.2em;
    height: 1.2em;
    margin-right: 0.5em;
    background: transparent;
    border: 2px solid var(--border-color);
    border-radius: 2px;
    transition: all 250ms cubic-bezier(.4,.0,.23,1);
  }
  .dark-aero-checkbox .label {
    font-size: 0.9rem;
  }
  
  /* Hover/focus */
  .dark-aero-checkbox:hover .box,
  .dark-aero-checkbox input:focus + .box {
    background: rgba(255,255,255,0.1);
  }
  
  /* Indicator */
  .dark-aero-checkbox .box::before {
    content: '';
    position: absolute;
    top: 50%; left: 50%;
    width: 0; height: 0;
    border-right: 3px solid transparent;
    border-bottom: 3px solid transparent;
    transform: translate(-50%, -60%) rotate(45deg);
    opacity: 0;
  }
  
  .dark-aero-checkbox input:checked + .box {
    animation: shrink-bounce 200ms cubic-bezier(.4,.0,.23,1);
  }
  .dark-aero-checkbox input:checked + .box::before {
    animation: checkbox-check 125ms 200ms cubic-bezier(.4,.0,.23,1) forwards;
    border-bottom-color: var(--check-color);
    border-right-color: var(--check-color);
    opacity: 1;
  }
  
  @keyframes shrink-bounce {
    0% { transform: scale(1); }
    33% { transform: scale(.85); }
    100% { transform: scale(1); }
  }
  @keyframes checkbox-check {
    0% {
      width: 0; height: 0;
      transform: translate(-50%, -60%) rotate(45deg);
    }
    33% {
      width: .2em; height: 0;
      transform: translate(-50%, -60%) rotate(45deg);
    }
    100% {
      width: .2em; height: .5em;
      transform: translate(-50%, -60%) rotate(45deg);
    }
  }
  </style>
  