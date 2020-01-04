let element = document.getElementById('myunique')

element.onclick = (event) => {
    if(element.classList.contains('www')) {
        element.removeAttribute('class')
    }
} 