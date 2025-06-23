<template>
    <button
      @click="handleClick"
      class="win-7-button"
      :class="[
        colorClass,
        { 'win-7-button--disabled': disabled }
      ]"
      :disabled="disabled"
    >
      <slot />
    </button>
  </template>
  
  <script>
  export default {
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      color: {
        type: String,
        default: 'default' // pode ser: default, blue, grey, green, red, strong
      }
    },
    computed: {
      colorClass() {
        return `win-7-button--${this.color}`;
      }
    },
    methods: {
      handleClick() {
        if (!this.disabled) this.$emit('click');
      }
    }
  }
  </script>
  
  <style scoped>
  /* Estilo base */
  .win-7-button {
    padding: 8px 20px;
    font-size: 15px;
    font-weight: bold;
    border-radius: 4px;
    border: 1px solid;
    background-blend-mode: screen;
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.7),
      0 2px 5px rgba(0, 0, 0, 0.25);
    text-shadow: 0 1px 0 white;
    cursor: pointer;
    transition: background 0.2s, transform 0.1s;
    user-select: none;
    backdrop-filter: blur(2px);
  }
  
  .win-7-button:hover:not(.win-7-button--disabled) {
    filter: brightness(1.05);
  }
  
  .win-7-button:active:not(.win-7-button--disabled) {
    transform: translateY(1px);
  }
  
  /* Estado desativado */
  .win-7-button--disabled {
    opacity: 0.6;
    cursor: not-allowed;
    pointer-events: none;
  }
  
  /* Variantes de cor */
  .win-7-button--default {
    border-color: #cccccc;
    background-image: linear-gradient(to bottom, #f9f9f9, #e0e0e0);
    color: #333;
  }
  
  .win-7-button--blue {
    border-color: #7eb4ea;
    background-image: linear-gradient(to bottom, #ffffff, #cce6ff);
    color: #1d3f70;
  }
  
  .win-7-button--grey {
    border-color: #a0a0a0;
    background-image: linear-gradient(to bottom, #f2f2f2, #d9d9d9);
    color: #222;
  }
  
  .win-7-button--green {
    border-color: #84c28a;
    background-image: linear-gradient(to bottom, #e9fce9, #b4e1b4);
    color: #2d5f2d;
  }
  
  .win-7-button--red {
    border-color: #ff4d4d;
    background-image: linear-gradient(to bottom, #ffcccc, #ff9999);
    color: #ffffff;
  }
  
  .win-7-button--strong {
    border-color: #ffcc00;
    background-image: linear-gradient(to bottom, #ffffcc, #ffff99);
    color: #665c00;
  }
  </style>
  