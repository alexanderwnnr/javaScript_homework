var arr = [], n = prompt('Specify the number of array elements')
for ( var i = 1; i <= n; i++ ) {
    arr[i] = (+(Math.random() * 100).toFixed(2)) 
    console.log('array element = ', arr[i], 'array element ^ 5 = ',(arr[i] ** 5))
}