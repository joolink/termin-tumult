<template>
    <div class="container">
      <!-- Box, die das Öffnen auslöst -->
      <div class="trigger-box" @click="isBoxVisible = !isBoxVisible">
        Klicke mich
      </div>
      
      <!-- Zoom Box mit Transition -->
      <transition name="zoom">
        <div v-if="isBoxVisible" class="zoom-box">
          <p>Hereinzoomen!</p>
          <button @click="isBoxVisible = false">Schließen</button>
        </div>
      </transition>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ZoomBox',
    data() {
      return {
        isBoxVisible: false, // Zustand für Sichtbarkeit der Box
      };
    },
  };
  </script>
  
  <style scoped>
  /* Styling für die Container und Trigger-Box */
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .trigger-box {
    padding: 10px 20px;
    background-color: #3498db;
    color: white;
    cursor: pointer;
    border-radius: 5px;
    text-align: center;
  }
  
  /* Styling für die Zoom-Box */
  .zoom-box {
    margin-top: 20px;
    padding: 20px;
    background-color: #f1c40f;
    color: black;
    border-radius: 8px;
    text-align: center;
  }
  
  /* Transition für den Zoom-Effekt */
  .zoom-enter-active, .zoom-leave-active {
    transition: transform 0.3s ease;
  }
  
  .zoom-enter-from, .zoom-leave-to {
    transform: scale(0.1); /* Startgröße für den Zoom */
  }
  
  .zoom-enter-to, .zoom-leave-from {
    transform: scale(1); /* Endgröße für den Zoom */
  }
  </style>
  