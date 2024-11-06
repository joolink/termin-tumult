<template>
    <div class="quarter">
      <div class="quarter-header">
        <h3>{{ quarterName }}</h3>
      </div>
      <div class="months-container">
        <Month 
          v-for="(month, index) in months" 
          :key="index" 
          :monthName="month.monthName" 
          :weeks="month.weeks" 
        />
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { defineProps } from 'vue';
  import Month from './Month.vue';
  
  interface WeekData {
    weekNumber: number;
    days: { dayNumber: number; dayName: string; color?: string; isHighlighted?: boolean }[];
  }
  
  interface MonthData {
    monthName: string;
    weeks: WeekData[];
  }
  
  interface Props {
    quarterName: string;
    months: MonthData[];
  }
  
  const props = defineProps<Props>();
  </script>
  
  <style scoped>
  .quarter {
    display: flex;
    flex-direction: column;
    margin: 10px;
    padding: 5px;
    width: 100%;
  }
  
  .quarter-header {
    text-align: center;
    margin-bottom: 10px;
  }
  
  .quarter-header h3 {
    font-size: 20px;
    font-weight: bold;
    color: #333;
  }
  
  .months-container {
    display: flex;
    flex-wrap: wrap; /* Ermöglicht das Umbrechen der Monate auf die nächste Zeile, falls der Platz knapp wird */
    justify-content: flex-start; /* Beginne mit dem linken Rand */
    gap: 0px; /* Abstand zwischen den Monats-Boxen */
  }
  
  </style>
  