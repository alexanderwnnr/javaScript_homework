var arr = [1, 2, 3, 'a', 'b', 'c', '4', '5', '6'];
var result = 0;
for ( var elem of arr ) {
    if ( !isNaN (parseInt(elem))) {
        result += parseInt(elem)
    }
}
alert('result = ' + result)