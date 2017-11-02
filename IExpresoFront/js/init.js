(function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function(){
  $('.slider').slider();
});

var user = 'hola';
var password = 'computadora';

$(function(){
  $("#password").keyup(function(event) {
    if (event.keyCode == 13) {
      $("#submit").click();
    }
  });
});

