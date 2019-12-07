var bgChance = Math.floor((Math.random() * 4) + 1);

if (bgChance <= 1) {
	document.body.style.backgroundImage = "url('photos/site/purp.gif')";
} else if(bgChance <= 2){
	document.body.style.backgroundImage = "url('photos/site/gold.gif')";
} else if(bgChance <= 3){
	document.body.style.backgroundImage = "url('photos/site/fire.gif')";
} else if(bgChance <= 4){
	document.body.style.backgroundImage = "url('photos/site/giphy.webp')";	
};
