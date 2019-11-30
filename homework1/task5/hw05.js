function getWeekDay(date) {
    date = date || new Date();
    var days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    var day = date.getDay();

    return days[day];
}
var date = new Date();

if(getWeekDay(date) != 'Воскресенье' && 'Cуббота'){
  console.log('Иди работай');
}