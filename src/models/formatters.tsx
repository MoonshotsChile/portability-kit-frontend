export const formatTranferDateTime = (date: string) => {
  const year = date.substr(0,4)
  const month = date.substr(4,2)
  const day = date.substr(6,2)
  const time = date.substring(9)
  return `${year}/${month}/${day} ${time}`
}
