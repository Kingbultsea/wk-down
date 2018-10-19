function setSizeRem(){
    const width = document.documentElement.clientWidth
    let html = document.querySelector('html')
    html.style.fontSize = width / 10 + 'px'
}
setSizeRem()
window.addEventListener('resize', setSizeRem)
