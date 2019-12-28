function getEl (selector) {
    if (selector.startsWith('#')) {
        var anyId = selector.slice(1, selector.length)
            if (document.getElementById(anyId)) {
                var nId = document.getElementById(anyId)
                console.log(nId.innerText)
            }
    } 
    if (selector.startsWith('.')) {
        var anyClass = selector.slice(1, selector.length)
            if (document.getElementsByClassName(anyClass)) {
                var nClass = document.getElementsByClassName(nClass)
                console.log(nClass.innerText)
            } 
    }
}