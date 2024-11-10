import type { Meta, StoryObj } from '@storybook/vue3';

import Month from './Month.vue';
import {addDays, getDate} from 'date-fns';

import { generateRandomDataArray } from '../scripts/exampleData.js';


const meta: Meta<typeof Month> = {
  component: Month,
};

//👇 This default export determines where your story goes in the story list
export default meta;
type Story = StoryObj<typeof Month>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (args) => ({
    components: { Month },
    setup() {
      return { args };
    },
    template: '<Month v-bind="args" />',
  }),
  args: {
    monthData: generateRandomDataArray(10,new Date(2024, 2, 1),new Date(2024, 2, 31))
  }
};