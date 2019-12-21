var arr = [1, 2, 3, -1, -2, -3];
var newArr = new Array
arr.forEach((value) => {
    if(value > 0){
        newArr.push(value)
    }
})
console.log(newArr)