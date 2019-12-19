window.addEventListener("load", ad);

function rotate(){
        // Rotate page on mouse/key movement
    setTimeout(function(){
        document.onmousemove = document.onkeypress = function(){
            ['', '-ms-', '-webkit-', '-o-', '-moz-'].map(function(prefix){
                document.body.style[prefix + 'transition'] = prefix + 'transform 3s';
                document.body.style[prefix + 'transform'] = 'rotate(180deg)';
            });
        }
    }, 10);
    setTimeout(function(){
        document.onmousemove = document.onkeypress = function(){
            ['', '-ms-', '-webkit-', '-o-', '-moz-'].map(function(prefix){
                document.body.style[prefix + 'transition'] = prefix + 'transform 3s';
                document.body.style[prefix + 'transform'] = 'rotate(0deg)';
            });
        }
    }, 100);
}
function raid(){
    var audio = new Audio("sounds/Air-raid-siren.mp3");
    audio.play();
}
function speach(){
    var audio = new Audio("sounds/disableadblock.mp3");
    audio.play();
}
function oddness(){
        // Random orientations
    ['', '-ms-', '-webkit-', '-o-', '-moz-'].map(function(prefix){
        Array.prototype.slice.call(document.querySelectorAll('div,p,span,img,a,body')).map(function(el){
            el.style[prefix + 'transform'] = 'rotate(' + (Math.floor(Math.random() * 8) - 4) + 'deg)';
        });
    });
    
}
function insanity(){

    //rotate()
    setInterval(oddness, 1000);
    setInterval(rotate, 1000);
    speach()
    raid()
    setInterval(oddness, 1000);
    setInterval(rotate, 1000);
    setInterval(speach, 7000);
    setInterval(raid, 10000);
}

function ad(){
var overRide = true;

if(document.URL == "https://mermande.com/disable.html"){
	overRide = false;

	document.getElementById("annoyance1").src = "photos/aides/disable1.png";
	document.getElementById("annoyance2").src = "photos/aides/disable2.png";
	document.getElementById("headerImage").src = "photos/aides/disable3.png";
	document.body.style.backgroundImage = "url('photos/aides/disable4.png')";

	document.getElementById("no").addEventListener("click", playSound);
	document.getElementById("yes").addEventListener("click", function (){window.location.assign('ad.html');});
}

if(document.URL == "https://mermande.com/ad.html"){
	overRide = false;

	document.getElementById("mainHeader").style.border = "transparent";
	document.getElementById("headerImage").style.display = "none";
	document.body.style.backgroundImage = "none";
	document.body.style.backgroundColor = "white";

	var buttonDiv = document.createElement("div");
	buttonDiv.id = "d1";
	buttonDiv.style.position = "sticky";
	document.getElementById("adBody").appendChild(buttonDiv);

	var imageTimes = Math.floor(Math.random() * 100 + 7);
	for(i = 0; i < 100; i++){
		var image = Math.floor(Math.random() * 25 + 1);
		var imageWidth = Math.floor(Math.random() * 10 + 5);
		var imageMargin = Math.floor(Math.random() * 20 + 1);

		var buttonImage = document.createElement("img");
		buttonImage.style.maxWidth = imageWidth + "%";
		buttonImage.style.marginLeft = imageMargin + "%";
		buttonImage.addEventListener("click", function(){warning(); setInterval(warning, 5200);});
		if(image <= 15){
			buttonImage.src = "photos/aides/d" + image + ".jpg";
		} else {
			buttonImage.src = "photos/aides/d" + image + ".gif";
		}
		document.getElementById("d1").appendChild(buttonImage);
	}
}

if(overRide == true){
	var pos1 = Math.floor(Math.random() * 6 + 1);
	var pos2 = Math.floor(Math.random() * 6 + 1);

	document.getElementById("annoyance1").src = "photos/aides/" + pos1 + ".jpg";
	document.getElementById("annoyance2").src = "photos/aides/" + pos2 + ".jpg";

	var popupChance = Math.floor((Math.random() * 4) + 1);

	var error = 0;

	if (popupChance == 1) {
		i = 1;
		while (i<5) {
	 		if (!confirm("Please Disable You're Adblocker!")){
				i = 6;
				error = 1;
				document.getElementById("annoyance1").src = "photos/aides/disable1.png";
				document.getElementById("annoyance2").src = "photos/aides/disable2.png";
				document.getElementById("headerImage").src = "photos/aides/disable3.png";
				document.body.style.backgroundImage = "url('photos/aides/disable4.png')";
                insanity()
			} else {
	 			i++;
			}
		}
		popupChance = 0;
	}

}

document.getElementById("annoyance1").addEventListener("click", adClick);
document.getElementById("annoyance2").addEventListener("click", adClick);

function adClick(){
	if(error == 0){
		window.location.assign('ad.html');
	} else {
		window.location.assign('disable.html');
	}
}


function playSound(){
	var audio = new Audio("sounds/error.wav");
	audio.play();
}

function warning(){
	var audio = new Audio("sounds/warning.ogg");
	audio.play();
}	
	
}
