var imgUrl = null, deg = null
do {imgUrl = prompt('дайте ссылку на картинку')} while (!imgUrl.startsWith('http') || !imgUrl.startsWith('https'))
do {deg = prompt('на сколько градусов повернуть?')} while (isNaN(deg))

var startDeg = 0

for ( var i = 1; i <= 5; i++) {
	var img = document.createElement('img')
	img.src = imgUrl

	document.body.appendChild(img)
	startDeg += +deg 
	img.style.transform = `rotate(${startDeg}deg)`
}