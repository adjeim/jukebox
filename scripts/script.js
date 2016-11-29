
function Song(title, artist, url) {
	this.title = title;
	this.artist = artist;
	this.url = url;

}

var tudoPassa = new Song("Tudo Passa", "Kaleidoscopio", "assets/Kaleidoscopio-Tudo_Passa.mp3");


// global variables
var songTitle = document.querySelector(".songTitle");
var songArtist = document.querySelector(".songArtist");

var playButton = document.querySelector(".playButton");
var pauseButton = document.querySelector(".pauseButton");
var stopButton = document.querySelector(".stopButton");

var volumeUpButton = document.querySelector(".volumeUpButton");
var volumeDownButton = document.querySelector(".volumeDownButton");

var loadButton = document.querySelector(".loadButton");
var nextButton = document.querySelector(".nextButton");



function Jukebox() {
	this.songList = [];
	this.songFile = document.createElement("audio");
	// Creates a new audio element.


	this.addSong = function(newSong) {
		this.songList.unshift(newSong);
		this.songFile.src = this.songList[0].url;

		this.songFile.title = this.songList[0].title;
		this.songFile.artist = this.songList[0].artist;
		songTitle.innerText = this.songFile.title;
		songArtist.innerText = this.songFile.artist;
	}
	// Add songs by unshifting them to the beginning of the array.

	this.play = function() {
		this.songFile.play();
	}


	this.pause = function() {
		this.songFile.pause();
	}

	this.stop = function() {
		this.songFile.pause();
		this.songFile.currentTime = 0;
	}

	// this.volumeUp = function() {
	// 	this.songFile.volume += 0.1;
	// }

	// this.volumeDown = function() {
	// 	this.songFile.volume -= 0.1;
	// }

	// Added volumne buttons, but they don't seem to be working.

	this.loadSong = function() {
		this.newSongTitle = prompt("Enter the title of your song.");
		this.newSongArtist = prompt("Enter the artist of your song.");
		this.newSongUrl = prompt("Enter the url of your song.")
		this.songList.unshift(new Song(this.newSongTitle, this.newSongArtist, this.newSongUrl));

	}
	// Prompt user to add a new song to the queue. The song shows up when the "next song" button is clicked.


	this.changeSong = function() {
		this.songFile.setAttribute("src", this.songList[0].url);
		this.songFile.title = this.songList[0].title;
		this.songFile.artist = this.songList[0].artist;
		songTitle.innerText = this.songFile.title;
		songArtist.innerText = this.songFile.artist;

	}

	// playButton.addEventListener("click", function(){
	// 	this.songFile.play();
	// });

	// pauseButton.addEventListener("click", function(){
	// 	this.songFile.pause();
	// });

	// stopButton.addEventListener("click", function(){
	// 	this.songFile.stop();
	// });
	// So far, can't seem to control the actions triggered by the button clicks from inside the Jukebox object.

}



var myJukebox = new Jukebox();
myJukebox.addSong(tudoPassa);


playButton.addEventListener("click", function(){
	myJukebox.play();
});

pauseButton.addEventListener("click", function(){
	myJukebox.pause();
});

stopButton.addEventListener("click", function(){
	myJukebox.stop();
});

volumeUpButton.addEventListener("click", function(){
	myJukebox.volumeUp();
});

volumeDownButton.addEventListener("click", function(){
	myJukebox.volumeDown();
});

loadButton.addEventListener("click", function(){
	myJukebox.loadSong();
});

nextButton.addEventListener("click", function(){
	myJukebox.changeSong();
});

// "assets/Geografia.mp3"
// "assets/Libertango.mp3"

