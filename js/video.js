var video;
video = document.querySelector("#player1");
volume_level = document.querySelector("#volume");

// page load
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.load();
	// loop and autoplay
	video.loop = false;
	video.autoplay = false;
	volume_level.innerHTML = video.volume * 100 + "%";
});

// to play the video (update vol info)
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	video.defaultPlaybackRate = 1;
	console.log("Current Volume: ",  video.volume);
});

// to pause the video
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
})

// to slow down
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down");
	video.playbackRate *= .90;
	console.log("New Speed is ", video.playbackRate);
})

// to speed up
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up");
	video.playbackRate /= 0.9;
	console.log("New Speed is = ", video.playbackRate);
})

// to skip ahead by 10 seconds
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Current Time: ", video.currentTime);
	console.log("Skip Ahead");
	if (video.currentTime < video.duration){
		video.currentTime += 10;
		console.log("New Time: ", video.currentTime);
	}
	else {
		video.currentTime = 0;
		console.log("End of video. Back to start.")
	}
})

// to mute
document.querySelector("#mute").addEventListener("click", function(){
	if (video.muted){
		video.muted = false;
		console.log(video.muted);
		document.querySelector('#mute').innerHTML = 'Mute';
	}
	else{
		video.muted = true;
		console.log(video.muted);
		document.querySelector('#mute').innerHTML = 'Unmute';
	}
})

// for the volume slider ( 2 queries )
document.querySelector("#slider").addEventListener("input", function(){
	// log current volume
	console.log("Current Volume", video.volume);
	// change vol
	val = document.querySelector("#slider");
	video.volume = val.value / 100;
	// log new vol
	console.log("New Volume", video.volume);
	// change inner html
	volume_level.innerHTML = video.volume * 100 + "%";
})

// to style oldSchool
document.querySelector("#vintage").addEventListener("click", function(){
	console.log("Old School");
	video.classList.add("oldSchool");
})

// to style original
document.querySelector("#orig").addEventListener("click", function(){
	console.log("Original");
	video.classList.remove("oldSchool");
})
