<template>
  <nav
    class="dark-aero-sidebar"
    :style="{
      '--item-color': props.color,
      '--subitem-color': props.children_color
    }"
  >
    <ul>
      <li v-for="(item, idx) in state.items" :key="idx">
        <!-- Item de nível 1 sem filhos -->
        <router-link
          v-if="!item.children && item.href"
          :to="item.href"
          class="item"
        >
          {{ item.label }}
        </router-link>

        <!-- Item de nível 1 com filhos -->
        <div v-else class="item" @click="toggle(item)">
          {{ item.label }}
          <svg
            v-if="item.children"
            class="arrow"
            viewBox="0 0 24 24"
            :style="{ transform: item.open ? 'rotate(90deg)' : 'rotate(0deg)' }"
          >
            <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2"/>
          </svg>
        </div>

        <!-- Sub-itens -->
        <transition name="collapse">
          <ul v-if="item.children && item.open" class="sub-list">
            <li
              v-for="(child, cIdx) in item.children"
              :key="cIdx"
            >
              <router-link
                :to="child.href"
                class="sub-item"
              >
                {{ child.label }}
              </router-link>
            </li>
          </ul>
        </transition>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { reactive } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  items: {
    type: Array,
    required: true,
    default: () => []
  },
  color: {
    type: String,
    default: '#ffffff'      // cor dos itens principais
  },
  children_color: {
    type: String,
    default: '#a0cfff'      // cor dos sub-itens
  }
})

const state = reactive({
  items: props.items.map(i => ({ ...i, open: false }))
})

function toggle(item) {
  if (item.children) item.open = !item.open
}
</script>

<style scoped>
.dark-aero-sidebar {
  width: 250px;
  background: rgba(30,30,30,0.5);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.1),
    0 4px 12px rgba(0,0,0,0.4);
  border-radius: 8px;
  padding: 1rem;
  font-family: 'Source Code Pro', monospace;
}

/* Reset da lista */
.dark-aero-sidebar ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

/* Itens de NÍVEL 1 */
.dark-aero-sidebar .item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem 0.8rem;
  margin: 0.4rem 0;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 6px;
  cursor: pointer;
  color: var(--item-color);
  text-decoration: none;
  transition: background 0.3s, box-shadow 0.3s;
}
.dark-aero-sidebar .item:hover {
  background: rgba(255,255,255,0.1);
  box-shadow: 0 0 8px rgba(0,128,255,0.4);
}

/* Seta de expand/collapse */
.dark-aero-sidebar .arrow {
  width: 1em;
  height: 1em;
  color: rgba(255,255,255,0.7);
  transition: transform 0.3s;
}

/* Sub-lista */
.dark-aero-sidebar .sub-list {
  margin: 0.5rem 0 0.5rem 1.5rem;
  padding: 0;
}

/* Itens de NÍVEL 2 */
.dark-aero-sidebar .sub-item {
  text-align: left;
  display: block;
  padding: 0.4rem 0.6rem;
  margin-bottom: 0.25rem;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 6px;
  color: var(--subitem-color);
  text-decoration: none;
  transition: background 0.3s, box-shadow 0.3s;
}
.dark-aero-sidebar .sub-item:hover {
  background: rgba(255,255,255,0.1);
  box-shadow: 0 0 6px rgba(0,128,255,0.4);
  color: #fff;
}

/* Animação de expanção/colapso */
.collapse-enter-from,
.collapse-leave-to {
  height: 0; opacity: 0;
}
.collapse-enter-to,
.collapse-leave-from {
  height: auto; opacity: 1;
}
.collapse-enter-active,
.collapse-leave-active {
  transition: height 0.3s ease, opacity 0.3s ease;
}
</style>
