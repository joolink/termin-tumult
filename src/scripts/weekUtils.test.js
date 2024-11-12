import { createWeekDict, getWeeksFromMonth, getFirstDayOfWeekInMonth } from './weekUtils'

const monthData = [
  {
    id: 'ID-60hl2lfv73s',
    day: '2024-02-04T00:00:00.000Z',
    week: 6,
    month: 2,
    quarter: 1,
    year: 2024,
    annotations: [],
  },
  {
    id: 'ID-brdtmx31qb',
    day: '2024-02-13T00:00:00.000Z',
    week: 7,
    month: 2,
    quarter: 1,
    year: 2024,
    annotations: [
      {
        name: 'Type-hfa9hve7qd',
        color: 'hsl(220deg, 100%, 90%)',
      },
      {
        name: 'Type-rjqylza1kpn',
        color: 'hsl(215deg, 100%, 90%)',
      },
    ],
  },
]

describe('weekUtils: ', () => {
  it('getFirstDayOfWeekInMonth', () => {
    expect(getFirstDayOfWeekInMonth(2024, 2, 5)).toEqual(new Date('2024-02-01T00:00:00.000Z'))
  })
  it('getFirstDayOfWeekInMonth', () => {
    expect(getFirstDayOfWeekInMonth('2024', '2', '6')).toEqual(new Date('2024-02-05T00:00:00.000Z'))
  })
  it('getFirstDayOfWeekInMonth', () => {
    expect(getFirstDayOfWeekInMonth('2024', '12', '1')).toEqual(
      new Date('2024-12-30T00:00:00.000Z'),
    )
  })
  it('getFirstDayOfWeekInMonth', () => {
    expect(getFirstDayOfWeekInMonth('2024', '2', '8')).toEqual(new Date('2024-02-19T00:00:00.000Z'))
  })
  it('getWeeksFromMonth: should give all weeks from month', () => {
    const result = getWeeksFromMonth(new Date('2024-12-30'))
    expect(result).toEqual([
      { week: 48 },
      { week: 49 },
      { week: 50 },
      { week: 51 },
      { week: 52 },
      { week: 1 },
    ])
  })
  it('getWeeksFromMonth: should give all weeks from month', () => {
    const result = getWeeksFromMonth(new Date('2024-02-04'))
    expect(result).toEqual([{ week: 5 }, { week: 6 }, { week: 7 }, { week: 8 }, { week: 9 }])
  })
  // it('createWeekDict: should create a weekDict based on monthData', () => {
  //   const result = createWeekDict(monthData)
  //   expect(result).toBe({
  //     5: [
  //       { day: '2024-02-01T00:00:00.000Z', annotations: [] },
  //       { day: '2024-02-04T00:00:00.000Z', annotations: [] },
  //     ],
  //     6: [{ day: '2024-02-05T00:00:00.000Z', annotations: [] }, ,],
  //     7: [
  //       { day: '2024-02-12T00:00:00.000Z', annotations: [] },
  //       { day: '2024-02-13T00:00:00.000Z', annotations: expect.any(Array) },
  //     ],
  //     8: [{ day: '2024-02-19T00:00:00.000Z', annotations: [] }],
  //     9: [{ day: '2024-02-26T00:00:00.000Z', annotations: [] }],
  //   })
  // })
})
