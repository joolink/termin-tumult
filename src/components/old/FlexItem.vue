<template>
    <li class="flex-item">
      {{ label }}
    </li>
  </template>
  
  <script>
  export default {
    props: {
      label: {
        type: [String, Number],
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .flex-item {
    background-color: #3498db;
    color: white;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    flex: 1 1 calc(33.333% - 10px); /* Drei Spalten Layout */
    box-sizing: border-box;
  }
  </style>
  