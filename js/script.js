var elForm = document.querySelector('.site__form')
var elInput = document.querySelector('.site__input') 
var elDesc = document.querySelector('.site__desc')
var elResult1 = document.querySelector('.site__result1')
var elMin = document.querySelector('.site__min')
var elResult2 = document.querySelector('.site__result2')
var elResult3 = document.querySelector('.site__result3')
var elResult4 = document.querySelector('.site__result4')


elForm.addEventListener('submit', function (e){
	e.preventDefault()
	inpVal = Number(elInput.value)

	if (inpVal <= 0 || isNaN(inpVal)){
		elDesc.classList.add('desc')
		return;
	} else{
		elDesc.classList.remove('desc')
	}

	elResult1.textContent = pishkom()
	elResult2.textContent = velosipetda()
	elResult3.textContent = mashinada()
	elResult4.textContent = samaliotda()	
})

function pishkom(){
	var odam = Math.floor(inpVal / 3.6)
	var sekund = Math.floor((inpVal / 3.6 - odam)*60)
	return `${odam} soat ${sekund} minut`
}	
function velosipetda(){
	var velo = Math.floor(inpVal / 20.1)
	var velosekund = Math.floor((inpVal / 20.1 - velo)*60)
	return `${velo} soat ${velosekund} minut`
}
function mashinada(){
	var car = Math.floor(inpVal / 70)
	var carsekund = Math.floor((inpVal / 70 - car)*60)
	return `${car} soat ${carsekund} minut`
}
function samaliotda(){
	var samo = Math.floor(inpVal / 800)
	var samosekund = Math.floor((inpVal / 800 - samo)*60)
	return `${samo} soat ${samosekund} minut`
}