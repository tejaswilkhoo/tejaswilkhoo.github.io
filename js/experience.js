//console.log("experience.js loaded");

document.getElementById("step2").classList.add("active");

const mainExp =
`          
<h3 class="job-title text-center">STEP Intern <span class="gold-text-job">@Google</span> </h3>
<h4 class="job-dates text-center">May 2023 - Aug 2023, Sunnyvale CA</h4>
<ul>
  <li class="job-role">
    <b>STEP: </b>Student Training in Engineering Program
  </li>
  <li class="job-role">
    Launched a mechanism to programmatically identify URLs belonging to Google Compute Engine and enforce malicious VMs, yielding a 10x increase in malicious Compute Engine users suspended.
  </li>
  <li class="job-role">
    Deployed Golang scripts on Google's anti-abuse platform to determine policy violations of abusive actors and to dynamically schedule takedowns based on individual user conditions.
  </li>
  <li class="job-role">
    Wrote C++ services for DNS/IP lookups, and reprovisioned the existing lookup pipeline to undergo a 99.8% load decrease by redirecting traffic to a feature cache.
  </li>
</ul>
`

$("#job-explanation").html(mainExp);



document.getElementById("step2").addEventListener("click", function () {
  if (!document.getElementById("step2").classList.contains("active")) {
    document.getElementById("step2").classList.add("active");
    document.getElementById("step1").classList.remove("active");
    document.getElementById("uwbp").classList.remove("active");
    document.getElementById("pdsb").classList.remove("active");
    document.getElementById("kraftwerx").classList.remove("active");

    $("#job-explanation")
      .fadeOut(function () {
        $(this).html(
          mainExp
        );
      })
      .fadeIn();
  }
});

document.getElementById("step1").addEventListener("click", function () {
  if (!document.getElementById("step1").classList.contains("active")) {
    document.getElementById("step2").classList.remove("active");
    document.getElementById("step1").classList.add("active");
    document.getElementById("uwbp").classList.remove("active");
    document.getElementById("pdsb").classList.remove("active");
    document.getElementById("kraftwerx").classList.remove("active");

    $("#job-explanation")
      .fadeOut(function () {
        $(this).html(
          `          
          <h3 class="job-title text-center">STEP Intern <span class="gold-text-job">@Google</span> </h3>
          <h4 class="job-dates text-center">May 2022 - Aug 2022, Waterloo ON</h4>
          <ul>
            <li class="job-role">
              <b>STEP: </b>Student Training in Engineering Program
            </li>
            <li class="job-role">
              Contributed to an ML-based bug triaging tool that reduces time spent debugging integration/end-to-end tests by routing bugs and de-duplicating test failures.
            </li>
            <li class="job-role">
              Engineered a feature generator that extracts test data from Google's database and processes it to be ingested by a clustering module, improving existing clustering accuracy by 21%.
            </li>
            <li class="job-role">
              Implemented a custom Go server using Pub/Sub queues, gRPC, and Protobufs to communicate with other Google services, minimizing latency to 3700ms (75% decrease from previous) per execution.
            </li>
          </ul>
      `
        );
      })
      .fadeIn();
  }
});

document.getElementById("uwbp").addEventListener("click", function () {
  if (!document.getElementById("uwbp").classList.contains("active")) {
    document.getElementById("step2").classList.remove("active");
    document.getElementById("step1").classList.remove("active");
    document.getElementById("uwbp").classList.add("active");
    document.getElementById("pdsb").classList.remove("active");
    document.getElementById("kraftwerx").classList.remove("active");

    $("#job-explanation")
      .fadeOut(function () {
        $(this).html(
          `          
          <h3 class="job-title text-center">Technical Lead <span class="gold-text-job">@UW Blueprint</span> </h3>
          <h4 class="job-dates text-center">May 2022 - April 2023, Waterloo ON</h4>
          <ul>
            <li class="job-role">
              <b>University of Waterloo Blueprint: </b> A club dedicated to building tech for social good, providing innovative tech solutions to partnered non-profit organizations.
            </li>
            <li class="job-role">
              Directed a team of 5 developers to complete a registration and management service (React, MongoDB, Stripe) for Focus on Nature, an organization that provides workshops to 20,000+ students and 146 schools in Ontario.
            </li>
            <li class="job-role">
              Built backend (PostgreSQL, Apollo GraphQL) and frontend components for the 100+ volunteers of Sistering, an organization that provides aid to thousands of women in precarious housing situations.
            </li>
          </ul>
        `
        );
      })
      .fadeIn();
  }
});

document.getElementById("pdsb").addEventListener("click", function () {
  if (!document.getElementById("pdsb").classList.contains("active")) {
    document.getElementById("step2").classList.remove("active");
    document.getElementById("step1").classList.remove("active");
    document.getElementById("uwbp").classList.remove("active");
    document.getElementById("pdsb").classList.add("active");
    document.getElementById("kraftwerx").classList.remove("active");

    $("#job-explanation")
      .fadeOut(function () {
        $(this).html(
          `
      <h3 class="job-title text-center">Programming Instructor <span class="gold-text-job">@Peel</span> </h3>
      <h4 class="job-dates text-center">June 2021 - July 2021, Peel ON</h4>
      <ul>
        <li class="job-role">
          Lead a developmental program for 50 students to excel and advance their knowledge of functional and object-oriented programming.
        </li>
        <li class="job-role">
          Designed a curriculum to introduce students to prominent languages like Python and JavaScript, while simultaneously ensuring a strong conceptual understanding of a computer’s internal processes.
        </li>
        <li class="job-role">
          Utilized popular coding platforms to add an element of interaction to the lessons, such as EarSketch and Replit.
        </li>
      </ul>
    `
        );
      })
      .fadeIn();
  }
});

document.getElementById("kraftwerx").addEventListener("click", function () {
  if (!document.getElementById("kraftwerx").classList.contains("active")) {
    document.getElementById("step2").classList.remove("active");
    document.getElementById("step1").classList.remove("active");
    document.getElementById("uwbp").classList.remove("active");
    document.getElementById("pdsb").classList.remove("active");
    document.getElementById("kraftwerx").classList.add("active");

    $("#job-explanation")
      .fadeOut(function () {
        $(this).html(`      
    <h3 class="job-title text-center">Founder & Mentor <span class="gold-text-job">@Kraftwerx</span> </h3>
    <h4 class="job-dates text-center">July 2017 - May 2021, Brampton ON</h4>
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
    `);
      })
      .fadeIn();
  }
});
