<template>
    <div class="sortable-list">
      <div
        v-for="(item, index) in items"
        :key="item.id"
        class="sortable-item"
        draggable="true"
        @dragstart="startDrag(index)"
        @dragover.prevent="onDragOver(index)"
        @drop="onDrop(index)"
        @dragend="endDrag"
      >
        {{ item.name }}
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    name: 'SortableList',
    
    setup() {
      // Beispiel-Daten für die sortierbare Liste
      const items = ref([
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' }
      ]);
  
      // Indizes speichern, um das aktuelle und das Ziel-Element zu verfolgen
      const dragIndex = ref<number | null>(null);
  
      // Start Dragging: Setze den Index des Elements, das gezogen wird
      const startDrag = (index: number) => {
        dragIndex.value = index;
        console.log(`Dragging item at index: ${index}`);
      };
  
      // Drag Over: Wird aufgerufen, wenn ein anderes Element "überfahren" wird
      const onDragOver = (index: number) => {
        // Elemente tauschen, wenn das Zielindex unterschiedlich ist
        if (dragIndex.value !== null && dragIndex.value !== index) {
          // Tauschen der Elemente
          const draggedItem = items.value[dragIndex.value];
          items.value.splice(dragIndex.value, 1); // Entferne das gezogene Element
          items.value.splice(index, 0, draggedItem); // Füge es an die neue Stelle ein
          dragIndex.value = index; // Aktualisiere den Drag-Index
        }
      };
  
      // Drop: Beende den Drag-and-Drop-Vorgang
      const onDrop = (index: number) => {
        console.log(`Dropped item at index: ${index}`);
        dragIndex.value = null;
      };
  
      // Drag End: Cleanup
      const endDrag = () => {
        dragIndex.value = null;
      };
  
      return {
        items,
        startDrag,
        onDragOver,
        onDrop,
        endDrag
      };
    },
  });
  </script>
  
  <style scoped>
  .sortable-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
    background-color: aqua;
  }
  
  .sortable-item {
    padding: 12px;
    background-color: #e0e0e0;
    border: 1px solid #ccc;
    cursor: move;
    transition: background-color 0.3s;
  }
  
  .sortable-item:active {
    background-color: #c0c0c0;
  }
  </style>
  