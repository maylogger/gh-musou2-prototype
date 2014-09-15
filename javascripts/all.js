// off canvas menu switch
$('.menu-btn').on("click", function(){
  $('body').toggleClass('open-menu');
});

$('.news-comment-btn button').on("click", function(){
  $(this).parent().next().next().addClass('active');
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