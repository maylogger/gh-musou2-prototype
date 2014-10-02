// off canvas menu switch
$('.menu-btn').on("click", function(){
  $('body').toggleClass('open-menu');
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

$('.search-bar-toggle').on("click", function(){
  $(this).toggleClass('is-open');
  $('.search-bar').toggleClass('is-open');
});

$('.article p, .article h1, .article h2, .article h3, .article h4, .article h5, .article h6').macho();

