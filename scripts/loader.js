/*
cursor doesn't work properly unless loaded into the document itself
*/

var script = ["ad.js", "background.js", "seeker.js", "spinner.js"];

for(i = 0; i < script.length; i++){
	var sName = document.createElement("script");
	sName.src = "scripts/" + script[i];
	document.head.appendChild(sName);
};
