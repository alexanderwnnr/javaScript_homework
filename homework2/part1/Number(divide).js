var a = prompt('enter first number'), b = prompt('enter second number')
if (isNaN(a) || isNaN(b)) {
	while (isNaN(a)) {a = prompt('enter first number again')}
 	while (isNaN(b)) {b = prompt('enter second number again')}
}
c = Math.floor(a / b)
alert( c )