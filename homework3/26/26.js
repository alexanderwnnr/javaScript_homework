function upperCase (str) {
    if (!str) return str;
    return str.slice( 0, str.length - 1 ) + str.charAt( str.length - 1 ).toUpperCase ()
}
alert(upperCase("вася"))