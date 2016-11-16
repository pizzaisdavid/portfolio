
$(document).ready(function () {
  $("#projectsButton").click(function () {
    $('html,body').animate({
      scrollTop: $("#projects").offset().top
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