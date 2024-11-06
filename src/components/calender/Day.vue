<template>
  <div :class="['day', { highlighted: isHighlighted }]" :style="{ backgroundColor: color }">
    <div class="day-box">
      <span class="day-number">{{ dayNumber }}</span>
      <span class="day-name">{{ dayName }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

interface Props {
  dayNumber: number;
  dayName: string;
  color?: string;
  isHighlighted?: boolean;
}

const props = defineProps<Props>();
</script>

<style scoped>
.day {
  display: inline-block;
  margin: 5px;
  width: 50px; /* Breite für das Kästchen */
  height: 70px; /* Höhe für das Kästchen */
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.day:hover {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.day-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0px;
}

.day-number {
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

.day-name {
  font-size: 12px;
  color: #666;
}

.highlighted {
  border: 2px solid #ff6600; /* Orange Rahmen bei Hervorhebung */
}

</style>
