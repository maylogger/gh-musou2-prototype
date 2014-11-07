$(function(){
  $('.menu-btn').on("click", function(){
    $('body').toggleClass('open-menu');
  });

  $('.member-nav').on("click", function(){
    $('.member-menu').toggleClass('is-open');
  });

  $('.comment-button').on("click", function(){
    $(this).next('.comment-input').addClass('is-open');
    $(this).parent('.comment-form').addClass('is-open');
    $(this).remove();
  });

  $('.topic-detail-toggle').on("click", function(){
    $(this).toggleClass('is-open');
  });

  $('.topic-detail').on("hide.bs.collapse", function(){
    $(this).prev('.topic-header').children('.topic-detail-toggle').removeClass('is-open');
  });

  $('.month-title').on("click", function(){
    $(this).toggleClass('is-open');
  });

  $('.month-post-list').on("hide.bs.collapse", function(){
    $(this).prev('.month-title').removeClass('is-open');
  });

  $('.question-content').on("show.bs.collapse", function(){
    $(this).prev('.question-header').children('.open').children('.question-collapse-button').text('收合');
  });

  $('.question-content').on("hide.bs.collapse", function(){
    $(this).prev('.question-header').children('.open').children('.question-collapse-button').text('展開');
  });

  $('.catalog').hcSticky({
    top: 24,
    responsive: true,
    stickTo: '.main > .container',
    offResolutions: -900
  });

  $('.go-anchor').on('click',function (e) {
      e.preventDefault();

      var target = this.hash,
      $target = $(target);

      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 700, 'swing', function () {
          window.location.hash = target;
      });
  });

  $('.dictionary-menu-toggle').on("click", function(){
    $('.dictionary-menu').toggleClass('is-open');
  });

  $('.writer-intro-button').on("click", function(){
    $('.writer-intro').addClass('is-open');
  });

  $('.writer-intro .close').on("click", function(){
    $('.writer-intro').removeClass('is-open');
  });

  $('.announce .close').on("click", function(){
    $('.announce').addClass('is-drop').delay(1000).queue(function(){
      $('.announce').remove();
    });
  });

  $('.search-bar-toggle').on("click", function(){
    $(this).toggleClass('is-open');
    $('.search-bar').toggleClass('is-open');
  });

  $('.btn-share-module, .message-sent').magnificPopup({
    type: 'ajax',
    removalDelay: 300,
    mainClass: 'mfp-fade'
  });

  $('.comment-image').magnificPopup({
    type: 'image',
    removalDelay: 300,
    mainClass: 'mfp-fade'
  });

  $('.big-text h1, .big-text h2, .big-text h3, .big-text h4, .video-info-inner h1').macho();

  if ( $('#slider-forecast, #slider-live, #slider-report').length != 0 ) {
    $('#slider-forecast, #slider-live, #slider-report').slick({
      centerMode: true,
      centerPadding: '0px',
      slidesToShow: 1,
      cssEase: 'ease-in-out',
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 500,
    });
  }
});