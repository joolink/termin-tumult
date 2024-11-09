<template>
  <div class="month-container">
    <div class="month-name">
      {{ currentMonth }}
    </div>
    <div class="month">
      <!-- Verwende eine gültige Woche als key, z.B. die Wochennummer -->
      <WeekInYear v-for="week in weekArray" :key="week.week" :week-data="weekDict[week.week]" />
    </div>
  </div>
</template>

<script setup>
import WeekInYear from './WeekInYear.vue';
import { computed } from 'vue';
import { format, startOfMonth, endOfMonth, isBefore, isSameMonth, getWeek, startOfWeek, addDays, isSameWeek } from 'date-fns';

const props = defineProps({
  monthData: {
    type: Array,
    required: true
  }
});

// Funktion zur Erstellung des weekDicts mit angefangenen Wochen
// Funktion zur Erstellung des weekDicts
function createWeekDict(monthData) {
  const weekDict = {};

  // Berechne den ersten und letzten Tag des Monats
  const startOfMonthDate = startOfMonth(monthData[0]?.day);
  const endOfMonthDate = endOfMonth(monthData[monthData.length - 1]?.day);

  // Berechne den ersten Montag der Woche
  let currentWeekStart = startOfWeek(startOfMonthDate, { weekStartsOn: 1 }); // Woche beginnt am Montag
  
  // Schleife über alle Wochen im Monat
  while (isBefore(currentWeekStart, endOfMonthDate) || isSameMonth(currentWeekStart, endOfMonthDate)) {
    const weekNumber = getWeek(currentWeekStart); // Wochennummer berechnen
    if (!weekDict[weekNumber]) {
      weekDict[weekNumber] = []; // Initialisiere eine leere Woche, falls noch nicht vorhanden
    }

    // Füge die Tage dieser Woche zu weekDict hinzu
    let weekHasAnnotations = false; // Flag, um zu überprüfen, ob die Woche Annotationen hat
    monthData.forEach(({ day, annotations }) => {
      if (isSameWeek(day, currentWeekStart)) {
        weekHasAnnotations = true;
        weekDict[weekNumber].push({ day, annotations });
      }
    });

    // Falls keine Annotationen für diese Woche existieren, füge den ersten Tag ohne Annotationen hinzu
    if (!weekHasAnnotations) {
      weekDict[weekNumber].push({
        day: currentWeekStart, // Füge den ersten Tag der Woche ohne Annotationen hinzu
        annotations: []
      });
    }

    // Gehe zur nächsten Woche
    currentWeekStart = addDays(currentWeekStart, 7);
  }
  return weekDict;
}

function getWeeksFromMonth(date) {
  const startMonth = startOfMonth(date); // Erster Tag des Monats
  const endMonth = endOfMonth(date); // Letzter Tag des Monats

  // Starte mit der ersten Woche des Monats (beginnt immer am Montag)
  const startOfWeekForMonth = startOfWeek(startMonth, { weekStartsOn: 1 }); // Woche beginnt am Montag
  const weeks = [];

  let currentWeekStart = startOfWeekForMonth;

  // Gehe jede Woche durch, bis wir das Ende des Monats erreicht haben
  while (isBefore(currentWeekStart, endMonth) || isSameMonth(currentWeekStart, endMonth)) {
    // console.log(currentWeekStart)
    const currentWeekEnd = addDays(currentWeekStart, 5); // Ende der aktuellen Woche (6 Tage nach dem Start)

    // Füge die Woche hinzu, wenn sie Tage aus dem Monat enthält
    if (isSameMonth(currentWeekEnd, startMonth)) {
      weeks.push({
        week: getWeek(currentWeekEnd),  // Verwende currentWeekStart als Bezug
      });
    }

    // Gehe zur nächsten Woche
    currentWeekStart = addDays(currentWeekStart, 7);
  }
  
  return weeks;
  
}

const currentMonth = computed(() => format(props.monthData[0]?.day, "LLLL"));
const currentDay = computed(() => props.monthData[0]?.day);
const weekArray = computed(() => getWeeksFromMonth(currentDay.value));
const weekDict = computed(() => createWeekDict(props.monthData));

</script>

<style scoped>
.month-container {
  display: flex;
  flex-direction: column;
}

.month-name {
  display: flex;
  border: 1px solid black;
  justify-content: center;
  align-items: center;
  font-size: large;
  padding: 10px;
}
</style>
