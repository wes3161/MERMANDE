window.addEventListener("load", seeker);

function seeker(){
	var song = ["https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/463923036&color=%23ae41f4&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=true", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/615438117&color=%23ae41f4&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=true", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/533163915&color=%23ae41f4&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=true", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/566330946&color=%23ae41f4&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=true", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/650648105&color=%23ae41f4&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=true", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/462046557&color=%23ae41f4&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=true", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/532701396&color=%23ae41f4&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=true", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/650702015&color=%23ae41f4&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"];

	document.getElementById("nextBtn").addEventListener("click", playNext);
	document.getElementById("prevBtn").addEventListener("click", playPrev);

	var pos = Math.floor(Math.random() * (song.length - 1));
 	document.getElementById("scPlayer").src = song[pos];

	function playNext(){
		if(pos + 1 == song.length){
			pos = 0;
		} else {
			pos++;
		};

		document.getElementById("scPlayer").src = song[pos];
	};

	function playPrev(){
		if(pos - 1 < 0){
			pos = song.length - 1;
		} else {
			pos--;
		};

		document.getElementById("scPlayer").src = song[pos];
	};
};
