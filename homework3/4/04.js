var obj = {
    'Минск':'Беларусь',
    'Москва':'Россия',
    'Киев':'Украина'
}
for (var keys in obj){
    console.log(keys, " - это ", obj[keys])
}