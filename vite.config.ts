import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          [
            "babel-plugin-styled-components",
            {
              ssr: true,
              displayName: true,
              preprocess: false,
            },
          ],
        ],
      },
    }),
    svgr({
      include: "**/*.svg",
      svgrOptions: {
        icon: true,
        exportType: "named",
        svgProps: {
          width: "100%",
          height: "100%",
        },
      },
    }),
  ],
  resolve: {
    alias: {
      assets: "/src/assets",
      hooks: "/src/hooks",
      components: "/src/components",
      shared: "/src/shared",
      styles: "/src/styles",
      services: "/src/services",
      pages: "/src/pages",
      api: "/src/api",
    },
  },
  build: {
    outDir: "dist",
  },
});
