var numb = prompt('Enter number')
if (isNaN(numb)) {
	alert('Incorrect number')
}
else { if (numb %2 === 0) {
		alert((numb) + ' is even number')
	}
	else {
		alert((numb) + ' is odd number')
	}
}