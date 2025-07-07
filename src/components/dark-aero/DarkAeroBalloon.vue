<template>
  <div
    class="balloon"
    :class="`pos-${position}`"
    :style="{ '--balloon-text': textColor }"
  >
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({
  position: {
    type: String,
    default: 'top-left',
    validator: v =>
      ['top-left', 'top-right', 'bottom-left', 'bottom-right'].includes(v)
  },
  textColor: {
    type: String,
    default: 'rgba(255, 255, 255, 0.9)'
  }
})
</script>

<style scoped>
/* ░░ BALLOON CONTAINER ░░ */
.balloon {
  position: relative;
  display: inline-block;

  /* Espessura e limites */
  padding: 0.75rem 1rem;
  max-width: 15rem;

  /* Estilo de texto */
  color: var(--balloon-text);
  font-family: 'Segoe UI', Arial, sans-serif;
  font-size: 0.9rem;
  text-align: left;

  /* Estilo visual: vidro + sombra */
  background: linear-gradient(
    135deg,
    rgba(40, 40, 40, 0.8),
    rgba(30, 30, 30, 0.6)
  );
  backdrop-filter: blur(12px);

  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;

  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.05),
    0 4px 12px rgba(0, 0, 0, 0.4);

  margin: 0.5rem;
}

/* ░░ BALÃO: “Triângulo” de orientação ░░ */
.balloon::after {
  content: '';
  position: absolute;

  width: 0.75rem;
  height: 0.75rem;

  /* Herdar estilo do fundo e borda */
  background: inherit;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-width: 1px 1px 0 0;

  transform-origin: top left;

  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.05),
    0 4px 12px rgba(0, 0, 0, 0.4);
}

/* ░░ POSICIONAMENTO DO TRIÂNGULO ░░ */

/* Canto superior esquerdo */
.balloon.pos-top-left::after {
  top: 0;
  left: 1rem;
  transform: rotate(-45deg) translateY(-6%);
}

/* Canto superior direito */
.balloon.pos-top-right::after {
  top: 0;
  right: 1rem;
  transform: rotate(-45deg) translateY(-6%);
}

/* Canto inferior esquerdo */
.balloon.pos-bottom-left::after {
  bottom: 0;
  left: 1rem;
  transform: rotate(135deg) translateY(-150%) translateX(15%);
}

/* Canto inferior direito */
.balloon.pos-bottom-right::after {
  bottom: 0;
  right: 1rem;
  transform: rotate(135deg) translateY(-150%);
}

</style>
