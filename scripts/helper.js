class Helper {

  playPauseAndUpdate(song){
    player.playPause(song);
    if(player.playState !== 'playing'){return;}
      $('#time-control .total-time').text(player.getDuration());
  };

}

const helper = new Helper();
