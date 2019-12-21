var arr = [10, 2, 3, 4, 5, 7, 8]
var newArr = new Array() 
arr.forEach(value => {
	if(value % 2 === 0) {
		newArr.push(value)
	}
})