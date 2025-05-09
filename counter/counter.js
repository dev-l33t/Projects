function increament() {
	var number= Number(document.getElementById('number').innerHTML)
	document.getElementById('number').innerHTML = number+1
}

function decreament() {
	var number= Number(document.getElementById('number').innerHTML)
	document.getElementById('number').innerHTML = number-1
}

function neutral() {
	document.getElementById('number').innerHTML = 0
}
