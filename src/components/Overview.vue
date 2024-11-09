<template>
   <div>
     <Year v-for="year in data" :key="year.Year" :year-data="year" />
   </div>
 </template>
 
 <script setup>
 import Year from './Year.vue';
 const props = defineProps(['data']);
 </script>
 