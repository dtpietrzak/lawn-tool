export const formatDate = (dateIsoString: string | null) => {
  if (!dateIsoString) return
  const date = new Date(dateIsoString)
  if (!date) return
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  return `${month}-${day}-${year}`
}

export const wipeTimezone = (dateInitializer: number | string) => {
  return new Date(dateInitializer).toUTCString().slice(0, -4)
}