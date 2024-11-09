<template>
  <div class="week-container">
    <div class="week-number">
      {{ currentWeek }}
    </div>
    <div class="week">
      <Day v-for="day in dayArray" :key="day.day" :day-data="day" />
    </div>
    
  </div>
    
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { getMonth, getWeek, isSameDay, startOfWeek, addDays } from 'date-fns';
  import Day from './Day.vue';

  const props = defineProps({
  weekData: {
    type: Array,
    required: true
  }
});

  function getWeekFromDay(date, locale = 'de-DE') {
    const startOfCurrentWeek = startOfWeek(date, { weekStartsOn: 1 });

    const week = Array.from({ length: 7 }).map((_, i) => {
      const day = addDays(startOfCurrentWeek, i);

      // Überprüfen, ob der Monat des aktuellen Tags dem Monat des Starttags der Woche entspricht
      if (getMonth(day) !== getMonth(startOfCurrentWeek)) {
        return null; // Tag gehört nicht zum gleichen Monat, daher entfernen (null zurückgeben)
      }

      const annotationsForDay = props.weekData.find(
        (data) => isSameDay(data.day, day)
      )?.annotations || [];

      return {
        day: day,
        annotations: annotationsForDay
      };
    }).filter(day => day !== null);

    return week;
  }

 
  const currentDay = computed(() => props.weekData[0]?.day);
  const dayArray = computed(() => getWeekFromDay(currentDay.value));
  const currentWeek = getWeek(currentDay.value)

  </script>
  
  <style scoped>
  .week {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .week-container{
    display: flex;
    flex-direction: row;
  }

  .week-number{
    display: flex;
    border: 1px solid black;
    font-weight: bold;
    justify-content: center; 
    align-items: center; 
    font-size: large;
    padding: 10px;
  }
  </style>
  