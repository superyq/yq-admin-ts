import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
  const env = loadEnv(mode, process.cwd(), "");
  console.log(1, mode);

  if (command == "serve") {
    // 'server' 开发环境
    console.log(111);
  } else {
    // 'build' 生产环境
    console.log(123);
  }

  return {
    root: process.cwd(),
    base: "/",
    publicDir: "admin",
    mode: "production",
    define: {
      __VITE_TITLE__: JSON.stringify(env.VITE_TITLE),
    },
    plugins: [vue()],
  };
});
