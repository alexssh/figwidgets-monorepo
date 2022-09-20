const uuid = (random?: number) => {
  let s4 = (factor: number) => {
    return (new Date().getMilliseconds() * 100 * factor).toString(16)
  }

  return (
    s4(random ? 1 * random : 1) +
    '-' +
    s4(random ? 2 * random : 2) +
    '-' +
    s4(random ? 4 * random : 4) +
    '-' +
    s4(random ? 6 * random : 6)
  )
}

export default uuid
