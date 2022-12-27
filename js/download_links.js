const latestLink = "https://api.github.com/repos/tahoma2d/tahoma2d/releases/latest";
const betaLink = "https://api.github.com/repos/tahoma2d/tahoma2d/releases/tags/v1.3-beta.1";
const nightlyLink = "https://api.github.com/repos/tahoma2d/tahoma2d/releases/tags/nightly";
const pluginLink = "https://api.github.com/repos/tahoma2d/tahoma2d_plugins/releases/latest";

const OSNames = {
  Windows: "windows",
  macOS: "macos",
  Linux: "linux",
};

const fileSuffix = {
  Windows: "win.zip",
  macOSZip: "osx.zip",
  macOSDMG: "osx.dmg",
  Linux: "linux.zip",
  LinuxTar: "linux.tar.gz",
  LinuxClang: "linux-clang.tar.gz",
};

// ==================================================
function getCorrectLinkBasedOnOS(assetsData, theOS) {
  for (let eachAsset of assetsData) {
    const theLink = eachAsset.browser_download_url;

    switch (theOS) {
      case OSNames.Windows:
        if (theLink.endsWith(fileSuffix.Windows)) {
          return theLink;
        }
        break;
      case OSNames.macOS:
        if (theLink.endsWith(fileSuffix.macOSZip) || theLink.endsWith(fileSuffix.macOSDMG)) {
          return theLink;
        }
        break;
      case OSNames.Linux:
        if (theLink.endsWith(fileSuffix.Linux) || theLink.endsWith(fileSuffix.LinuxTar) || theLink.endsWith(fileSuffix.LinuxClang)) {
          return theLink;
        }
        break;
    }
  }
}

// ==================================================
window.onload = function changeDownloadLinks() {
  // Latest version download button elements
  const latestWindowsElement = document.querySelector("#windows-official");
  const latestMacOSElement = document.querySelector("#macos-official");
  const latestLinuxElement = document.querySelector("#linux-official");
  const latestReleaseDateElement = document.querySelector("#official_date");

  // Beta version download button elements
  const betaWindowsElement = document.querySelector("#windows_beta_link");
  const betaMacOSElement = document.querySelector("#mac_beta_link");
  const betaLinuxElement = document.querySelector("#linux_beta_link");
  const betaReleaseDateElement = document.querySelector("#beta_date");

  // Nightly version download button elements
  const nightlyWindowsElement = document.querySelector("#windows-nightly");
  const nightlyMacOSElement = document.querySelector("#macos-nightly");
  const nightlyLinuxElement = document.querySelector("#linux-nightly");
  const nightlyReleaseDateElement = document.querySelector("#nightly_date");

  // Plugin download button elements
  const pluginWindowsElement = document.querySelector("#windows-plugin");
  const pluginMacOSElement = document.querySelector("#macos-plugin");
  const pluginLinuxElement = document.querySelector("#linux-plugin");
  const pluginReleaseDateElement = document.querySelector("#plugins_date");

  // ==================================================
  // Get download links for the latest version
  fetch(latestLink)
    .then((response) => response.json())
    .then((data) => {
      // We combine the tag name and creation date to get something like "v1.3 - 2022".
      latestReleaseDateElement.innerHTML = data.tag_name + " - " + data.created_at;
      latestReleaseDateElement.href = data.html_url;

      latestWindowsElement.href = getCorrectLinkBasedOnOS(data.assets, OSNames.Windows);
      latestMacOSElement.href = getCorrectLinkBasedOnOS(data.assets, OSNames.macOS);
      latestLinuxElement.href = getCorrectLinkBasedOnOS(data.assets, OSNames.Linux);
    });
  // ==================================================

  // ==================================================
  // Get download links for the beta version
  fetch(betaLink)
    .then((response) => response.json())
    .then((data) => {
      // We combine the tag name and creation date to get something like "v1.3 - 2022".
      betaReleaseDateElement.innerHTML = data.tag_name + " - " + data.created_at;
      betaReleaseDateElement.href = data.html_url;

      betaWindowsElement.href = getCorrectLinkBasedOnOS(data.assets, OSNames.Windows);
      betaMacOSElement.href = getCorrectLinkBasedOnOS(data.assets, OSNames.macOS);
      betaLinuxElement.href = getCorrectLinkBasedOnOS(data.assets, OSNames.Linux);
    });
  // ==================================================

  // ==================================================
  // Get download links for the nightly version
  fetch(nightlyLink)
    .then((response) => response.json())
    .then((data) => {
      nightlyReleaseDateElement.innerHTML = data.created_at;
      nightlyReleaseDateElement.href = data.html_url;

      nightlyWindowsElement.href = getCorrectLinkBasedOnOS(data.assets, OSNames.Windows);
      nightlyMacOSElement.href = getCorrectLinkBasedOnOS(data.assets, OSNames.macOS);
      nightlyLinuxElement.href = getCorrectLinkBasedOnOS(data.assets, OSNames.Linux);
    });
  // ==================================================

  // ==================================================
  // Get download links for plugins
  fetch(pluginLink)
    .then((response) => response.json())
    .then((data) => {
      // We combine the tag name and creation date to get something like "v1.3 - 2022".
      pluginReleaseDateElement.innerHTML = data.tag_name + " - " + data.published_at;
      pluginReleaseDateElement.href = data.html_url;

      pluginWindowsElement.href = getCorrectLinkBasedOnOS(data.assets, OSNames.Windows);
      pluginMacOSElement.href = getCorrectLinkBasedOnOS(data.assets, OSNames.macOS);
      pluginLinuxElement.href = getCorrectLinkBasedOnOS(data.assets, OSNames.Linux);
    });
};
