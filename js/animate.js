console.log("animate.js loaded");

$(document).ready(function() {
    // Check if element is scrolled into view
    function isScrolledIntoView(elem) {
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();
  
      var elemTop = $(elem).offset().top;
      var elemBottom = elemTop + $(elem).height();

    //   console.log("docViewTop: " + docViewTop);
      console.log("docViewBottom: " + docViewBottom);
      console.log("elemTop: 868");
    //   console.log("elemBottom: " + elemBottom);
  
      //return elemBottom <= docViewBottom && elemTop >= docViewTop;

      return docViewBottom >= elemTop + 100;
    }
    // If element is scrolled into view, fade it in
    $(window).scroll(function() {
      $(".animation-fader").each(function() {
        if (isScrolledIntoView(this) === true) {
            //console.log("ready");
          $(this).addClass("animate__fadeInUp");
        }
      });
    });
});