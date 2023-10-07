function checkScrollFromTop() {
  const topDisplayClassName = "top_shown";

  if (document.documentElement.scrollTop > 100) {
    document.querySelector(".top").classList.add(topDisplayClassName);
  } else {
    document.querySelector(".top").classList.remove(topDisplayClassName);
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavier: "smooth" });
}

window.addEventListener("scroll", checkScrollFromTop);
