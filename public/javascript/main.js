window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    headerElement.classList.add("whenScroll");
  } else {
    headerElement.classList.remove("whenScroll");
  }
});
