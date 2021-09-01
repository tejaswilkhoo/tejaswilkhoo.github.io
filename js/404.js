console.log("404.js loaded");

const req = new XMLHttpRequest();
const baseURL = 'https://api.nasa.gov/planetary/apod?api_key=';
const apiKey = '8chDZZxVZJ8qESkLon6nbRnx7lUE1IFHBxmZoBsf';

req.open("GET", baseURL + apiKey, true);
req.send();

req.addEventListener("load", function(){
	if(req.status == 200 && req.readyState == 4){
  	const response = JSON.parse(req.responseText);
    document.getElementById("nasa-pic").src = response.hdurl;
    document.getElementById("title-404-content").textContent = response.title;
  }
})