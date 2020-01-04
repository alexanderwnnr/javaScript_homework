let element = document.querySelector('ol')
let button = document.querySelector('button')

button.onclick = (event) => {
    element.removeChild(element.lastElementChild)
}