window.addEventListener("load", ad);

function ad(){
var popupChance = Math.floor((Math.random() * 2) + 1);

var error = 0;

if (popupChance == 1) {
	i = 1;
	while (i<5) {
 		if (!confirm("Please Disable You're Adblocker!")){
			i = 6;
			error = 1;
			document.getElementById("ad1").src = "photos/ads/disable1.png";
			document.getElementById("ad2").src = "photos/ads/disable2.png";
			document.getElementById("headerImage").src = "photos/ads/disable3.png";
			document.body.style.backgroundImage = "url('photos/ads/disable4.png')";
		} else {
 			i++;
		};
	};
}; 

};
