(function () {
    const houseElem = document.querySelector('.house')
    const barElem = document.querySelector('.progress-bar')
    const stageElem = document.querySelector('.stage')
    let maxScrollValue
    const mousePos = { x: 0, y: 0 }

    function resizeHandler() {
        maxScrollValue = document.body.offsetHeight - window.innerHeight
    }
    window.addEventListener('resize', resizeHandler)
    window.addEventListener('scroll', function () {
        const scrollPer = pageYOffset / maxScrollValue
        const zMove = scrollPer * 980 - 490
        houseElem.style.transform = `translateZ(${zMove}vw)`
        barElem.style.width = scrollPer * 100 + "%"
    })
    resizeHandler()
    window.addEventListener('mousemove', function (e) {
        // console.log(e.clientX, e.clientY)
        mousePos.x = -1 + (e.clientX / window.innerWidth) * 2
        mousePos.y = 1 - (e.clientY / window.innerHeight) * 2
        // console.log(mousePos)
        stageElem.style.transform = `rotateX(${mousePos.y * 5}deg) rotateY(${mousePos.x * 5}deg)`
    })
})()