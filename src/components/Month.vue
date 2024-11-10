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
import { getWeeksFromMonth, createWeekDict} from '../scripts/weekUtils.js'

const props = defineProps({
  monthData: {
    type: Array,
    required: true
  }
});

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
