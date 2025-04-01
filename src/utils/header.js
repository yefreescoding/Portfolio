document.addEventListener("astro:page-load", () => {
  const header = document.querySelector(".header");
  // Buttons
  const musicToggle = document.querySelector("#music-toggle");
  const menuToggle = document.querySelector("#menu-toggle");
  // components
  const musicComp = document.querySelector("#div-music");
  const menuComp = document.querySelector("#div-menu");

  musicToggle.addEventListener("click", () => {
    const state = musicToggle.getAttribute("aria-controls");

    menuToggle.setAttribute("aria-controls", "closed");
    menuComp.setAttribute("aria-hidden", "true");

    if (state === "closed") {
      header.setAttribute("aria-expanded", "true");
      header.setAttribute("aria-mode", "music");
      musicToggle.setAttribute("aria-controls", "open");
      musicComp.setAttribute("aria-hidden", "false");
    } else {
      header.setAttribute("aria-expanded", "false");
      header.setAttribute("aria-mode", "nada");
      musicToggle.setAttribute("aria-controls", "closed");
      musicComp.setAttribute("aria-hidden", "true");
    }

    console.log(state);
  });

  menuToggle.addEventListener("click", () => {
    const state = menuToggle.getAttribute("aria-controls");

    musicToggle.setAttribute("aria-controls", "closed");
    musicComp.setAttribute("aria-hidden", "true");

    if (state === "closed") {
      header.setAttribute("aria-expanded", "true");
      header.setAttribute("aria-mode", "menu");
      menuToggle.setAttribute("aria-controls", "open");
      menuComp.setAttribute("aria-hidden", "false");
    } else {
      header.setAttribute("aria-expanded", "false");
      header.setAttribute("aria-mode", "nada");
      menuToggle.setAttribute("aria-controls", "closed");
      menuComp.setAttribute("aria-hidden", "true");
    }

    console.log(state);
    console.log(musicComp.getAttribute("aria-hidden"));
  });
});
