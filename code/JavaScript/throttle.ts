function throttle(fn, delay: number) {
  let timeId
  return () => {
    if (!timeId) {
      timeId = setTimeout((...args) => {
        timeId = null
        fn.apply(null, args)
      }, delay)
    }
  }
}
