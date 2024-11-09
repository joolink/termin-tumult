import type { Meta, StoryObj } from '@storybook/vue3';

import Month from './Month.vue';
import {addDays, getDate} from 'date-fns';


const getRandomNumber = (limit) => {
  return Math.floor(Math.random() * limit);
};

const getRandomColor = () => {
  const h = getRandomNumber(360);

  return `hsl(${h}deg, 100%, 90%)`;
};

const exampleDay = new Date(2024, 5, 1);

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
    monthData:[
    {
        day: exampleDay,
        annotations:[
            {
            name: "feiertag",
            color: getRandomColor()
            }
        ]
    },
    {
        day: addDays(exampleDay,1),
        annotations:[
            {
            name: "feiertag",
            color: getRandomColor()
            },
            {
            name: "urlaub",
            color: getRandomColor()
            },
            {
            name: "seminar",
            color: getRandomColor()
            }
        ]
    }
    ]
  },
};