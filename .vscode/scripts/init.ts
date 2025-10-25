// 初始化项目
import { execSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const cacheDir = path.resolve(__dirname, "../../", "cache", "electron");

// 设置环境变量（仅对当前 Node 进程及其子进程有效）
process.env.electron_config_cache = cacheDir;

// 执行 npm run build
execSync("pnpm i", {
  stdio: "inherit",
});
