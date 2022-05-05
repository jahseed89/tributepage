const clock = document.getElementById('empty')

const tick = () => {
    const now = new Date()
    const hours = now.getHours()
    const minute = now.getMinutes()
    const seconds = now.getSeconds()

    const html = `
        <span>${hours}</span>:
        <span>${minute}</span>:
        <span>${seconds}</span>
    `
    clock.innerHTML = html
}

setInterval(tick, 1000)
