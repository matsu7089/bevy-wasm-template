window.addEventListener('load', () => {
  let c, cw, ch, cr, cs

  const resize = () => {
    const { innerWidth: iw, innerHeight: ih } = window

    if (cw / iw > ch / ih) {
      cs.width = Math.floor(iw) + 'px'
      cs.height = Math.floor(iw * cr) + 'px'
    } else {
      cs.width = Math.floor(ih / cr) + 'px'
      cs.height = Math.floor(ih) + 'px'
    }
  }

  const observer = new MutationObserver(() => {
    c = document.querySelector('canvas')
    if (!c) return
    cw = c.width
    ch = c.height
    cs = c.style
    cr = ch / cw

    resize()
    window.addEventListener('resize', resize, false)
    observer.disconnect()
  })

  observer.observe(document.body, { childList: true })
})
