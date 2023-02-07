const intersectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((item) => {
    // 如果 intersectionRatio 为 0，则目标在视野外，
    // 我们不需要做任何事情。
    if (item.intersectionRatio <= 0) return
    if (item.isIntersecting) {
      item.target.src = item.target.dataset.src
      intersectionObserver.unobserve(item)
    }
  })
})
// 开始监听
const imageList = document.querySelectorAll('.image')
imageList.forEach((image) => intersectionObserver.observe(image))
