var arr = [2, -3, 7, -6, 3, 5, -11, 10]
var result = 0
for (var elem of arr){
    if (elem > 0){
        result += elem
    }
}
console.log(result)