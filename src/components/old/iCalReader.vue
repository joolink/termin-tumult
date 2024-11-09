<template>
    <div>
      <h1>iCal-Datei einlesen</h1>
      <input type="file" @change="onFileChange" accept=".ics" />
      <div v-if="events.length">
        <h2>Veranstaltungen</h2>
        <ul>
          <li v-for="(event, index) in events" :key="index">
            <strong>{{ event.summary }}</strong> am {{ event.start }} bis {{ event.end }}
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import ICAL from "ical.js";
  
  export default defineComponent({
    data() {
      return {
        events: [] as Array<{ summary: string; start: string; end: string }>
      };
    },
    methods: {
      onFileChange(event: Event) {
        const target = event.target as HTMLInputElement;
        if (target.files && target.files.length > 0) {
          const file = target.files[0];
          const reader = new FileReader();
          reader.onload = (e) => {
            const contents = e.target?.result as string;
            this.parseIcal(contents);
          };
          reader.readAsText(file);
          
        }
      },
      parseIcal(data: string) {
        const jcalData = ICAL.parse(data);
        const comp = new ICAL.Component(jcalData);
        const events = comp.getAllSubcomponents('vevent');
        this.events = events.map((event: any) => {
          return {
            summary: event.getFirstPropertyValue('summary'),
            start: event.getFirstPropertyValue('dtstart').toString(),
            end: event.getFirstPropertyValue('dtend').toString()
          };
        });
      }
    }
  });
  </script>
  
  <style scoped>
  input {
    margin: 20px 0;
  }
  </style>
  