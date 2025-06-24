<template>
    <div class="dark-aero-table">
      <table>
        <thead>
          <tr>
            <th v-for="col in columns" :key="col.key">{{ col.label }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, rowIndex) in data" :key="rowIndex">
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
   * columns: Array<{ key: string, label: string }>
   * data: Array<Record<string, any>>
   */
  const props = defineProps({
    columns: {
      type: Array,
      required: true,
      default: () => []
    },
    data: {
      type: Array,
      required: true,
      default: () => []
    }
  })
  </script>
  
  <style scoped>
  .dark-aero-table table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 1rem;
    background: rgba(30, 30, 30, 0.4);
    backdrop-filter: blur(12px);
    border-radius: 8px;
    overflow: hidden;
    box-shadow:
      inset 0 1px 0 rgba(255,255,255,0.05),
      0 4px 12px rgba(0,0,0,0.4);
  }
  
  .dark-aero-table th,
  .dark-aero-table td {
    border: none;
    padding: 0.75rem 1rem;
    text-align: left;
    color: #fff;
    font-family: 'Source Code Pro', monospace;
  }
  
  .dark-aero-table th {
    background: rgba(255, 255, 255, 0.05);
    font-weight: 500;
  }
  
  .dark-aero-table tbody tr:nth-child(odd) td {
    background: rgba(255, 255, 255, 0.02);
  }
  .dark-aero-table tbody tr:nth-child(even) td {
    background: rgba(255, 255, 255, 0.01);
  }

  .dark-aero-table tbody tr:hover td {
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(4px);
    box-shadow: inset 0 0 8px rgba(255, 255, 255, 0.1);
    transition: background 0.3s ease, box-shadow 0.3s ease;
  }

  </style>
  