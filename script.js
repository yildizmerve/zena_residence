let currentPage = 0;
let previousPage = -1;
const pages = document.querySelectorAll(".page");
let startY = 0;

function scrollPageDesktop(event) {
  if (event.deltaY > 0) {
    currentPage = Math.min(currentPage + 1, pages.length - 1);
  } else {
    currentPage = Math.max(currentPage - 1, 0);
  }

  changePage();
}

function scrollPageMobile(event) {
  const touch = event.changedTouches[0];
  const endY = touch.clientY;

  if (startY - endY > 200) {
    currentPage = Math.min(currentPage + 1, pages.length - 1);
  } else if (endY - startY > 200) {
    currentPage = Math.max(currentPage - 1, 0);
  }

  changePage();
}

function changePage() {
  if (previousPage !== -1) {
    pages[previousPage].classList.remove("active");
    pages[previousPage].classList.add("deactive");
  }

  setTimeout(() => {
    pages[currentPage].classList.remove("deactive");
    pages[currentPage].classList.add("active");
  }, 0);

  previousPage = currentPage;
}

if ("ontouchstart" in window) {
  window.addEventListener("touchstart", (event) => {
    startY = event.touches[0].clientY;
  });
  window.addEventListener("touchend", scrollPageMobile);
} else {
  window.addEventListener("wheel", scrollPageDesktop);
}

changePage();
