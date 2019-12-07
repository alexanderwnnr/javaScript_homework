var str = 'Как однажды Жак звонарь сломал фонарь городской'.split(' ')
str[6] = str.splice(4, 1, str[6])[0]
str[6] = str.splice(5, 1, str[6])[0]
alert(str.join(' '))