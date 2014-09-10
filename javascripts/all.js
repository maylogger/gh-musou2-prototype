// off canvas menu switch
$('.menu-btn').on("click", function(){
  $('body').toggleClass('open-menu');
});

$('.news-comment-btn button').on("click", function(){
  $(this).parent().next().next().addClass('active');
});