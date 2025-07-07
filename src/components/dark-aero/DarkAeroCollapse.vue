<template>
    <div class="dark-aero-collapse" :style="{
        '--text-color': textColor,
        '--glow-color': glowColor
    }">
        <!-- TÍTULO OPCIONAL -->
        <span class="collapse-title" v-if="title.trim() !== ''">
            {{ title }}
        </span>

        <!-- HR + SETA: É O BOTÃO -->
        <div class="collapse-divider-line" @click="isOpen = !isOpen">
            <hr class="collapse-divider" />
            <span class="arrow" :class="{ open: isOpen }">▶</span>
        </div>

        <!-- CONTEÚDO -->
        <transition name="fade-slide">
            <div v-show="isOpen" class="collapse-content">
                <slot />
            </div>
        </transition>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
    title: string
    textColor?: string
    glowColor?: string
}>()

const isOpen = ref(false)
</script>

<style scoped lang="css">
/* ░░ CONTAINER PRINCIPAL ░░ */
.dark-aero-collapse {
  border-radius: 8px;
  padding: 1rem;

  /* Glassmorphism */
  background: rgba(30, 30, 30, 0.4);
  backdrop-filter: blur(12px);
  box-shadow: 0 0 10px var(--glow-color);

  color: var(--text-color);
  font-family: 'Source Code Pro', monospace;
}

/* ░░ TÍTULO (OPCIONAL) ░░ */
.collapse-title {
  display: block;
  font-size: 1rem;
  font-weight: 500;
  color: var(--text-color);
  margin-bottom: 0.5rem;
}

/* ░░ LINHA E SETA (BOTÃO) ░░ */
.collapse-divider-line {
  display: flex;
  align-items: center;
  gap: 0.5rem;

  cursor: pointer;
  margin-bottom: 0.5rem;
}

.collapse-divider {
  flex-grow: 1;
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  margin: 0;
}

/* ░░ SETA DE EXPANSÃO ░░ */
.arrow {
  display: inline-block;
  transform: rotate(0deg);
  transition: transform 0.25s ease;
  font-size: 1.1rem;
  color: var(--text-color);
}

.arrow.open {
  transform: rotate(90deg);
}

/* ░░ CONTEÚDO EXPANDIDO ░░ */
.collapse-content {
  padding-top: 0.5rem;
  color: var(--text-color);
}

/* ░░ ANIMAÇÃO DA TRANSIÇÃO ░░ */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.25s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>