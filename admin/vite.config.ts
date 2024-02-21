import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  if (command == "serve") {
    // 'server' 开发环境 TODO
  } else {
    // 'build' 生产环境 TODO
  }

  return {
    base: "/",
    envPrefix: "YQ",
    plugins: [vue()],
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src"),
      },
    },
    server: {
      host: "127.0.0.1",
      port: 8080,
      strictPort: true,
      open: true,
      proxy: {
        "/api": {
          target: "http://localhost:1112",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
    build: {
      outDir: "dist",
      assetsDir: "assets",
      cssCodeSplit: true,
      emptyOutDir: true,
    },
  };
});
