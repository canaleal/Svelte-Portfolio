export const formatNumber = (number: number) => {
  const suffix = number >= 1000 ? 'k' : ''
  const shortenedNumber = number >= 1000 ? number / 1000 : number
  return `${shortenedNumber}${suffix}`
}
