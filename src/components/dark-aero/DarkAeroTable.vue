<template>
  <!-- aplica a CSS-var --text-color via :style -->
  <div
    class="dark-aero-table"
    :style="{ '--text-color': textColor }"
  >
    <table>
      <thead>
        <tr>
          <th v-for="col in columns" :key="col.key">
            {{ col.label }}
          </th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(row, rIdx) in data" :key="rIdx">
          <td v-for="col in columns" :key="col.key">
            {{ row[col.key] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

/**
 * columns : Array<{ key:string , label:string }>
 * data    : Array<Record<string , any>>
 */
const props = defineProps({
  columns:    { type: Array,  required: true, default: () => [] },
  data:       { type: Array,  required: true, default: () => [] },
  textColor:  { type: String, default: '#fff' }  // nova prop
})
</script>

<style scoped>
.dark-aero-table table{
  width:100%; border-collapse:collapse; margin:1rem 0;
  background:rgba(30,30,30,.4); backdrop-filter:blur(12px);
  border-radius:8px; overflow:hidden;
  box-shadow: inset 0 1px 0 rgba(255,255,255,.05),
              0 4px 12px rgba(0,0,0,.4);
}

/* células */
.dark-aero-table th,
.dark-aero-table td{
  border:none; padding:.75rem 1rem; text-align:left;
  color:var(--text-color);          /* <- usa a var */
  font-family:'Source Code Pro',monospace;
}

.dark-aero-table th{
  background:rgba(255,255,255,.05); font-weight:500;
}

/* zebra-striping */
.dark-aero-table tbody tr:nth-child(odd)  td{ background:rgba(255,255,255,.02); }
.dark-aero-table tbody tr:nth-child(even) td{ background:rgba(255,255,255,.01); }

/* highlight on hover */
.dark-aero-table tbody tr:hover td{
  background:rgba(255,255,255,.12);
  backdrop-filter:blur(6px);
  box-shadow: inset 0 0 8px rgba(255,255,255,.15);
  transition:background .25s ease, box-shadow .25s ease;
}
</style>
