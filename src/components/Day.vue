<template>
    <div class="day">
      <div class="number">{{ format(dayData.day,"dd") }}</div>	
      <div class="weekday">{{ format(dayData.day,"iii", { locale: de }) }}</div>
      <div v-for="annotation in dayData.annotations" :key="annotation.name" class="marker" :style="{ backgroundColor: annotation.color }"></div>
    </div>
    
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  import { format } from 'date-fns';
  import { de } from 'date-fns/locale';
  const props = defineProps(['dayData']);
  </script>
  
  <style scoped>
  .day {
    font-family: 'Courier New', monospace;
    font-size: large;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    gap: 10px;
    border: 1px solid black;
  }

  .number{
    font-weight: bold;
  }

  .marker {
    width: 100%;
    height: 2em;
    margin: 0px;
  }
  </style>
  