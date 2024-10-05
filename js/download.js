window.onload = function changeDownloadLinks() {

    var releaseDate = document.querySelector("#official_date")
    var windowsLink = document.querySelector("#windows-official")
    var macLink = document.querySelector("#macos-official")
    var linuxLink = document.querySelector("#linux-official")

    fetch("https://api.github.com/repos/tahoma2d/tahoma2d/releases/latest")
        .then(response => response.json())
        .then(data => {
            releaseDate.innerHTML = data.tag_name + " - " + data.created_at;
            releaseDate.href = data.html_url

            windowsLink.href = data.assets[5].browser_download_url
            macLink.href = data.assets[4].browser_download_url
            linuxLink.href = data.assets[3].browser_download_url
        })


    var betaReleaseDate = document.querySelector("#beta_date")
    var windowsBetaLink = document.querySelector("#windows_beta_link")
    var macBetaLink = document.querySelector("#mac_beta_link")
    var linuxBetaLink = document.querySelector("#linux_beta_link")

    fetch("https://api.github.com/repos/tahoma2d/tahoma2d/releases/tags/v1.5-beta.1")
        .then(response => response.json())
        .then(data => {
            betaReleaseDate.innerHTML = data.tag_name + " - " + data.created_at;
            betaReleaseDate.href = data.html_url

            windowsBetaLink.href = data.assets[5].browser_download_url
            macBetaLink.href = data.assets[4].browser_download_url
            linuxBetaLink.href = data.assets[3].browser_download_url
        })

    var nightlyReleaseDate = document.querySelector("#nightly_date")
    var nightlyWindowsLink = document.querySelector("#windows-nightly")
    var nightlyMacLink = document.querySelector("#macos-nightly")
    var nightlyLinuxLink = document.querySelector("#linux-nightly")

    fetch("https://api.github.com/repos/tahoma2d/tahoma2d/releases/tags/nightly")
        .then(response => response.json())
        .then(data => {
            nightlyReleaseDate.innerHTML = data.created_at;
            nightlyReleaseDate.href = data.html_url

            nightlyWindowsLink.href = data.assets[5].browser_download_url
            nightlyMacLink.href = data.assets[4].browser_download_url
            nightlyLinuxLink.href = data.assets[3].browser_download_url
        })

    var pluginReleaseDate = document.querySelector("#plugins_date")
    var pluginWindowsLink = document.querySelector("#windows-plugin")
    var pluginMacLink = document.querySelector("#macos-plugin")
    var pluginLinuxLink = document.querySelector("#linux-plugin")

    fetch("https://api.github.com/repos/tahoma2d/tahoma2d_plugins/releases/latest")
        .then(response => response.json())
        .then(data => {
            pluginReleaseDate.innerHTML = data.tag_name + " - " + data.published_at;
            pluginReleaseDate.href = data.html_url

            pluginWindowsLink.href = data.assets[2].browser_download_url
            pluginMacLink.href = data.assets[1].browser_download_url
            pluginLinuxLink.href = data.assets[0].browser_download_url
        })

}