import type { Meta, StoryObj } from '@storybook/vue3';
 
import Day from './Day.vue';
 
const meta: Meta<typeof Day> = {
  component: Day,
};
 
//👇 This default export determines where your story goes in the story list
export default meta;
type Story = StoryObj<typeof Day>;
 
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (args) => ({
    components: { Day },
    setup() {
      return { args };
    },
    template: '<Day v-bind="args" />',
  }),
  args: {
    dayNumber: 14,
    dayName: "Mo",
    isHighlighted: true
  },
};