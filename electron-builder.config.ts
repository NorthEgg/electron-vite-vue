// https://www.electron.build/configuration
import type { Configuration } from "electron-builder";

const CONFIG: Configuration = {
  appId: "MyUtils",
  asar: true,
  productName: "MyUtils",
  directories: {
    output: "release/${version}",
  },
  electronLanguages: ["zh-CN"],

  files: ["dist", "dist-electron"],
  icon: "public/icon_black.png",
  win: {
    target: [
      {
        target: "portable",
        arch: ["x64"],
      },
    ],
    artifactName: "${productName}-Portable-${version}.${ext}",
    icon: "public/icon_black.png",
  },
};

export default CONFIG;