const datetime = (date?: Date) => {
  const array = String(new Date().toUTCString()).split(',')[1].trim().split(' ')
  const time = array[3].split(':')

  return {
    full: `${array[0]} ${array[1]} ${array[2]}, ${time[0]}:${time[0]} ${array[4]}`,
    date: `${array[0]} ${array[1]} ${array[2]}`,
    time: `${time[0]}:${time[0]} ${array[4]}`
  }
}

export default datetime
