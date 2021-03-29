var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	//volume.innerHTML = "100%";
	video.play()
	document.querySelector("#volume").innerHTML=video.volume*100+"%"
});

document.querySelector("#pause").addEventListener("click", function(){
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function(){
	console.log("Slow Down Video");
	video.playbackRate = video.playbackRate * 0.95;
	// video.playbackRate *= .95; shortcut
	console.log("New speed is" + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function(){
	console.log("Speed Up Video");
	video.playbackRate /= .95; 
	console.log("New speed is" + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function(){
	console.log("Skip Ahead Video");
	video.currentTime=video.currentTime + 15;
	if (video.currentTime >= 67) {    
		video.loop = true;
  		video.load();
		console.log("Loop");
 }

});

document.querySelector("#mute").addEventListener("click", function(){
	console.log("Mute Video");
	if (video.muted === false) {    
		video.muted = true;
		this.textContent = 'Unmute';
 }

 else {
	 video.muted = false;
	 this.textContent = 'Mute';
 }
});

document.querySelector("#slider").addEventListener("click", function(){
	console.log("Changing volume")
	console.log(this.value)
	video.volume = this.value/100
	document.querySelector("#volume").innerHTML=video.volume*100+"%"
});

document.querySelector("#vintage").addEventListener("click", function(){
	console.log("Changing CSS");
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function(){
	console.log("Removing CSS");
	video.classList.remove("oldSchool");
});