function playVideo() {
    var starttime = 4;  // start at 7 seconds
    var endtime = 10;    // stop at 17 seconds

    var video = document.getElementById('audio');

    video.addEventListener("timeupdate", function() {
       if (this.currentTime >= endtime) {
            this.pause();
        }
    }, false);

    //suppose that video src has been already set properly
    video.load();
    video.play();    //must call this otherwise can't seek on some browsers, e.g. Firefox 4
    try {
        video.currentTime = starttime;
    } catch (ex) {
        //handle exceptions here
    }
}