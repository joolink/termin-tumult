<template>
    <div class="layer" @click="toggle">
      <p>Schicht {{ level }}</p>
      <transition name="fade">
        <LayerContainer v-if="isOpen" :level="level + 1" />
      </transition>
    </div>
  </template>
  
  <script>
  export default {
    name: "LayerContainer",
    components: {
      LayerContainer: () => import('./LayerContainer.vue') // Rekursive Komponente
    },
    props: {
      level: {
        type: Number,
        default: 1 // Startlevel für die erste Schicht
      }
    },
    data() {
      return {
        isOpen: false // Zustand, ob die nächste Schicht geöffnet ist
      };
    },
    methods: {
      toggle() {
        this.isOpen = !this.isOpen; // Öffnen und Schließen der nächsten Schicht
      }
    }
  };
  </script>
  
  <style scoped>
  .layer {
    margin-left: 20px;
    padding: 10px;
    background-color: #e1e4e8;
    border-radius: 5px;
    border: 1px solid #ccc;
    cursor: pointer;
  }
  
  .layer p {
    margin: 0;
    font-weight: bold;
  }
  
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }
  
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }
  </style>
  