let links = document.querySelectorAll('a')
links.forEach((link) => link.onmouseover = (event) => link.title = link.text)