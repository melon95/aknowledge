# 图片懒加载

图片懒加载是一个常用的性能优化手段。

图片懒加载的原理是没有在可视区域的图片暂时不加载图片，等进入可视区域后在加载图片，这样可以减少初始页面加载的图片数量而提升页面加载速度。 图片懒加载在提升页面加载速度的同时也会伴随用户看其他未展示的图片时会有等待时间；图片加载显示会伴有布局抖动等问题。

## 实现方式

- [HTMLImageElement.loading](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLImageElement/loading)
- [IntersectionObserver API](https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserver)
- 手动模拟
  - 在图片元素上设置 data-src 属性
  - 通过 getBoundingClientRect() 等 API 确认元素是否进入视口
  - 进入视口或快进入视口时，把图片元素的 src 属性替换为 data-src

### HTMLImageElement.loading

##### 优点

原生支持，性能好，实现简单

##### 缺点

1. 不能设置默认图片，用户体验不好

### IntersectionObserver API

##### 优点

性能好，实现简单

### 手动模拟

##### 优点

1. 每个步骤都在掌握之中

##### 缺点

1. 实现复杂，对性能不友好

1. 实现复杂

## 缺陷解决

1. 布局抖动

把 HTMLImageElement 的 withd 和 height 属性设置为图片的真实数值，可以避免浏览器重排

## 参考资料

- [懒加载-MDN](https://developer.mozilla.org/zh-CN/docs/Web/Performance/Lazy_loading)
