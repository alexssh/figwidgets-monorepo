const uuid = () => {
  let s4 = (factor: number) => {
    return (new Date().getMilliseconds() * 100 * factor).toString(16)
  }

  return s4(1) + '-' + s4(2) + '-' + s4(4) + '-' + s4(6)
}

export default uuid
