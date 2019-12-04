var age = prompt('how old are you?'), year
while (isNaN(age)) {
	age = prompt('how old are you?')
}
year = 2019 - age
alert('you born in '+ (year))