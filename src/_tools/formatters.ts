export const formatDate = (dateIsoString: string | null) => {
  if (!dateIsoString) return
  const date = new Date(dateIsoString)
  if (!date) return
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  return `${month}-${day}-${year}`
}