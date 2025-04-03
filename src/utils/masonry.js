// const elem = document.querySelector(".masonry-container");
// const msnry = new Masonry(elem, {
//   // options
//   itemSelector: ".masonry-column",
//   columnWidth: 400,
// });

document.addEventListener("astro:page-load", () => {
  createMasonry();
  console.log("createMasonry");
  document.addEventListener("resize", createMasonry);
});

//Re-calculate the masonry layout when the window is resized.

function createMasonry() {
  const container = document.querySelector(".masonry-container");
  if (!container) return;

  // Calculate number of columns based on screen width
  let columnCount = 1;
  if (window.innerWidth >= 1080) {
    columnCount = 5;
  } else if (window.innerWidth >= 720) {
    columnCount = 3;
  } else if (window.innerWidth >= 414) {
    columnCount = 2;
  }

  // Create columns
  const columns = [];
  for (let i = 0; i < columnCount; i++) {
    const column = document.createElement("div");
    column.classList.add("masonry-column");
    container.appendChild(column);
    columns.push(column);
  }

  // Distribute items to columns
  const items = Array.from(container.children);
  items.forEach((item, index) => {
    if (!item.classList.contains("masonry-column")) {
      columns[index % columnCount].appendChild(item);
    }
  });
}
