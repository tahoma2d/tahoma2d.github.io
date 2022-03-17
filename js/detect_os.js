$(function() {

    var button = document.getElementById("home_download_button");
    var os_name = "Download";
    var os_link = "download/official_releases.html"

    function fetchData(assetsNumber) {
        fetch("https://api.github.com/repos/tahoma2d/tahoma2d/releases/latest")
            .then(response => response.json())
            .then(data => button.href = data.assets[assetsNumber].browser_download_url)
    }

    if (navigator.userAgent.indexOf("Win") != -1) {
        fetchData(3)

        os_name =
            "Download For Windows";



    } else if (navigator.userAgent.indexOf("like Mac") != -1) {
        os_name =
            "Download";
        button.href = os_link;



    } else if (navigator.userAgent.indexOf("Mac") != -1) {
        fetchData(2)

        os_name =
            "Download For macOS";



    } else if (navigator.userAgent.indexOf("Android") != -1) {
        os_name =
            "Download";
        button.href = os_link;



    } else if (navigator.userAgent.indexOf("Linux") != -1) {
        fetchData(1)

        os_name =
            "Download For Linux";

    }

    button.text = os_name;

});