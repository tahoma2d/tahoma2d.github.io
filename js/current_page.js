function checkForActiveNavLink() {
  const allPossibleLinks = document.querySelectorAll(".activable-link");

  const currentHref = window.location.href;

  allPossibleLinks.forEach((link) => {
    let linkHref = link.getAttribute("href");

    if (linkHref.startsWith("./")) {
      linkHref = linkHref.slice(1);
    }

    const activeLinkClassName = "current-page";

    if (currentHref.includes(linkHref)) {
      link.classList.add(activeLinkClassName);
    } else {
      if (link.classList.contains(activeLinkClassName)) {
        link.classList.remove(activeLinkClassName);
      }
    }
  });
}

window.addEventListener("load", checkForActiveNavLink);
window.addEventListener("hashchange", checkForActiveNavLink);
