<template>
  <label class="dark-aero-checkbox" :class="{ checked, disabled }">
    <input type="checkbox" :checked="checked" :disabled="disabled"
      @change="$emit('update:checked', $event.target.checked)" />
    <span class="box" :style="{
      '--border-color': borderColor,
      '--check-color': checkColor
    }"></span>
    <span class="label">
      <slot />
    </span>
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
/* ░░ CONTAINER ░░ */
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

/* ░░ ESCONDE O CHECKBOX NATIVO ░░ */
.dark-aero-checkbox input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

/* ░░ BOX VISUAL DO CHECKBOX ░░ */
.dark-aero-checkbox .box {
  position: relative;
  width: 1.2em;
  height: 1.2em;
  margin-right: 0.5em;

  background: linear-gradient(0deg,
      rgba(0, 0, 0, 0.2),
      rgba(112, 112, 112, 0.2) 80%,
      rgba(150, 150, 150, 0.2) 100%);

  border: 2px solid var(--border-color);
  border-radius: 2px;

  transition: all 250ms cubic-bezier(.4, 0, .23, 1);
}

/* ░░ TEXTO AO LADO ░░ */
.dark-aero-checkbox .label {
  font-size: 0.9rem;
}

/* ░░ HOVER STATE QUANDO NÃO ESTÁ DESABILITADO ░░ */
.dark-aero-checkbox:not(.disabled):hover .box {
  background: rgba(255, 255, 255, 0.1);
}

/* ░░ ICONE DE CHECK (CRIADO COM BORDAS) ░░ */
.dark-aero-checkbox .box::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;

  border-right: 3px solid transparent;
  border-bottom: 3px solid transparent;

  transform: translate(-50%, -60%) rotate(45deg);
  opacity: 0;
}

/* ░░ QUANDO CHECKED: animo a caixa e exibo o ✔ ░░ */
.dark-aero-checkbox input:checked+.box {
  animation: shrink-bounce 200ms cubic-bezier(.4, 0, .23, 1);
  background: linear-gradient(0deg,
      rgba(0, 0, 0, 0.2),
      rgba(112, 112, 112, 0.2) 80%,
      rgba(150, 150, 150, 0.2) 100%);
}

.dark-aero-checkbox input:checked+.box::before {
  animation: checkbox-check 125ms 200ms cubic-bezier(.4, 0, .23, 1) forwards;
  border-bottom-color: var(--check-color);
  border-right-color: var(--check-color);
  opacity: 1;
}

/* ░░ ANIMAÇÃO DA CAIXA (efeito de bounce ao clicar) ░░ */
@keyframes shrink-bounce {
  0% {
    transform: scale(1);
  }

  33% {
    transform: scale(0.85);
  }

  100% {
    transform: scale(1);
  }
}

/* ░░ ANIMAÇÃO DE APARECIMENTO DO ICONE DE CHECK ░░ */
@keyframes checkbox-check {
  0% {
    width: 0;
    height: 0;
    transform: translate(-50%, -60%) rotate(45deg);
  }

  33% {
    width: 0.2em;
    height: 0;
    transform: translate(-50%, -60%) rotate(45deg);
  }

  100% {
    width: 0.2em;
    height: 0.5em;
    transform: translate(-50%, -60%) rotate(45deg);
  }
}
</style>