const latestLink = "https://api.github.com/repos/tahoma2d/tahoma2d/releases/latest";
const betaLink = "https://api.github.com/repos/tahoma2d/tahoma2d/releases/tags/v1.6-beta.1";
const nightlyLink = "https://api.github.com/repos/tahoma2d/tahoma2d/releases/tags/nightly";
const pluginLink = "https://api.github.com/repos/tahoma2d/tahoma2d_plugins/releases/latest";

const OSNames = {
  Windows: "windows",
  macOS: "macos",
  Linux: "linux",
};

const fileSuffix = {
  WindowsPortable: "portable-win.zip",
  WindowsInstall: "install-win.exe",

  macOSDMG: "portable-osx.dmg",
  macOSPkg: "install-osx.pkg",

  macOSIntelDMG: "portable-osx-intel.dmg",
  macOSIntelPkg: "install-osx-intel.pkg",

  macOSSiliconDMG: "portable-osx-silicon.dmg",
  macOSSiliconPkg: "install-osx-silicon.pkg",

  LinuxGcc: "linux-gcc.tar.gz",
  LinuxClang: "linux-clang.tar.gz",

  WindowsPlugin: "plugins_win.zip",
  macOSPlugin: "plugins_osx.zip",
  LinuxPlugin: "plugins_linux.zip",
};

// ==================================================
function getCorrectLinkBasedOnOS(assetsData, fileEnding) {
  for (let eachAsset of assetsData) {
    const theLink = eachAsset.browser_download_url;

    if (theLink.endsWith(fileEnding)) {
      return theLink;
    }
  }
}

// ==================================================
window.onload = function changeDownloadLinks() {
  // Latest version download button elements
  const latestWindowsPortableElement = document.querySelector("#windows-official-portable");
  const latestWindowsInstallElement = document.querySelector("#windows-official-install");
  const latestMacOSIntelDMGElement = document.querySelector("#macos-official-inteldmg");
  const latestMacOSIntelPkgElement = document.querySelector("#macos-official-intelpkg");
  const latestMacOSSiliconDMGElement = document.querySelector("#macos-official-silicondmg");
  const latestMacOSSiliconPkgElement = document.querySelector("#macos-official-siliconpkg");
  const latestLinuxElement = document.querySelector("#linux-official");
  const latestReleaseDateElement = document.querySelector("#official_date");

  // Beta version download button elements
  const betaWindowsPortableElement = document.querySelector("#windows-beta-portable");
  const betaWindowsInstallElement = document.querySelector("#windows-beta-install");
  const betaMacOSIntelDMGElement = document.querySelector("#mac-beta-inteldmg");
  const betaMacOSIntelPkgElement = document.querySelector("#mac-beta-intelpkg");
  const betaMacOSSiliconDMGElement = document.querySelector("#mac-beta-silicondmg");
  const betaMacOSSiliconPkgElement = document.querySelector("#mac-beta-siliconpkg");
  const betaLinuxElement = document.querySelector("#linux-beta");
  const betaReleaseDateElement = document.querySelector("#beta_date");

  // Nightly version download button elements
  const nightlyWindowsPortableElement = document.querySelector("#windows-nightly-portable");
  const nightlyWindowsInstallElement = document.querySelector("#windows-nightly-install");
  const nightlyMacOSIntelDMGElement = document.querySelector("#macos-nightly-inteldmg");
  const nightlyMacOSIntelPkgElement = document.querySelector("#macos-nightly-intelpkg");
  const nightlyMacOSSiliconDMGElement = document.querySelector("#macos-nightly-silicondmg");
  const nightlyMacOSSiliconPkgElement = document.querySelector("#macos-nightly-siliconpkg");
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

      latestWindowsPortableElement.href = getCorrectLinkBasedOnOS(data.assets, fileSuffix.WindowsPortable);
      latestWindowsInstallElement.href = getCorrectLinkBasedOnOS(data.assets, fileSuffix.WindowsInstall);
//      latestMacOSIntelDMGElement.href = getCorrectLinkBasedOnOS(data.assets, fileSuffix.macOSDMG);
//      latestMacOSIntelPkgElement.href = getCorrectLinkBasedOnOS(data.assets, fileSuffix.macOSPkg);
      latestMacOSIntelDMGElement.href = getCorrectLinkBasedOnOS(data.assets, fileSuffix.macOSIntelDMG);
      latestMacOSIntelPkgElement.href = getCorrectLinkBasedOnOS(data.assets, fileSuffix.macOSIntelPkg);
      latestMacOSSiliconDMGElement.href = getCorrectLinkBasedOnOS(data.assets, fileSuffix.macOSSiliconDMG);
      latestMacOSSiliconPkgElement.href = getCorrectLinkBasedOnOS(data.assets, fileSuffix.macOSSiliconPkg);
      latestLinuxElement.href = getCorrectLinkBasedOnOS(data.assets, fileSuffix.LinuxGcc);
    });
  // ==================================================

  // ==================================================
  // Get download links for the nightly version
  fetch(nightlyLink)
    .then((response) => response.json())
    .then((data) => {
      nightlyReleaseDateElement.innerHTML = data.created_at;
      nightlyReleaseDateElement.href = data.html_url;

      nightlyWindowsPortableElement.href = getCorrectLinkBasedOnOS(data.assets, fileSuffix.WindowsPortable);
      nightlyWindowsInstallElement.href = getCorrectLinkBasedOnOS(data.assets, fileSuffix.WindowsInstall);
      nightlyMacOSIntelDMGElement.href = getCorrectLinkBasedOnOS(data.assets, fileSuffix.macOSIntelDMG);
      nightlyMacOSIntelPkgElement.href = getCorrectLinkBasedOnOS(data.assets, fileSuffix.macOSIntelPkg);
      nightlyMacOSSiliconDMGElement.href = getCorrectLinkBasedOnOS(data.assets, fileSuffix.macOSSiliconDMG);
      nightlyMacOSSiliconPkgElement.href = getCorrectLinkBasedOnOS(data.assets, fileSuffix.macOSSiliconPkg);
      nightlyLinuxElement.href = getCorrectLinkBasedOnOS(data.assets, fileSuffix.LinuxGcc);
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

      pluginWindowsElement.href = getCorrectLinkBasedOnOS(data.assets, fileSuffix.WindowsPlugin);
      pluginMacOSElement.href = getCorrectLinkBasedOnOS(data.assets, fileSuffix.macOSPlugin);
      pluginLinuxElement.href = getCorrectLinkBasedOnOS(data.assets, fileSuffix.LinuxPlugin);
    });
  // ==================================================

  // ==================================================
  // Get download links for the beta version
  if (betaReleaseDateElement !== null) {
    fetch(betaLink)
      .then((response) => response.json())
      .then((data) => {
        // We combine the tag name and creation date to get something like "v1.3 - 2022".
        betaReleaseDateElement.innerHTML = data.tag_name + " - " + data.created_at;
        betaReleaseDateElement.href = data.html_url;
  
        betaWindowsPortableElement.href = getCorrectLinkBasedOnOS(data.assets, fileSuffix.WindowsPortable);
        betaWindowsInstallElement.href = getCorrectLinkBasedOnOS(data.assets, fileSuffix.WindowsInstall);
        betaMacOSIntelDMGElement.href = getCorrectLinkBasedOnOS(data.assets, fileSuffix.macOSIntelDMG);
        betaMacOSIntelPkgElement.href = getCorrectLinkBasedOnOS(data.assets, fileSuffix.macOSIntelPkg);
        betaMacOSSiliconDMGElement.href = getCorrectLinkBasedOnOS(data.assets, fileSuffix.macOSSiliconDMG);
        betaMacOSSiliconPkgElement.href = getCorrectLinkBasedOnOS(data.assets, fileSuffix.macOSSiliconPkg);
        betaLinuxElement.href = getCorrectLinkBasedOnOS(data.assets, fileSuffix.LinuxGcc);
    });
  }
  // ==================================================
};
