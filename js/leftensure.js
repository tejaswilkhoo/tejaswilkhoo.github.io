console.log("tleftensure.js loaded");


let stateCheck = setInterval(() => {
  if (document.readyState === 'complete') {
    console.log("Oh, you're a developer too?");
    document.documentElement.scrollLeft = 0;
    document.body.scrollLeft = 0;
    // window.pageYOffset = 0; //This does not let popover.js function

    clearInterval(stateCheck);

  }
}, 500);
