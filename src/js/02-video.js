import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

console.log(Player);

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const KEY = 'videoplayer-current-time';

player.on('play', function () {
  console.log('played the video!');
});

player.on(
  'timeupdate',
  throttle(function (event) {
    try {
      JSON.stringify(localStorage.setItem(KEY, event.seconds));
    } catch (error) {
      console.log(error);
    }
  }, 1000)
);

player.setCurrentTime(JSON.parse(localStorage.getItem(KEY)));
