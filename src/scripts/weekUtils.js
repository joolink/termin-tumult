import { getWeek,setDate, addDays, startOfMonth, endOfMonth, isBefore, isSameMonth, isSameWeek, startOfWeek  } from 'date-fns';

export function createWeekDict(monthData) {
  const weekDict = {};

  const weeks = getWeeksFromMonth(monthData[0].day)

  weeks.forEach((week) => {
    if (!weekDict[week.week]) {
      weekDict[week.week] = [];
    }
    const day = getFirstDayOfWeekInMonth(monthData[0].year, monthData[0].month, week.week);
    const annotations = [];
    weekDict[week.week].push({ day, annotations });
  });

  monthData.forEach(({ day, annotations }) => {
    const weekNumber = getWeek(day);
    if (!weekDict[weekNumber]) {
      weekDict[weekNumber] = [];
    }
    weekDict[weekNumber].push({ day, annotations });
  });

  return weekDict;
}

export function getWeeksFromMonth(date) {
  const startMonth = startOfMonth(date);
  const endMonth = endOfMonth(date);
  const weeks = [];
  let currentWeekStart = startOfWeek(startMonth, { weekStartsOn: 1 });

  while (isBefore(currentWeekStart, endMonth)) {
    weeks.push({
      week: getWeek(currentWeekStart),
    });
    currentWeekStart = addDays(currentWeekStart, 7);
  }

  return weeks;
}

function getFirstDayOfWeekInMonth(year, month, weekNumber) {
  // Erstelle ein Datum für den ersten Tag des Monats
  const firstDayOfMonth = new Date(year, month, 1);
  
  // Berechne den ersten Tag der Woche, auf die der 1. Tag des Monats fällt
  const firstDayOfWeek = startOfWeek(firstDayOfMonth, { weekStartsOn: 1 }); // Wochentag startet mit Montag (1)

  // Berechne das Datum des ersten Tages der angegebenen Woche
  const firstDayOfGivenWeek = setDate(firstDayOfWeek, weekNumber * 7 - 6); // Berechnet den ersten Tag der Woche

  return firstDayOfGivenWeek;
}