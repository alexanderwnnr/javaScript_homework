let button = document.createElement('input')
button.type = 'button'
button.value = 'clone input'
document.body.appendChild(button)

let input = document.createElement('input')
document.body.appendChild(input)

button.onclick = (event) => {
    let newInput = input.cloneNode()
    document.body.appendChild(newInput)
}