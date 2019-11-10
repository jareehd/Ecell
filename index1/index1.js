
$(function() {
    AOS.init();
  });
  $(window).on('load', function() {
    AOS.refresh();
  });

$(document).ready(function(){
    $("#close-button").click(function(){        
            $('#myNavbar').removeClass('show');
            $('#myNavbar').addClass('hide');
            
            $('#menu').removeClass('hide');
            $('#menu').addClass('show');    
    });
    
    $("#menu").click(function(){
        $('#menu').removeClass('show');
        $('#menu').addClass('hide');
        $('#myNavbar').removeClass('hide');
        $('#myNavbar').addClass('show');   
   });
});
