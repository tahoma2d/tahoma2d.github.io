function checkUserOS() {
  var button = document.getElementById("home_download_button");
  var osName = "Download";
  var osLink = "download/official_releases.html";

  function fetchData(assetsNumber) {
    fetch("https://api.github.com/repos/tahoma2d/tahoma2d/releases/latest")
      .then((response) => response.json())
      .then(
        (data) => (button.href = data.assets[assetsNumber].browser_download_url)
      );
  }

  if (navigator.userAgent.indexOf("Win") != -1) {
    fetchData(5);
    osName = "Download For Windows";
  } else if (navigator.userAgent.indexOf("like Mac") != -1) {
    osName = "Download";
    button.href = osLink;
  } else if (navigator.userAgent.indexOf("Mac") != -1) {
    fetchData(4);
    osName = "Download For macOS";
  } else if (navigator.userAgent.indexOf("Android") != -1) {
    osName = "Download";
    button.href = osLink;
  } else if (navigator.userAgent.indexOf("Linux") != -1) {
    fetchData(3);
    osName = "Download For Linux";
  }

  button.text = osName;
}

window.addEventListener("load", checkUserOS);
