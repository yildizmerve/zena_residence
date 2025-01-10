let currentPage = 0;
let previousPage = -1;
const pages = document.querySelectorAll(".page");

function scrollPage(event) {
  if (event.deltaY > 0) {
    // Aşağı kaydırma (next page)
    currentPage = Math.min(currentPage + 1, pages.length - 1);
  } else {
    // Yukarı kaydırma (previous page)
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
  }, 250);

  previousPage = currentPage;
}

window.addEventListener("wheel", scrollPage);

changePage(); // İlk sayfa yüklendikten sonra aktif hale getir
