import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";

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
    plugins: [
      vue(),
      AutoImport({
        imports: [
          "vue",
          {
            "naive-ui": [
              "useDialog",
              "useMessage",
              "useNotification",
              "useLoadingBar",
            ],
          },
        ],
      }),
      Components({
        resolvers: [NaiveUiResolver()],
      }),
      createSvgIconsPlugin({
        // 指定缓存文件
        iconDirs: [resolve(process.cwd(), "src/assets/svg")],
        // 指定symbolId格式
        symbolId: "icon-[dir]-[name]",
      }),
    ],
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src"),
      },
    },
    server: {
      host: "127.0.0.1",
      port: 8081,
      strictPort: false,
      open: true,
      proxy: {
        "/dev-api": {
          target: "http://localhost:1112",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/dev-api/, ""),
        },
      },
    },
    build: {
      outDir: "dist",
      assetsDir: "assets",
      cssCodeSplit: true,
      emptyOutDir: true,
      rollupOptions: {
        external: ["@amap/amap-jsapi-loader"],
      },
    },
  };
});
