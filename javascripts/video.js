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
$('.video-info-inner > .play-button').on("click", function(event){
  $('.video').addClass('is-playing');
  $('.sidebar-item').addClass('is-move');
  $('.video-cover').addClass('is-hidden').delay(500).queue(function(){
    $('.video-cover').addClass('is-remove');
  });
  playVideo();
});

$(window).scroll(function() {

  var windowScroll = $(window).scrollTop();
  var fixedStart = $('.post').offset().top - 48;
  var playingVideo = $('.is-playing .iframe-video-inner');

  if ( windowScroll > fixedStart ) {
    $('.is-move').hcSticky({
      top: 256,
      responsive: true,
      stickTo: '#body_context > .container',
      offResolutions: -1024
    });
    playingVideo.addClass('is-fixed').delay(500).queue(function(){
      playingVideo.addClass('is-visible');
      playingVideo.dequeue();
    });
  } else {
    playingVideo.removeClass('is-fixed is-visible');
  }

});
