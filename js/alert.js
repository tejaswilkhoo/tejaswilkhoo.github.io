//console.log("alert.js loaded");

document.getElementById("email").addEventListener("click", function() {
    //console.log("mail time");
    if (confirm("Want to send an email to me? twilkhoo@uwaterloo.ca")) {
        window.location.href = "mailto:twilkhoo@uwaterloo.ca";
    }
});