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
.balloon {
  position: relative;
  display: inline-block;
  padding: 0.75rem 1rem;
  max-width: 240px;
  color: var(--balloon-text);
  font-family: 'Source Code Pro', monospace;
  font-size: 0.9rem;
  background: linear-gradient(
    135deg,
    rgba(40, 40, 40, 0.8) 0%,
    rgba(30, 30, 30, 0.6) 100%
  );
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.05),
    0 4px 12px rgba(0, 0, 0, 0.4);
  border-radius: 4px;
  text-align: left;
  margin: 0.5rem;
}

.balloon::after {
  content: '';
  position: absolute;
  width: 0.75rem;
  height: 0.75rem;
  background: inherit;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-width: 1px 1px 0 0;
  transform-origin: top left;
  /* inherit same shadows */
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.05),
    0 4px 12px rgba(0, 0, 0, 0.4);
}

.balloon.pos-top-left::after {
  top: -0.05rem;
  left: 1rem;
  transform: rotate(-45deg);
}
.balloon.pos-top-right::after {
  top: -0.05rem;
  right: 1rem;
  transform: rotate(45deg);
}
.balloon.pos-bottom-left::after {
  bottom: -0.05rem;
  left: 1rem;
  transform: rotate(225deg);
}
.balloon.pos-bottom-right::after {
  bottom: -0.05rem;
  right: 1rem;
  transform: rotate(135deg);
}
</style>
