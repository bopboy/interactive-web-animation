(function () {
    const houseElem = document.querySelector('.house')
    let maxScrollValue
    function resizeHandler() {
        maxScrollValue = document.body.offsetHeight - window.innerHeight
    }
    window.addEventListener('resize', resizeHandler)
    window.addEventListener('scroll', function () {
        const zMove = pageYOffset / maxScrollValue * 980 - 490
        houseElem.style.transform = `translateZ(${zMove}vw)`
    })
    resizeHandler()
})()