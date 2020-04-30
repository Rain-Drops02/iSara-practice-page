$(function() {
    $('.question-wrap').on('click', function(){
       $(this).next().slideToggle();
    });
});