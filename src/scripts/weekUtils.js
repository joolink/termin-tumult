import {
  getWeek,
  setDate,
  getDay,
  addDays,
  startOfMonth,
  endOfMonth,
  isBefore,
  startOfWeek,
  getISOWeek,
} from 'date-fns'

/**
 * Erzeugt ein Dictionary, das jede Woche des Monats mit den zugehörigen Tagen und Anmerkungen enthält.
 *
 * @param {Array} monthData - Array von Objekten, die Informationen über Tage und Anmerkungen enthalten.
 * @returns {Object} weekDict - Ein Dictionary, das Wochen mit den entsprechenden Tagen und Anmerkungen zuordnet.
 */
export function createWeekDict(monthData) {
  const weekDict = {}
  const weeks = getWeeksFromMonth(monthData[0].day)

  // Füge für jede Woche das erste Tagesdatum hinzu
  weeks.forEach((week) => {
    const weekNumber = week.week
    if (!weekDict[weekNumber]) {
      weekDict[weekNumber] = []
    }
    const firstDayOfWeekInMonth = getFirstDayOfWeekInMonth(
      monthData[0].year,
      monthData[0].month,
      weekNumber,
    )
    weekDict[weekNumber].push({ day: firstDayOfWeekInMonth, annotations: [] })
  })

  // Füge alle Tage aus den Monat-Daten den entsprechenden Wochen zu
  monthData.forEach(({ day, annotations }) => {
    const weekNumber = getWeek(day)
    if (!weekDict[weekNumber]) {
      weekDict[weekNumber] = []
    }
    weekDict[weekNumber].push({ day, annotations })
  })

  return weekDict
}

/**
 * Berechnet alle Wochen eines Monats.
 *
 * @param {Date} date - Ein Datum innerhalb des Monats, um die Wochen zu bestimmen.
 * @returns {Array} weeks - Eine Liste von Wochennummern innerhalb des Monats.
 */
export function getWeeksFromMonth(date) {
  const startMonth = startOfMonth(date)
  const endMonth = endOfMonth(date)
  const weeks = []
  let currentWeekStart = startOfWeek(startMonth, { weekStartsOn: 1 })

  while (isBefore(currentWeekStart, endMonth)) {
    weeks.push({
      week: getWeek(currentWeekStart),
    })
    currentWeekStart = addDays(currentWeekStart, 7)
  }

  return weeks
}

/**
 * Berechnet den ersten Tag einer bestimmten Woche innerhalb eines Monats.
 *
 * @param {number} year - Jahr des Monats.
 * @param {number} month - Monat (0-basiert).
 * @param {number} weekNumber - Die Nummer der Woche, für die das erste Tagesdatum berechnet werden soll.
 * @returns {Date} - Das Datum des ersten Tages der angegebenen Woche im Monat.
 */
export function getFirstDayOfWeekInMonth(year, month, weekNumber) {
  const firstDayOfMonth = new Date(Date.UTC(year, month - 1, 1))

  if (getISOWeek(firstDayOfMonth) == weekNumber) {
    return firstDayOfMonth
  }

  const firstDayWeekday = firstDayOfMonth.getDay()
  const daysToFirstMonday = firstDayWeekday === 0 ? 1 : 8 - firstDayWeekday

  const firstMondayOfMonth = new Date(firstDayOfMonth)
  firstMondayOfMonth.setDate(firstDayOfMonth.getDate() + daysToFirstMonday)

  console.log(firstDayOfMonth.getDate() + 6)

  if (getISOWeek(firstMondayOfMonth) == weekNumber) {
    return firstMondayOfMonth
  }

  let n = 0
  while (getISOWeek(firstMondayOfMonth) != weekNumber || n == 4) {
    console.log(firstMondayOfMonth)
    console.log(getISOWeek(firstMondayOfMonth))
    if (getISOWeek(firstMondayOfMonth) == weekNumber) {
      return firstMondayOfMonth
    } else {
      firstMondayOfMonth.setDate(firstMondayOfMonth.getDate() + 7)
      n++
    }
  }
  return 'stop'
}
