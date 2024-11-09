import type { Meta, StoryObj } from '@storybook/vue3';
import Week from './Week.vue';  // Importiere die Week-Komponente
import type { DayData } from './DayData'; // Importiere den DayData-Typ

// Meta-Daten für die Story
const meta: Meta<typeof Week> = {
  component: Week,  // Die zu testende Komponente
  argTypes: {
    weekNumber: { control: 'number' },  // Steuerung für die Kalenderwoche
    days: { control: 'object' },        // Steuerung für die Tage
  },
};

export default meta;

type Story = StoryObj<typeof Week>;

// Beispiel-Daten für die Tage der Woche
const sampleDays: DayData[] = [
  { dayNumber: 1, dayName: 'Mo', color: '#FFCCCC', isHighlighted: true },
  { dayNumber: 2, dayName: 'Tu', color: '#CCFFCC' },
  { dayNumber: 3, dayName: 'We', color: '#CCCCFF' },
  { dayNumber: 4, dayName: 'Thursday', color: '#FFCCFF' },
  { dayNumber: 5, dayName: 'Friday', color: '#FFFFCC' },
  { dayNumber: 6, dayName: 'Saturday', color: '#CCE5FF', isHighlighted: true },
  { dayNumber: 7, dayName: 'Sunday', color: '#FFE5CC' },
];

// Die Haupt-Story für die Week-Komponente
export const Primary: Story = {
  render: (args) => ({
    components: { Week },
    setup() {
      return { args };
    },
    template: '<Week v-bind="args" />',  // Binde die args an die Week-Komponente
  }),
  args: {
    weekNumber: 1,   // Setze die Standard-Kalenderwoche
    days: sampleDays  // Setze die Beispiel-Tage
  },
};
