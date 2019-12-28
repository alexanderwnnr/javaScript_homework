function deleteById (id) {
	var element = document.getElementById(id)
	if (!elelment) {
		return console.log( "Этот тег нельзя удалить" )
	} else {
		element.parentNode.removeChild(element)
		}
	}