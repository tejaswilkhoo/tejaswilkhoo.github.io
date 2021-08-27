console.log("js loaded");

//Ensure the page starts on the left side
const scrollEventHandler = () =>
{
  console.log("x-scrolling");
  window.scroll(0, window.pageYOffset)
}
window.addEventListener("scroll", scrollEventHandler, false);

//Autohide the navbar upon scrolling
document.addEventListener("DOMContentLoaded", function(){
  el_autohide = document.querySelector('.autohide');
  navbar_height = document.querySelector('.navbar').offsetHeight;
  document.body.style.paddingTop = navbar_height + 'px';
  if(el_autohide){
    var last_scroll_top = 0;
    window.addEventListener('scroll', function() {
      let scroll_top = window.scrollY;
      if(scroll_top < last_scroll_top) {
          el_autohide.classList.remove('scrolled-down');
          el_autohide.classList.add('scrolled-up');
      }
      else {
          el_autohide.classList.remove('scrolled-up');
          el_autohide.classList.add('scrolled-down');
      }
      last_scroll_top = scroll_top;
    }); 
  }  
}); 

//Mail Popover
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl),{html: true}
})