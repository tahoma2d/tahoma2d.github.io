$(function() {

    var button = document.getElementById("home_download_button");
    var os_name = "Download";
    var os_link = "download/official_releases.html"

    if (navigator.userAgent.indexOf("Win") != -1) os_name =
        "Download For Windows", os_link = "https://github.com/tahoma2d/tahoma2d/releases/download/v1.2/Tahoma2D-win.zip";
    if (navigator.userAgent.indexOf("Mac") != -1) os_name =
        "Download For macOS", os_link = "https://github.com/tahoma2d/tahoma2d/releases/download/v1.2/Tahoma2D-osx.dmg";
    if (navigator.userAgent.indexOf("Linux") != -1) os_name =
        "Download For Linux", os_link = "https://github.com/tahoma2d/tahoma2d/releases/download/v1.2/Tahoma2D-linux.tar.gz";

    button.text = os_name;
    button.href = os_link;

});