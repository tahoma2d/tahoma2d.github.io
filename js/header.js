window.onload = function downloadPages() {

    if (document.URL.includes("official_releases.html") || document.URL.includes("nightly_builds.html") || document.URL.includes("plugins.html") || document.URL.includes("404.html")) {
        document.querySelector("header").classList.add("download_page_header")
    }

}

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