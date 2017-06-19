import 'jquery';

const setupMobileMenu = () => {
  $("#menu-button").click(function(){
    $("#menu-bg").toggleClass("big");
    if ($("#menu-button").hasClass('active')){
      $("#menu-button").css('background','aqua');
      $(".bar").css('background','#fff');
    }
    else{
      $("#menu-button").css('background','#fff');
      $(".bar").css('background','aqua');
    }
    
    $("#menu-button").toggleClass('active');
    $(".nav").toggleClass('show');
    $(".bar:nth-child(1)").toggleClass('one');
    $(".bar:nth-child(2)").toggleClass('two');
    $(".bar:nth-child(3)").toggleClass('three');
  });
}

$(function () {
  setupMobileMenu();
});
