<template>
    <div class="month">
      <div class="month-header">
        <h3>{{ monthName }}</h3>
      </div>
      <div class="weeks">
        <div class="week-group" v-for="(week, index) in weeks" :key="index">
          <Week :weekNumber="week.weekNumber" :days="week.days" />
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { defineProps } from 'vue';
  import Week from './Week.vue';
  
  interface WeekData {
    weekNumber: number;
    days: { dayNumber: number; dayName: string; color?: string; isHighlighted?: boolean }[];
  }
  
  interface Props {
    monthName: string;
    weeks: WeekData[];
  }
  
  const props = defineProps<Props>();
  </script>
  
  <style scoped>
  .month {
    display: flex;
    flex-direction: column; /* Monats-Inhalt vertikal */
    align-items: center;
    margin: 10px;
    padding: 10px;
    width: 220px; /* Breite für jeden Monat */
    background-color: #749f9f;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Leichter Schatten */
  }
  
  .month-header {
    text-align: center;
    margin-bottom: 5px;
  }
  
  .month-header h3 {
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  
  .weeks {
    display: flex;
    flex-direction: column; /* Wochen untereinander anordnen */
    align-items: center;
    width: 100%;
  }
  
  .week-group {
    margin-bottom: 0px; /* Abstand zwischen den Wochen */
  }
  </style>
  