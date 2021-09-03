//console.log("navbar.js loaded");

//Autohide the navbar upon scrolling
var lastScrollTop = 0;
document.addEventListener("scroll", function(){
  var st = window.pageYOffset || document.documentElement.scrollTop;
  if (st > lastScrollTop){
  // downscroll code
    //console.log("scrolldown");
    document.getElementById("autohide").classList.remove("scrolled-up");
    document.getElementById("autohide").classList.add("scrolled-down");
  } 
  else {
    //console.log("scrollup");
    document.getElementById("autohide").classList.remove("scrolled-down");
    document.getElementById("autohide").classList.add("scrolled-up");
    document.getElementById("navbarSupportedContent").classList.remove("show");
    // upscroll code
  }
  lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);