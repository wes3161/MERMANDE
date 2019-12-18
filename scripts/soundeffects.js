if(document.URL == "https://mermande.com/ad.html"){
  var audio = new Audio("sounds/song.ogg");
	audio.play();
} else {

// Random Num
var x = Math.floor((Math.random() * 100) + 1);

// Num check
if (x < 33) {
  var audio = new Audio("sounds/largecash2.wav");

} else {
  var audio = new Audio("sounds/largecash.wav");
}
// play audio
// audio.play();
// new magic from stack exchange that says it might make it play in chrome
var promise = audio.play();
if (promise) {
    //Older browsers may not return a promise, according to the MDN website
    promise.catch(function(error) { console.error(error); });
}
}
