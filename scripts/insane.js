// Runs script every min or so
const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}


var script = ["monkeyshine.js"];

for(i = 0; i < script.length; i++){
	var sName = document.createElement("script");
	sName.src = "scripts/" + script[i];
	document.head.appendChild(sName);
};



sleep(50000).then(() => {
var script = ["monkeyshine.js"];

for(i = 0; i < script.length; i++){
	var sName = document.createElement("script");
	sName.src = "scripts/" + script[i];
	document.head.appendChild(sName);
};
    
})
