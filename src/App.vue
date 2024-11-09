<script setup lang="ts">

import Overview from './components/Overview.vue';
import calendarData from './data/calendarData.json';

</script>

<template>
  <!-- <header>
    <div class="wrapper">
      <HelloWorld msg="Coming appointments..." />
    </div>
  </header> -->

  <main>
    <Overview :data="calendarData"></Overview>
  </main>
</template>

<style scoped>

</style>
