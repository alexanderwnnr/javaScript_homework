let element = document.getElementById('myunique')
element.style.cssText = `
    width: 50px;
    height: 50px;
    background: yellow;
    font-size: 15px
`

element.onclick = (event) => {
    element.style.cssText = `
        width: ${50 * 2}px;
        height: ${50 * 2}px;
        font-size: ${15 * 2}px;
        background: yellow;
        transition: all 0.5s
    `
}