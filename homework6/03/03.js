var input = document.querySelector('input')
setInterval(() => {
    if (!isNaN(input.value)) {
        input.style.color = 'green'
    } else input.style.color = 'red'
})