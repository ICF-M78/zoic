import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";

export default defineConfig({
  base: "/zoic/",
  build: {
    outDir: "./zoic",
  },
  plugins: [vue(), vueDevTools()],
  server: {
    port: 7070,
    open: true,
    proxy: {
      "/dev": {
        target: "http://your-api-server",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/dev/, ""),
      },
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
