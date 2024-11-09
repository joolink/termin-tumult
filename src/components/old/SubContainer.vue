<template>
    <div class="sub-container">
      <h2>{{ title }}</h2>
      <ul class="flex-container">
        <FlexItem v-for="(item, index) in items" :key="index" :label="item" />
      </ul>
    </div>
  </template>
  
  <script>
  import FlexItem from './FlexItem.vue';
  
  export default {
    components: {
      FlexItem,
    },
    props: {
      title: {
        type: String,
        required: true,
      },
      items: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .sub-container {
    background-color: #f0f0f0;
    padding: 20px;
    border-radius: 10px;
  }
  
  .flex-container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 10px;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  </style>
  