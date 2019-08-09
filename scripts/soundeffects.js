// Random Num
var x = Math.floor((Math.random() * 100) + 1);

// Num check
if (x < 10) {
  var audio = new Audio("sounds/largecash2.wav");

} else {
  var audio = new Audio("sounds/largecash.wav");
}
// play audio
audio.play();
