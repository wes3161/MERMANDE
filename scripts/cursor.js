/*
Submitted by Marcin Wojtowicz [one_spook@hotmail.com] 
Featured on JavaScript Kit (http://javascriptkit.com)
Modified by JK to be IE7+/ Firefox compatible
For this and over 400+ free scripts, visit http://javascriptkit.com
*/

var trailLength = 8 // The length of trail (8 by default; put more for longer "tail")
var path = "photos/site/cursor.png" // URL of your image

var standardbody=(document.compatMode=="CSS1Compat")? document.documentElement : document.body //create reference to common "body" across doctypes
var i,d = 0

function initTrail() { // prepares the script
	images = new Array() // prepare the image array
	for (i = 0; i < parseInt(trailLength); i++) {
		images[i] = new Image()
		images[i].src = path
	}
	storage = new Array() // prepare the storage for the coordinates
	for (i = 0; i < images.length*3; i++) {
		storage[i] = 0
	}
	for (i = 0; i < images.length; i++) { // make divs for IE and layers for Navigator
		document.write('<div id="obj' + i + '" style="position: absolute; z-Index: 100; height: 0; width: 0"><img src="' + images[i].src + '"></div>')
	}
	trail()
}
function trail() { // trailing function
	for (i = 0; i < images.length; i++) { // for every div/layer
		document.getElementById("obj" + i).style.top = storage[d]+'px' // the Y-coordinate
		document.getElementById("obj" + i).style.left = + storage[d+1]+'px' // the X-coordinate
		d = d+2
	}
	for (i = storage.length; i >= 2; i--) { // save the coordinate for the div/layer that's behind
		storage[i] = storage[i-2]
	}
	d = 0 // reset for future use
	var timer = setTimeout("trail()",10) // call recursively 
}
function processEvent(e) { // catches and processes the mousemove event 
	if (window.event) { // for IE
		storage[0] = window.event.y+standardbody.scrollTop+10
		storage[1] = window.event.x+standardbody.scrollLeft+10
	} else {
		storage[0] = e.pageY+12
		storage[1] = e.pageX+12
	}
}

	initTrail() 
	document.onmousemove = processEvent // start capturing
