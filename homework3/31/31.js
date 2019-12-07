var arr = [], n = prompt('Specify the number of array elements'), sum = 0
for ( var i = 0; i <= n - 1; i++ ) {
    arr[i] = prompt('enter array element')
    console.log(arr[i])
}
for ( i of arr ) {
    sum += (+(i.replace(/\D+/g,"")))
}
alert('sum = ' + sum)