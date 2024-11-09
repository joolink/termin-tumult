<template>
    <div class="week">
      <div class="week-header">
        <h4>{{ weekNumber }}</h4>
      </div>
      <div class="days">
        <Day 
          v-for="(day, index) in days" 
          :key="index" 
          :dayNumber="day.dayNumber" 
          :dayName="day.dayName" 
          :color="day.color" 
          :isHighlighted="day.isHighlighted" 
        />
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { defineProps } from 'vue';
  import Day from './Day.vue';
  import type { DayData } from './DayData'; // Importiere das Interface aus types.ts
  
  interface Props {
    weekNumber: number;
    days: DayData[];
  }
  
  const props = defineProps<Props>();
  </script>
  
  <style scoped>
  .week {
    border: 1px solid #cccccc; /* Leichter grauer Rahmen */
    border-radius: 1px; /* Abgerundete Ecken */
    padding: 1px;
    margin: 1px 0;
    box-shadow: 0 2px 100px rgba(0, 0, 0, 0.1); /* Leichter Schatten */
    background-color: #f9f9f9; /* Helles Hintergrund */
    width: 20%; /* Schmalere Breite der Woche */
  }
  
  .week-header {
    text-align: center;
    margin-bottom: 8px;
  }
  
  .week-header h4 {
    font-size: 16px; /* Etwas kleinere Schriftgröße für die Kalenderwoche */
    font-weight: bold;
    color: #333;
  }
  
  .days {
    display: flex;
    flex-direction: column; /* Vertikale Anordnung der Tage */
    align-items: center; /* Zentrieren der Tage */
  }
  
  </style>
  