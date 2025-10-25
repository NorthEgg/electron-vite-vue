// 初始化项目
import { execSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const cacheDir = path.resolve(__dirname, "../../", "cache");

// 设置环境变量（仅对当前 Node 进程及其子进程有效）
process.env.electron_config_cache = path.resolve(cacheDir, "electron"); // electron 二进制文件缓存目录
process.env.electron_builder_cache = path.resolve(cacheDir, "electron-builder"); // electron-builder 缓存目录

// 执行 npm run build
execSync(
  "vue-tsc --noEmit && vite build && electron-builder --config ./electron-builder.config.ts",
  {
    stdio: "inherit",
  }
);
