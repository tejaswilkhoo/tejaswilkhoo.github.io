//console.log("experience.js loaded");

document.getElementById("cssi").addEventListener("click", function() {
  if(!(document.getElementById("cssi").classList.contains("active"))) {
    //console.log("toggling cssi");
    document.getElementById("cssi").classList.add("active");
    document.getElementById("pdsb").classList.remove("active");
    document.getElementById("kraftwerx").classList.remove("active");

    $("#job-explanation").fadeOut(function(){
      $(this).html(
    `          
      <h3 class="job-title text-center">Student <span class="gold-text-job">@Google CSSI</span> </h3>
      <h4 class="job-dates text-center">July 2021 - August 2021</h4>
      <ul>
        <li class="job-role">
          <b>CSSI: </b>Computer Science Summer Institute
        </li>
        <li class="job-role">
          Participated in a selective computer science program based on JavaScript and Firebase taught by Google engineers.
        </li>
        <li class="job-role">
          Explored and added external API functionality (i.e., Giphy API) and JSON data formatting to modern website design while collaborating with other students using Git and GitHub.
        </li>
        <li class="job-role">
          Integrated Firebase’s Realtime Database and authentication services into 4 different web applications to automatically manage and sync large volumes of user data, through CRUD functions.
        </li>
      </ul>
    `)}).fadeIn();
  }
});

document.getElementById("pdsb").addEventListener("click", function() {
  if(!(document.getElementById("pdsb").classList.contains("active"))) {
    console.log("toggling pdsb");
    document.getElementById("cssi").classList.remove("active");
    document.getElementById("pdsb").classList.add("active");
    document.getElementById("kraftwerx").classList.remove("active");

    $("#job-explanation").fadeOut(function(){
      $(this).html(
      `
      <h3 class="job-title text-center">Programming Instructor <span class="gold-text-job">@Peel</span> </h3>
      <h4 class="job-dates text-center">June 2021 - July 2021</h4>
      <ul>
        <li class="job-role">
          Lead a developmental program for 50 students to excel and advance their knowledge of functional and objectoriented programming.
        </li>
        <li class="job-role">
          Designed a curriculum to introduce students to prominent languages like Python and JavaScript, while simultaneously ensuring a strong conceptual understanding of a computer’s internal processes.
        </li>
        <li class="job-role">
          Utilized popular coding platforms to add an element of interaction to the lessons, such as EarSketch and Replit.
        </li>
      </ul>
    `)}).fadeIn();
  }
});

document.getElementById("kraftwerx").addEventListener("click", function() {
if(!(document.getElementById("kraftwerx").classList.contains("active"))) {
  console.log("toggling kraftwerx");
  document.getElementById("cssi").classList.remove("active");
  document.getElementById("pdsb").classList.remove("active");
  document.getElementById("kraftwerx").classList.add("active");

  $("#job-explanation").fadeOut(function(){
    $(this).html(`      
    <h3 class="job-title text-center">Founder & Mentor <span class="gold-text-job">@Kraftwerx</span> </h3>
    <h4 class="job-dates text-center">July 2017 - May 2021</h4>
    <ul>
      <li class="job-role">
        Created Kraftwerx Robotics to help students develop an interdisciplinary comprehension of STEM Education through modern languages/software, such as AutoCAD, C++, and Python.
      </li>
      <li class="job-role">
        Developed a robotics curriculum from scratch to help students with no prior experience become equipped with both mechanical and software engineering knowledge.
      </li>
      <li class="job-role">
        Expanded the organization from 4 students to 15, who have qualified for the World Championships every year.
      </li>
    </ul>
    `)}).fadeIn();
  }
});