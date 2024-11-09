<template>
    <div>
      <button @click="isOpen = !isOpen">Year {{ yearData.Year }}</button>
      <div v-if="isOpen">
        <Quarter v-for="quarter in yearData.quarters" :key="quarter.quarter" :quarter-data="quarter" />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Quarter from './Quarter.vue';
  const props = defineProps(['yearData']);
  const isOpen = ref(true);
  </script>
  