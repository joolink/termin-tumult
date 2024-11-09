<template>
    <div>
      <button @click="isOpen = !isOpen">Quarter {{ quarterData.quarter }}</button>
      <div v-if="isOpen">
        <Month v-for="month in quarterData.months" :key="month.month" :month-data="month" />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Month from './Month.vue';
  const props = defineProps(['quarterData']);
  const isOpen = ref(true);
  </script>
  