<template>
  <div class="dark-aero-table" :style="{
    '--text-color': textColor,
    '--glow-color': glowColor
  }">
    <table>
      <thead>
        <tr>
          <th
            v-for="col in columns"
            :key="col.key"
            @click="toggleSort(col.key)"
            class="sortable"
          >
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
import { computed, ref } from 'vue'

const props = defineProps({
  columns:    { type: Array, required: true, default: () => [] },
  data:       { type: Array, required: true, default: () => [] },
  textColor:  { type: String, default: '#fff' },
  glowColor:  { type: String, default: 'rgba(0,0,0,.45)' }
})

const sortKey = ref<string | null>(null)
const sortOrder = ref<'asc' | 'desc'>('asc')

function toggleSort(key: string) {
  if (sortKey.value === key) {
    sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc'
  } else {
    sortKey.value = key
    sortOrder.value = 'asc'
  }
}

const sortedData = computed(() => {
  if (!sortKey.value) return props.data

  return [...props.data].sort((a: any, b: any) => {
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
/* ░░ CONTAINER ░░ */
.dark-aero-table table {
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
  border-radius: 8px;
  overflow: hidden;

  background: rgba(30, 30, 30, 0.4);
  backdrop-filter: blur(12px);

  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.05),
    0 0 10px var(--glow-color);
}

/* ░░ CABEÇALHOS ░░ */
th {
  padding: 0.75rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  font-weight: 500;
  font-family: 'Source Code Pro', monospace;
  color: var(--text-color);
  text-align: left;
  user-select: none;
  cursor: pointer;
}

th.sortable:hover {
  background: rgba(255, 255, 255, 0.08);
}

/* ░░ CÉLULAS DE DADOS ░░ */
td {
  padding: 0.75rem 1rem;
  font-family: 'Source Code Pro', monospace;
  color: var(--text-color);
}

/* ░░ ZEBRA STRIPING ░░ */
tbody tr:nth-child(odd) td {
  background: rgba(255, 255, 255, 0.02);
}

tbody tr:nth-child(even) td {
  background: rgba(255, 255, 255, 0.01);
}

/* ░░ HOVER ░░ */
tbody tr:hover td {
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(6px);
  box-shadow: inset 0 0 8px var(--glow-color);
  transition: background 0.25s ease, box-shadow 0.25s ease;
}
</style>
