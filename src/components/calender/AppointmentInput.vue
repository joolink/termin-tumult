<template>
    <div class="appointment-input">
      <h3>Markiere Tage</h3>
      <textarea v-model="input" placeholder="Format: YYYY-MM-DD, Farbe (z.B., #ff0000)"></textarea>
      <button @click="submitHighlights">Highlight Tage</button>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref, defineEmits } from 'vue';
  
  const emits = defineEmits<{
    (e: 'highlight-days', payload: { date: string, color: string }[]): void;
  }>();
  
  const input = ref<string>("");
  
  function submitHighlights() {
    const highlights = input.value.split('\n').map(line => {
      const [date, color] = line.split(',').map(part => part.trim());
      return { date, color };
    });
    emits('highlight-days', highlights);
  }
  </script>
  
  <style scoped>
  .appointment-input {
    margin-top: 20px;
  }
  textarea {
    width: 100%;
    height: 80px;
  }
  </style>
  