import Player from '@vimeo/player'; 
import throttle from 'lodash.throttle'
    const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);
const LOCALSTORAGE_KEY = "videoplayer-current-time"
   



player.on('play', function () {
        console.log('played the video!');
    });


    
const onPlay = function (data) {
     
    const playTimes = data.seconds;
    const dataStoragePlayTimes = JSON.stringify(playTimes);
    localStorage.setItem(LOCALSTORAGE_KEY, dataStoragePlayTimes);
    // console.log(saveData);

}
player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });
player.on('timeupdate', throttle(onPlay, 1000)); 
player.setCurrentTime(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY))).then(function(seconds) {

}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});