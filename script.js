$(function() {
    $('.question-wrap').on('click', function(){
       $(this).next().slideToggle();
       $(this).find('.fa-angle-down').toggleClass('fa-flip-vertical'); 
      });
});
