var temp = prompt('Enter temperature. Example 10C or 10F')
if (temp.includes('C') || temp.includes('c')) {
	temp = (parseInt(temp) * 1.8) +32
	alert(temp + ' F')
}
if (temp.includes('F') || temp.includes('f')) {
	temp = (parseInt(temp) - 32) * 0.555
	alert(temp + ' C')
}
