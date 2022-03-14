$(function() {

    var button = document.getElementById("home_download_button");
    var os_name = "Download";
    var os_link = "download/official_releases.html"

    function fetchData(versionURL) {
        fetch(versionURL)
            .then(response => response.json())
            .then(data => button.href = data.browser_download_url)
    }

    if (navigator.userAgent.indexOf("Win") != -1) {
        fetchData("https://api.github.com/repos/tahoma2d/tahoma2d/releases/assets/38694525")

        os_name =
            "Download For Windows";



    } else if (navigator.userAgent.indexOf("like Mac") != -1) {
        os_name =
            "Download";
        button.href = os_link;



    } else if (navigator.userAgent.indexOf("Mac") != -1) {
        fetchData("https://api.github.com/repos/tahoma2d/tahoma2d/releases/assets/36855483")

        os_name =
            "Download For macOS";



    } else if (navigator.userAgent.indexOf("Android") != -1) {
        os_name =
            "Download";
        button.href = os_link;



    } else if (navigator.userAgent.indexOf("Linux") != -1) {
        fetchData("https://api.github.com/repos/tahoma2d/tahoma2d/releases/assets/36868620")

        os_name =
            "Download For Linux";

    }

    button.text = os_name;

});