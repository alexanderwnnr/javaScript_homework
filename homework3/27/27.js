function string (str) {
    return str.replace(/(_|\s)\S/g, function(a) {return a.toUpperCase()}).replace(/_/g, "")   
}
alert(string('var_test_text'))