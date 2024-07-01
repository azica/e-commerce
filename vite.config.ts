import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
    plugins: [
        svgr({
            include: "**/*.svg",
            svgrOptions: {
                icon: true,
                exportType: "named",
                svgProps: {
                    width: "100%",
                    height: "100%"
                }
            },
        }),
        react({
            jsxRuntime: 'automatic',
            jsxImportSource: "@emotion/react",
            babel: {
                plugins: ["@emotion/babel-plugin"],
            },
        }),
    ],
    resolve: {
        alias: {
            assets: '/src/assets',
            hooks: '/src/hooks',
            components: '/src/components',
            shared: '/src/shared',
            styles: '/src/styles',
            services: '/src/services',
            pages: '/src/pages',
            api: '/src/api',
        },
    },
    build: {
        outDir: 'dist'
    },
});
