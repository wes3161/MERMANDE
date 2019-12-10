/*
shamelessly ripped from w3schools and modified
https://www.w3schools.com/css/css3_3dtransforms.asp
*/

var y,ny=0,rotINT,rotYINT

setInterval(rotateYDIV, 1000);

function rotateYDIV(){
	y = document.getElementById("headerImage")
	clearInterval(rotYINT)
	rotYINT=setInterval("startYRotate()",10)
}

function startYRotate(){
	ny++
	y.style.transform="rotateY(" + ny + "deg)"
	if (ny==180 || ny>=360){
		clearInterval(rotYINT)
		if (ny>=360){
			ny=0
		}
	}
}

