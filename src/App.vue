<script setup lang="ts">
import Day from './components/calender/Day.vue';
import Day2 from './components/calender/Day2.vue';
import Year from './components/calender/Year.vue';
import HelloWorld from './components/HelloWorld.vue'
import iCalReader from './components/iCalReader.vue'


</script>

<template>
  <!-- <header>
    <div class="wrapper">
      <HelloWorld msg="Coming appointments..." />
    </div>
  </header> -->

  <main>
    <!-- <Year /> -->
     <Day2 />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
