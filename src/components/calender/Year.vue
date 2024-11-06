<template>
    <div class="year">
      <h1>Jahresübersicht für {{ year }}</h1>
      <div class="quarters">
        <Quarter 
          v-for="(quarter, index) in quarters" 
          :key="index" 
          :quarterName="quarter.quarterName" 
          :months="quarter.months" 
        />
      </div>
      <AppointmentInput @highlight-days="highlightDays" />
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref, computed } from 'vue';
  import Quarter from './Quarter.vue';
  import AppointmentInput from './AppointmentInput.vue';
  
  const year = ref(new Date().getFullYear());
  
  function generateYearData() {
  const year = 2025;
  const quarters = [];

  const monthNames = [
    "Januar", "Februar", "März", "April", "Mai", "Juni",
    "Juli", "August", "September", "Oktober", "November", "Dezember"
  ];

  const dayNames = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];

  function getKalenderwoche(datum: Date) {
    const dateUTC = new Date(Date.UTC(datum.getFullYear(), datum.getMonth(), datum.getDate()));
    const dayNumber = dateUTC.getUTCDay() || 7;
    dateUTC.setUTCDate(dateUTC.getUTCDate() + 4 - dayNumber);
    const jahrBeginn = new Date(Date.UTC(dateUTC.getUTCFullYear(), 0, 1));
    return Math.ceil(((dateUTC.getTime() - jahrBeginn.getTime()) / 86400000 + 1) / 7);
  }

  for (let quarterIndex = 0; quarterIndex < 4; quarterIndex++) {
    const quarter = {
      quarterName: `Q${quarterIndex + 1}`,
      months: [] as any[]
    };

    for (let monthIndex = quarterIndex * 3; monthIndex < quarterIndex * 3 + 3; monthIndex++) {
      const month = {
        monthName: monthNames[monthIndex],
        weeks: [] as any[]
      };

      const firstDayOfMonth = new Date(year, monthIndex, 1);
      const lastDayOfMonth = new Date(year, monthIndex + 1, 0); // letzter Tag des Monats
      let week: any = { weekNumber: getKalenderwoche(firstDayOfMonth), days: [] };

      for (let day = firstDayOfMonth; day <= lastDayOfMonth; day.setDate(day.getDate() + 1)) {
        const dayNumber = day.getDate();
        const dayName = dayNames[day.getDay()];
        const weekNumber = getKalenderwoche(day);

        if (week.weekNumber !== weekNumber) {
          month.weeks.push(week);
          week = { weekNumber, days: [] };
        }

        week.days.push({
          dayNumber,
          dayName,
          date: day.toISOString().split("T")[0] // Format: YYYY-MM-DD
        });
      }

      if (week.days.length) month.weeks.push(week);
      quarter.months.push(month);
    }

    quarters.push(quarter);
  }

  return quarters;
}

  
  const quarters = ref(generateYearData());
  
  // Funktion zur Aktualisierung der Markierungen
  function highlightDays(datesWithColors: { date: string, color: string }[]) {
    // Daten für markierte Tage aktualisieren
  }
  
  </script>
  
  <style scoped>
  .year {
    padding: 20px;
  }
  </style>
  