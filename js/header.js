function stickyHeader() {
  const headerElement = document.querySelector("header");
  const stickyHeaderClassName = "sticky_header";

  if (document.documentElement.scrollTop > 50) {
    headerElement.classList.add(stickyHeaderClassName);
  } else {
    headerElement.classList.remove(stickyHeaderClassName);
  }
}

window.addEventListener("load", stickyHeader);
window.addEventListener("scroll", stickyHeader);
