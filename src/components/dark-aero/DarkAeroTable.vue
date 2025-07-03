<!-- src/components/dark-aero/DarkAeroTable.vue -->
<template>
  <!-- aplica as CSS-vars (--text-color & --glow-color) via :style -->
  <div class="dark-aero-table" :style="{
    '--text-color': textColor,
    '--glow-color': glowColor
  }">
    <table>
      <thead>
        <tr>
          <th v-for="col in columns" :key="col.key" @click="toggleSort(col.key)"
            style="cursor:pointer; user-select:none;">
            {{ col.label }}
            <span v-if="sortKey === col.key">
              {{ sortOrder === 'asc' ? '▲' : '▼' }}
            </span>
          </th>
        </tr>
      </thead>


      <tbody>
        <tr v-for="(row, rIdx) in sortedData" :key="rIdx">
          <td v-for="col in columns" :key="col.key">
            {{ row[col.key] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
/**
 * columns : Array<{ key : string ; label : string }>
 * data    : Array<Record<string , any>>
 */
import { computed, ref } from 'vue'
const props = defineProps({
  columns: { type: Array, required: true, default: () => [] },
  data: { type: Array, required: true, default: () => [] },
  textColor: { type: String, default: '#fff' },
  glowColor: { type: String, default: 'rgba(0,0,0,.45)' }
})

const sortKey = ref<string | null>(null)
const sortOrder = ref<'asc' | 'desc'>('asc')

const toggleSort = (key: string) => {
  if (sortKey.value === key) {
    // Alternar entre asc <-> desc
    sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc'
  } else {
    sortKey.value = key
    sortOrder.value = 'asc'
  }
}

const sortedData = computed(() => {
  if (!sortKey.value) return props.data

  return [...props.data].sort((a:any, b:any) => {
    const valA = a[sortKey.value!]
    const valB = b[sortKey.value!]

    if (typeof valA === 'number' && typeof valB === 'number') {
      return sortOrder.value === 'asc' ? valA - valB : valB - valA
    }

    return sortOrder.value === 'asc'
      ? String(valA).localeCompare(String(valB))
      : String(valB).localeCompare(String(valA))
  })
})

</script>

<style scoped>
.dark-aero-table table {
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
  background: rgba(30, 30, 30, .40);
  backdrop-filter: blur(12px);
  border-radius: 8px;
  overflow: hidden;

  /* usa a cor de glow na sombra externa */
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, .05),
    0 0 10px var(--glow-color);
}

/* células */
.dark-aero-table th,
.dark-aero-table td {
  border: none;
  padding: .75rem 1rem;
  text-align: left;
  color: var(--text-color);
  font-family: 'Source Code Pro', monospace;
}

.dark-aero-table th {
  background: rgba(255, 255, 255, .05);
  font-weight: 500;
}

/* zebra-striping */
.dark-aero-table tbody tr:nth-child(odd) td {
  background: rgba(255, 255, 255, .02);
}

.dark-aero-table tbody tr:nth-child(even) td {
  background: rgba(255, 255, 255, .01);
}

/* highlight on hover – glow customizável */
.dark-aero-table tbody tr:hover td {
  background: rgba(255, 255, 255, .12);
  backdrop-filter: blur(6px);
  box-shadow: inset 0 0 8px var(--glow-color);
  transition: background .25s ease, box-shadow .25s ease;
}
</style>
