var n = prompt('Введите количество часов')
while (isNaN(n)) { 
n = prompt('Введите числовое значение!')
}
x = n * 3600 
alert('В '+(n)+' часах - '+(x)+' секунд')