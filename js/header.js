function stickyHeader() {

    var headerElement = document.querySelector("header")

    if (document.documentElement.scrollTop > 50) {
        headerElement.classList.add("sticky_header")

    } else {
        headerElement.classList.remove("sticky_header")
    }

}


window.addEventListener('load', stickyHeader)
window.addEventListener('scroll', stickyHeader)