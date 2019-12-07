for (var a = 1; a <= 9; a++){
    for (var b = 1; b <= 9; b++){
        x = a * b;
        console.log((a) + "*" + (b) + " = " + (x))
        if (b === 6){
            break
        }
    } 
    if(a === 6){
        break
    }
}