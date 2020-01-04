let link = document.querySelectorAll('a')
link.forEach((element) => element.onclick = (event) => element.innerText += `(${element.href})`)