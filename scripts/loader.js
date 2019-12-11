/*
cursor doesn't work properly unless loaded into the document itself
*/

var script = ["ad.js", "background.js", "seeker.js", "spinner.js"];
var sName = {};

for(i = 0; i < script.length; i++){
	sName[script[i]] = document.createElement("script");
	sName[script[i]].src = "scripts/" + script[i];
	document.head.appendChild(sName[script[i]]);
};
