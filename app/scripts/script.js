const toggleMobile = document.querySelector("#toggle-mobile-menu");

const navBarMobile = document.querySelector("nav");

toggleMobile.addEventListener("click", function(){
  const visible = navBarMobile.getAttribute("data-visible");

  if (visible === "false"){
    navBarMobile.setAttribute("data-visible", true);
    toggleMobile.setAttribute("data-fixed", true);
  } else {
    navBarMobile.setAttribute("data-visible", false);
    toggleMobile.setAttribute("data-fixed", false);
  }
});

$(document).ready(function(){
  const moreAboutToggle = $("#more-about");
  const moreAboutContent = $(".more-content-about");

  moreAboutContent.css("display", "none");

  moreAboutToggle.click(function(){
    moreAboutContent.slideToggle("slow");
  });
});


/*
$(document).ready(function(){

  const projectsToggle = $("#projects-toggle");

  const projectSection = $(".projects-sect"); 

  projectSection.css("display", "none");

  projectsToggle.click(function(){

    projectSection.slideToggle("slow");

  });

});
*/

// Create an instance of IntersectionObserver with a callback function as a parameter
const observer = new IntersectionObserver((entries) => {
  // For each entry in the entries array passed to the callback function
  entries.forEach((entry) => {
    // Log the current entry to the console
    console.log(entry);
    // If the current entry is intersecting with the viewport
    if (entry.isIntersecting) {
      // Add the 'show' class to the target element of the entry
      entry.target.classList.add('show');
    } // else {
      // Otherwise, remove the 'show' class from the target element of the entry
      //entry.target.classList.remove('show');
    //}
  });
});

// Find all elements with the class 'hide'
const hiddenElements = document.querySelectorAll('.hidden');
// For each element found, add it to the observer to be monitored for intersection
hiddenElements.forEach((el) => observer.observe(el));
