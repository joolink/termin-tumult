import { createWeekDict, getWeeksFromMonth } from './weekUtils.js';

const monthData = [
  {
    "id": "ID-60hl2lfv73s",
    "day": "2024-02-04T23:00:00.000Z",
    "week": 6,
    "month": 2,
    "quarter": 1,
    "year": 2024,
    "annotations": []
  },
  {
    "id": "ID-brdtmx31qb",
    "day": "2024-02-13T23:00:00.000Z",
    "week": 7,
    "month": 2,
    "quarter": 1,
    "year": 2024,
    "annotations": [
      {
        "name": "Type-hfa9hve7qd",
        "color": "hsl(220deg, 100%, 90%)"
      },
      {
        "name": "Type-rjqylza1kpn",
        "color": "hsl(215deg, 100%, 90%)"
      }
    ]
  }
];


describe('weekUtils functions', () => {
  it('should create a weekDict based on monthData', () => {
    const result = createWeekDict(monthData);
    console.log(result)
    expect(result);
  });
});

describe('weekUtils functions', () => {
  it('should give all weeks from month', () => {
    const result = getWeeksFromMonth(monthData[0]?.day);
    console.log(result)
    expect(result.length).toBe(5);
  });
});
