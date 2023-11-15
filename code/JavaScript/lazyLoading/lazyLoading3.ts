const imgLazyLoad = function () {
  const imgList = document.querySelectorAll('img[data-src]')
  imgList.forEach((img: HTMLImageElement) => {
    let rect = img.getBoundingClientRect()
    if (rect.top < window.innerHeight) {
      img.src = img.dataset.src
      img.removeAttribute('data-src')
    }
  })
}

// 这里最好加上防抖处理
document.addEventListener('scroll', imgLazyLoad)
