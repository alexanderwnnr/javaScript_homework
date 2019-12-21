var arr = [1, 4, 5, [8, 0, 10, 3], 6, 64, 64, 54, {key: 'name', age: 18}]
arr.forEach(function elementSearch(value) {
    if (typeof(value) === 'object'){
        Object.values(value).forEach((value) => elementSearch(value))
    } else console.log(value)
})