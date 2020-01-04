var ol = document.querySelector('ol')
 
ol.onclick = (event) => {
    ol.removeChild(event.target)
}