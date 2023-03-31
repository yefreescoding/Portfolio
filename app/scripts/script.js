const toggleMobile = document.querySelector("#toggle-mobile-menu");

const navBarMobile = document.querySelector("nav");

toggleMobile.addEventListener("click", function(){
  const visible = navBarMobile.getAttribute("data-visible");

  if (visible === "false"){
    navBarMobile.setAttribute("data-visible", true);
    toggleMobile.setAttribute("data-fixed", true)
  } else {
    navBarMobile.setAttribute("data-visible", false);
    toggleMobile.setAttribute("data-fixed", false)
  }
})

