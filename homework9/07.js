let button = document.createElement('button')
button.textContent = 'Button'
document.body.appendChild(button)

button.onclick = (event) => {
    button.textContent = 'Цеглина'
}