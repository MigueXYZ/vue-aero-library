<template>
  <nav class="dark-aero-sidebar" :class="{ collapsed }" :style="{
    '--item-color': color,
    '--subitem-color': childrenColor,
    '--glow-color': glowColor
  }">
    <!-- Botão ☰ / ✕ -->
    <button class="toggle-btn" @click="collapsed = !collapsed">
      <span v-if="!collapsed">☰</span>
      <span v-else>✕</span>
    </button>

    <ul class="menu">
      <li v-for="(item, i) in menu" :key="i">
        <!-- item sem filhos -->
        <router-link v-if="!item.children" :to="item.href" class="item" :class="[alignClass, glowClass]">
          {{ item.label }}
        </router-link>

        <!-- item com filhos -->
        <div v-else class="item" :class="[alignClass, glowClass]" @click="item.open = !item.open">
          {{ item.label }}
          <svg class="arrow" viewBox="0 0 24 24" :style="{ transform: item.open ? 'rotate(90deg)' : '' }">
            <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" />
          </svg>
        </div>

        <!-- sub-itens -->
        <transition name="collapse">
          <ul v-if="item.children && item.open" class="sub-list">
            <li v-for="(sub, j) in item.children" :key="j">
              <router-link :to="sub.href" class="sub-item" :class="[alignClass, glowClass]">
                {{ sub.label }}
              </router-link>
            </li>
          </ul>
        </transition>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { reactive, ref, computed } from 'vue'

const props = defineProps({
  items: { type: Array, default: () => [] },
  color: { type: String, default: '#fff' },
  childrenColor: { type: String, default: '#a0cfff' },
  align: {
    type: String,
    default: 'left',
    validator: (v: string) => ['left', 'center', 'right'].includes(v)
  },
  glowColor: { type: String, default: 'rgba(0,128,255,.55)' },
  glowSide: {
    type: String,
    default: 'left',
    validator: (v: string) => ['left', 'right'].includes(v)
  }
})

const collapsed = ref(false)
const menu = reactive(props.items.map(i => ({ ...(i as Record<string, any>), open: false })))

const alignClass = computed(() => `align-${props.align}`)
const glowClass = computed(() => `glow-${props.glowSide}`)   // <── NOVO
</script>

<style scoped>
/* ░░ SIDEBAR PRINCIPAL ░░ */
.dark-aero-sidebar {
  --w-expanded: 250px;
  --w-collapsed: 40px;

  width: var(--w-expanded);
  transition: width 0.3s;
  padding: 0.5rem;
  border-radius: 8px;

  background: linear-gradient(135deg,
    rgba(0, 0, 0, 0.15),
    rgba(80, 80, 80, 0.15) 80%,
    rgba(150, 150, 150, 0.15) 100%);
  backdrop-filter: blur(14px);

  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.2),
    0 0 6px rgba(255, 255, 255, 0.05);

  overflow-y: auto;
  position: relative;
  max-height: 100vh;
}

/* ░░ BOTÃO TOGGLE (☰ ou ✕) ░░ */
.toggle-btn {
  position: absolute;
  top: 8px;
  right: 8px;
  background: none;
  border: none;
  font-size: 1.2rem;
  color: #fff;
  cursor: pointer;
  z-index: 2;
}

/* ░░ MODO COLAPSADO ░░ */
.dark-aero-sidebar.collapsed {
  width: var(--w-collapsed);
  height: var(--w-collapsed);
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dark-aero-sidebar.collapsed .menu {
  display: none;
}

/* ░░ MENU DE NAVEGAÇÃO ░░ */
.menu {
  list-style: none;
  margin: 3rem 0 0;
  padding: 0;
}

/* ░░ ITENS DE MENU E SUBITENS ░░ */
.item,
.sub-item {
  position: relative;
  display: flex;
  align-items: center;

  padding: 0.6rem 0.8rem;
  margin: 0.4rem 0;

  border-radius: 6px;
  text-decoration: none;
  color: var(--item-color);

  background: linear-gradient(0deg,
    rgba(0, 0, 0, 0.15),
    rgba(112, 112, 112, 0.15) 80%,
    rgba(179, 179, 179, 0.15) 100%);

  transition: background 0.3s, box-shadow 0.3s, opacity 0.3s;
}

.sub-item {
  padding: 0.4rem 0.6rem;
  margin: 0.2rem 0 0.2rem 1.5rem;
  color: var(--subitem-color);
}

/* ░░ BARRA DE GLOW ░░ */
.item::before,
.sub-item::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 4px;
  background: var(--glow-color);
}

/* Glow à esquerda */
.glow-left::before {
  left: 0;
  border-radius: 6px 0 0 6px;
}

/* Glow à direita */
.glow-right::before {
  right: 0;
  border-radius: 0 6px 6px 0;
}

/* ░░ HOVER ░░ */
.item:hover,
.sub-item:hover {
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 8px var(--glow-color);
  color: #fff;
}

/* ░░ ALINHAMENTO DO TEXTO ░░ */
.align-left {
  justify-content: flex-start;
}
.align-center {
  justify-content: center;
}
.align-right {
  justify-content: flex-end;
}

/* ░░ ÍCONE DE SETA EXPANSÍVEL ░░ */
.arrow {
  width: 1em;
  height: 1em;
  margin-left: 0.5rem;
  color: rgba(255, 255, 255, 0.7);
  transition: transform 0.3s;
}

/* ░░ SUBLISTA DE FILHOS ░░ */
.sub-list {
  list-style: none;
  margin: 0.5rem 0 0;
  padding: 0;
}

/* ░░ TRANSIÇÃO DE COLAPSAR ░░ */
.collapse-enter-from,
.collapse-leave-to {
  height: 0;
  opacity: 0;
}

.collapse-enter-to,
.collapse-leave-from {
  height: auto;
  opacity: 1;
}

.collapse-enter-active,
.collapse-leave-active {
  transition: height 0.3s ease, opacity 0.3s ease;
}

/* ░░ TOOLTIP QUANDO COLAPSADO ░░ */
.dark-aero-sidebar.collapsed .item[title],
.dark-aero-sidebar.collapsed .sub-item[title] {
  position: relative;
}

.dark-aero-sidebar.collapsed .item[title]:hover::after,
.dark-aero-sidebar.collapsed .sub-item[title]:hover::after {
  content: attr(title);
  position: absolute;
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  white-space: nowrap;
  background: rgba(30, 30, 30, 0.9);
  color: #fff;
  font-size: 0.8rem;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  margin-left: 0.5rem;
  z-index: 10;
  pointer-events: none;
}

</style>
