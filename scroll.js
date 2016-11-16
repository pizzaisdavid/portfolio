
$(document).ready(function () {
  $("#projectsButton").click(function () {
    $('html,body').animate({
      scrollTop: $("#projects").offset().top
    },
        'slow');
  });


  $("#aboutButton").click(function () {
    $('html,body').animate({
      scrollTop: $("#about").offset().top
    },
        'slow');
  });


  $("#contactButton").click(function () {
    $('html,body').animate({
      scrollTop: $("#contact").offset().top
    },
        'slow');
  });

});