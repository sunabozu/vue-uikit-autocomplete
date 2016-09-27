export default {
  componentUpdated(el) {
    let height = window.innerHeight - el.getBoundingClientRect().top
    height = height - 15 > 0 ? height - 15 : height
    el.style.maxHeight = height + 'px'
  }
}