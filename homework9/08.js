let input = document.createElement('input')
document.body.appendChild(input)

input.oninput = (event) => {
    if (!isNaN(input.value)) {
        return input.style.color = "green"
    }
    input.style.color = "red"
}