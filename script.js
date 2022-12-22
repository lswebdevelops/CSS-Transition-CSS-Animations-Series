
// $('.box').on('click', function(){
//    $(this).toggleClass('is-paused');
// });
// now not using jquery: 

$('html').on('click', function(){
    $(this).find('body').append('<div class="box"></div>');
})