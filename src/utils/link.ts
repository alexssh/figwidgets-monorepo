const link = (src: string) => {
  return /^(ftp|http|https):\/\/[^ "]+$/.test(src)
}

export default link
