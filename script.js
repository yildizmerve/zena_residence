document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(
    ".content-container, .header-container, footer"
  );
  let currentIndex = 0;

  const scrollToSection = (index) => {
    if (index < 0 || index >= sections.length) return;
    currentIndex = index;
    sections[currentIndex].scrollIntoView({ behavior: "smooth" });

    // Tüm animasyonları sıfırla ve yeniden uygula
    sections.forEach((section, i) => {
      const contentBox = section.querySelector(".content-box");
      const textArea = section.querySelector(".text-area");
      const textContainer = section.querySelector(".text-container");

      if (i === currentIndex) {
        contentBox?.classList.add("animate");
        textArea?.classList.add("animate");
        textContainer?.classList.add("animate");
        section.classList.add("animate");
      } else {
        contentBox?.classList.remove("animate");
        textArea?.classList.remove("animate");
        textContainer?.classList.remove("animate");
        section.classList.remove("animate");
      }
    });
  };

  const handleScroll = (event) => {
    event.preventDefault();
    const direction = event.deltaY > 0 ? 1 : -1;
    scrollToSection(currentIndex + direction);
  };

  window.addEventListener("wheel", handleScroll, { passive: false });
  window.addEventListener("touchstart", (e) => {
    const startY = e.touches[0].clientY;

    const touchMoveHandler = (moveEvent) => {
      const endY = moveEvent.touches[0].clientY;
      const direction = endY < startY ? 1 : -1;
      scrollToSection(currentIndex + direction);
      window.removeEventListener("touchmove", touchMoveHandler);
    };

    window.addEventListener("touchmove", touchMoveHandler, { passive: false });
  });

  // Sayfa yüklendiğinde ilk bölüme git
  scrollToSection(currentIndex);
});
