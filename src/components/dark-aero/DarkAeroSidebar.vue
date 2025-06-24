<template>
  <nav
    class="dark-aero-sidebar"
    :class="{ collapsed }"
    :style="{
      '--item-color'   : color,
      '--subitem-color': childrenColor,
      '--glow-color'   : glowColor
    }"
  >
    <!-- Botão ☰ / ✕ -->
    <button class="toggle-btn" @click="collapsed = !collapsed">
      <span v-if="!collapsed">☰</span>
      <span v-else>✕</span>
    </button>

    <ul class="menu">
      <li v-for="(item,i) in menu" :key="i">
        <!-- item sem filhos -->
        <router-link
          v-if="!item.children"
          :to="item.href"
          class="item glow-left"
          :class="alignClass"
        >
          {{ item.label }}
        </router-link>

        <!-- item com filhos -->
        <div
          v-else
          class="item glow-left"
          :class="alignClass"
          @click="item.open = !item.open"
        >
          {{ item.label }}
          <svg class="arrow" viewBox="0 0 24 24"
               :style="{ transform: item.open ? 'rotate(90deg)' : '' }">
            <path d="M9 6l6 6-6 6"
                  fill="none" stroke="currentColor" stroke-width="2" />
          </svg>
        </div>

        <!-- sub-itens -->
        <transition name="collapse">
          <ul v-if="item.children && item.open" class="sub-list">
            <li v-for="(sub,j) in item.children" :key="j">
              <router-link
                :to="sub.href"
                class="sub-item glow-left"
                :class="alignClass"
              >
                {{ sub.label }}
              </router-link>
            </li>
          </ul>
        </transition>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { reactive, ref, computed } from 'vue'

const props = defineProps({
  items          : Array,
  color          : { type: String, default: '#fff' },
  childrenColor  : { type: String, default: '#a0cfff' },
  align          : { type: String, default: 'left',
                     validator: v => ['left', 'center', 'right'].includes(v) },
  glowColor      : { type: String, default: 'rgba(0,128,255,.55)' }
})

const collapsed  = ref(false)                                   // estado sidebar
const menu       = reactive(props.items.map(i => ({ ...i, open:false })))
const alignClass = computed(() => `align-${props.align}`)       // classe de alinhamento
</script>

<style scoped>
.dark-aero-sidebar{
  /* medidas */
  --w-expanded : 250px;
  --w-collapsed: 40px;

  width : var(--w-expanded);
  transition: width .3s;
  background: rgba(30,30,30,.5);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,.15);
  border-radius: 8px;
  overflow : hidden;
  position : relative;
  padding  : .5rem;
}

/* ╭─── BOTÃO ───╮ */
.toggle-btn{
  position:absolute;
  top:8px; right:8px;
  background:none; border:none;
  color:#fff; font-size:1.2rem;
  cursor:pointer; z-index:2;
}

/* ╭─── ESTADO COLAPSADO ───╮ */
.dark-aero-sidebar.collapsed{
  width : var(--w-collapsed);
  height: var(--w-collapsed);     /* quadrado   */
  padding: 0;                     /* sem margem */
  display:flex; align-items:center;
  justify-content:center;
}
.dark-aero-sidebar.collapsed .menu{ display:none }

/* ╭─── MENU ───╮ */
.menu{ list-style:none; margin:3rem 0 0; padding:0; }

/* itens de 1º nível & sub-itens */
.item, .sub-item{
  position: relative;        /* para a barra glow */
  display  : flex;
  align-items: center;
  padding : .6rem .8rem;
  margin  : .4rem 0;
  background: rgba(255,255,255,.05);
  border-radius: 6px;
  color  : var(--item-color);
  text-decoration:none;
  transition: background .3s, box-shadow .3s, opacity .3s;
}
.sub-item{
  padding:.4rem .6rem;
  margin  :.2rem 0 .2rem 1.5rem;
  color   : var(--subitem-color);
}

/* Barra de glow individual (lado esquerdo) */
.item::before, .sub-item::before{
  content:''; position:absolute;
  left:0; top:0; bottom:0; width:4px;
  background: var(--glow-color);
  border-radius: 6px 0 0 6px;
}

/* Hover */
.item:hover, .sub-item:hover{
  background: rgba(255,255,255,.1);
  box-shadow: 0 0 8px var(--glow-color);
  color:#fff;
}

/* Alinhamento de conteúdo */
.align-left   { justify-content:flex-start; }
.align-center { justify-content:center;     }
.align-right  { justify-content:flex-end;   }

/* Seta expandível */
.arrow{
  width:1em; height:1em; margin-left:.5rem;
  color:rgba(255,255,255,.7);
  transition: transform .3s;
}

/* Sub-lista (sem bullet) */
.sub-list{ list-style:none; margin:.5rem 0 0; padding:0; }

/* Animação collapse */
.collapse-enter-from, .collapse-leave-to   { height:0;   opacity:0; }
.collapse-enter-to  , .collapse-leave-from { height:auto;opacity:1; }
.collapse-enter-active, .collapse-leave-active{
  transition: height .3s ease, opacity .3s ease;
}
</style>
