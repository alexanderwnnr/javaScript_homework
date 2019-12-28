function $(selector) {
	if (selector.startsWith('#')) {
		var anyId = selector.slice(1, selector.length)
		if (document.getElementById(anyId)) {
			console.log(document.getElementById(anyId))
		}
	}
	if (selector.startsWith('.')) {
		var anyClass = selector.slice(1,selector.length)
		if (document.getElementsByClassName(anyClass)) {
			if (document.getElementsByClassName(anyClass).length > 1) {
				console.log(document.getElementsByClassName(anyClass))
			} else console.log(document.querySelector(selector))
        	
		}
	} else {
		if (document.getElementsByTagName(selector)) {
			console.log(document.getElementsByTagName(selector))
		} 
    }
}
   