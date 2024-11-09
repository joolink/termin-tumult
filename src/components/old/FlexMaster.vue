<template>
    <div class="master-container">
      <SubContainer v-for="(container, index) in containers" :key="index" :items="container.items" :title="container.title" />
    </div>
  </template>
  
  <script>
  import SubContainer from './SubContainer.vue';
  
  export default {
    components: {
      SubContainer,
    },
    data() {
      return {
        // Beispiel-Daten für die Untercontainer
        containers: [
          { title: "Untercontainer 1", items: [1, 2, 3,6,7,8,9] },
          { title: "Untercontainer 2", items: [4, 5, 6] },
          { title: "Untercontainer 3", items: [7, 8, 9] },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .master-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
  }
  </style>
  