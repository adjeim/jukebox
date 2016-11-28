
function Song(title, artist, url) {
	this.title = title;
	this.artist = artist;
	this.url = url;
	// this.playTime = playTime;
	// this.genre = genre;

}

var tudoPassa = new Song("Tudo Passa", "Kaleidoscopio", "assets/Kaleidoscopio-Tudo_Passa.mp3");


// global variables
var songTitle = document.querySelector(".songTitle");
var songArtist = document.querySelector(".songArtist");

var playButton = document.querySelector(".playButton");
var pauseButton = document.querySelector(".pauseButton");
var stopButton = document.querySelector(".stopButton");
var loadButton = document.querySelector(".loadButton");
var nextButton = document.querySelector(".nextButton");



function Jukebox() {
	this.songList = [];
	this.songFile = document.createElement("audio");
	// Creates a new audio element.

	// this.currentSong = this.songList[0];
	// songTitle.innerText = this.currentSong;

	// this.songFile.setAttribute("controls", "controls");
	// 
	// this.displaySong = document.body.appendChild(this.songFile);
	// // Displays the current song and a UI for the player

	this.addSong = function(newSong) {
		this.songList.unshift(newSong);
		this.songFile.src = this.songList[0].url;

		this.songFile.title = this.songList[0].title;
		this.songFile.artist = this.songList[0].artist;
		songTitle.innerText = this.songFile.title;
		songArtist.innerText = this.songFile.artist;
	}

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

	this.loadSong = function() {
		this.newSongTitle = prompt("Enter the title of your song.");
		this.newSongArtist = prompt("Enter the artist of your song.");
		this.newSongUrl = prompt("Enter the url of your song.")
		this.songList.unshift(new Song(this.newSongTitle, this.newSongArtist, this.newSongUrl));

	}


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

// songTitle.innerText = myJukebox.songList[0].title;
// songArtist.innerText = myJukebox.songList[0].artist;

playButton.addEventListener("click", function(){
	myJukebox.play();
});

pauseButton.addEventListener("click", function(){
	myJukebox.pause();
});

stopButton.addEventListener("click", function(){
	myJukebox.stop();
});

loadButton.addEventListener("click", function(){
	myJukebox.loadSong();
});

nextButton.addEventListener("click", function(){
	myJukebox.changeSong();
});

// "assets/Geografia.mp3"
// "assets/Libertango.mp3"

// You will build a music player that will end up playing any mp3 you can find online. Think about what functionality you might need for this to work. Encapsulate all of this functionality in a JavaScript object so that starting a song is as simple as calling Jukebox.play() You need an array of song objects and the ability to play, stop and pause a song. How would you switch songs? Can you shuffle songs? Focus on getting the JavaScript to work and keep the HTML/CSS minimal, make it work before you make it look good!

// Your JavaScript Jukebox should:

// Display at least one song on the page when the page loads
// Give the user the ability to play that song, without using the "built-in" play button. This could be through a different button, through clicking or mousing over an image on the page, or any other device of your choosing.
// Give the user the ability to stop that song without using the "built-in" stop button. Once again, this could be through a different button, through clicking or mousing over an image on the page, or any other device of your choosing.
// Give the user the ability to load at least one different song into the Jukebox besides the one that is loaded when the page initially renders
// The whole Jukebox should be backed by an object called Jukebox with methods to play, stop, and load songs.