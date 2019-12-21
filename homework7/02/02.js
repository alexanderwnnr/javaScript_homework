var xNumber = 123151294

function test() {
    xNumber = xNumber.toString().split('').reduce((prev, curr) => +prev + +curr)
    if (xNumber < 9) {
        return console.log(xNumber)
    }
    test()
} 