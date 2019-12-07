var obj = {
    'green':'зеленый',
    'red':'красный',
    'blue':'синий'
}
for (var key in obj){
    console.log(key, ":", obj[key])
}