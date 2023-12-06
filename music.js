var audioElement0 = document.createElement('audio');
audioElement0.setAttribute('src', 'music.mp3');
audioElement0.setAttribute('autoplay', 'autoplay');
audioElement0.play(); 
audioElement0.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
