
// $('.box').on('click', function(){
//    $(this).toggleClass('is-paused');
// });
// now not using jquery: 

const boxes = document.querySelectorAll('.box');
boxes.forEach(function (box){
    box.addEventListener('click', function(){
        this.classList.toggle('is-paused');
    })
})