var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    videoId: 'Enxp3Gor-hk',
    events: {
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  event.target.stopVideo();
}

function playVideo() {
  player.playVideo();
}


// youtube controller
$('.video-info > .play-button').on("click", function(event){
  $('.video-cover').addClass('is-hidden').delay(500).queue(function(){
    $('.video-cover').remove();
  });
  playVideo();
});
