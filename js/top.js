window.onscroll = function topButton() {
    if (document.documentElement.scrollTop > 100) {
        document.querySelector(".top").classList.add("top_shown")


    } else {
        document.querySelector(".top").classList.remove("top_shown")
    }

}

function scrollToTop() {
    window.scrollTo({ top: 0, behavier: "smooth" })
}