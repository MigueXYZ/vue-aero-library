<template>
    <nav class="dark-aero-sidebar">
      <ul>
        <li v-for="(item, index) in state.items" :key="index">
          <div class="item" @click="toggle(item)">
            <span>{{ item.label }}</span>
            <svg
              v-if="item.children"
              class="arrow"
              viewBox="0 0 24 24"
              :style="{ transform: item.open ? 'rotate(90deg)' : 'rotate(0deg)' }"
            >
              <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2"/>
            </svg>
          </div>
          <transition name="collapse">
            <ul v-if="item.children && item.open" class="sub-list">
              <li v-for="(child, cIndex) in item.children" :key="cIndex">
                <a :href="child.href || '#'">{{ child.label }}</a>
              </li>
            </ul>
          </transition>
        </li>
      </ul>
    </nav>
  </template>
  
  <script setup>
  import { reactive } from 'vue'
  const props = defineProps({
    items: {
      type: Array,
      required: true,
      default: () => []
    }
  })
  
  // Make items reactive to track open/collapse state
  const state = reactive({ items: props.items.map(i => ({ ...i, open: false })) })
  function toggle(item) {
    if (item.children) item.open = !item.open
  }
  </script>
  
  <style scoped>
  .dark-aero-sidebar {
    width: 250px;
    background: rgba(30,30,30,0.4);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255,255,255,0.15);
    box-shadow:
      inset 0 1px 1px rgba(255,255,255,0.1),
      0 4px 12px rgba(0,0,0,0.4),
      0 0 8px var(--base-glow, rgba(128,128,128,0.3));
    border-radius: 6px;
    padding: 1rem;
    font-family: 'Source Code Pro', monospace;
  }
  .dark-aero-sidebar ul {
    text-align: left;
    list-style: none;
    margin-bottom: .2rem;
    padding: 0;
  }
  .dark-aero-sidebar .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0.75rem;
    margin: 0.5rem 0; /* increased vertical spacing */
    background: var(--item-bg, rgba(255,255,255,0.03));
    border: 1px solid var(--item-border, rgba(255,255,255,0.1));
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.3s ease, box-shadow 0.3s ease;
  }
  .dark-aero-sidebar .item:hover {
    background: rgba(255,255,255,0.06);
    box-shadow: 0 0 8px var(--hover-glow, rgba(0,128,255,0.4));
  }
  .dark-aero-sidebar .item span {
    color: var(--text-color, #fff);
  }
  .dark-aero-sidebar .arrow {
    width: 1em;
    height: 1em;
    color: rgba(255,255,255,0.6);
    transition: transform 0.3s ease;
  }
  .dark-aero-sidebar .sub-list {
    margin: 0.5rem 0 0.5rem 1rem;
    padding: 0;
  }
  .dark-aero-sidebar .sub-list li a {
    display: block;
    padding: 0.4rem 0.6rem;
    margin-bottom: .2rem;
    background: var(--item-bg, rgba(255,255,255,0.03));
    border: 1px solid var(--item-border, rgba(255,255,255,0.1));
    border-radius: 4px;
    color: var(--link-color, #a0cfff);
    transition: background 0.3s ease, box-shadow 0.3s ease, color 0.3s ease;
    text-decoration: none;
  }
  .dark-aero-sidebar .sub-list li a:hover {
    background: rgba(255,255,255,0.06);
    box-shadow: 0 0 6px var(--hover-glow, rgba(0,128,255,0.4));
    color: var(--link-hover, #fff);
  }
  /* collapse transition */
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
  </style>
  