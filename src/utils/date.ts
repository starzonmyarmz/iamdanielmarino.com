const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

export function formatDate(value: Date | string): string {
  const date = new Date(value)
  return `${MONTHS[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
}
