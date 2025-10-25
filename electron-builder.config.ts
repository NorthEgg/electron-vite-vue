// https://www.electron.build/configuration
import type { Configuration } from "electron-builder";

const CONFIG: Configuration = {
  appId: "MyUtils",
  asar: true,
  directories: {
    output: "release/${version}",
  },
  electronLanguages: ["zh-CN"],

  files: ["dist", "dist-electron"],
  icon: "public/favicon.ico",
  electronDownload: {
    cache: "cache/electron",
  },
  win: {
    target: [
      {
        target: "portable",
        arch: ["x64"],
      },
    ],
    artifactName: "${productName}-Portable-${version}.${ext}",
    icon: "public/favicon.ico",
  },
};

export default CONFIG;
