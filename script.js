// using jquery: 

// $('.example-1 .button').click(function(){
//     $(this).parents('.example-1').toggleClass('is-transitioned');
//   });
  
//   $('.example-2 .switch').click(function(){
//     $(this).toggleClass('is-transitioned');
//   });
  
//   $('.example-3 .btn').click(function(){
//     $(this).parents('.layout').find('.alert').toggleClass('is-open');
//   });
  
//   $('.example-5 .send').click(function(){
//     $(this).parents('.email').addClass('is-sent');
//     setTimeout(function(){
//       $('.email').removeClass('is-sent');  
//     }, 1800);
    
//   });

  // just javascript: 
  document.querySelector('.example-1 .button').addEventListener('click', function() {
    this.parentNode.classList.toggle('is-transitioned');
  });
  
  document.querySelector('.example-2 .switch').addEventListener('click', function() {
    this.classList.toggle('is-transitioned');
  });
  
  document.querySelector('.example-3 .btn').addEventListener('click', function() {
    this.parentNode.parentNode.querySelector('.alert').classList.toggle('is-open');
  });
  
  document.querySelector('.example-5 .send').addEventListener('click', function() {
    this.parentNode.classList.add('is-sent');
    setTimeout(function() {
      document.querySelector('.email').classList.remove('is-sent');
    }, 1800);
  });
  