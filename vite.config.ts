import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
    plugins: [
        react({
            include: /\.(jsx|tsx)$/,
            babel: {
                plugins: [
                    [
                        'styled-components',
                        {
                            displayName: true,
                            ssr: true,
                        },
                    ],
                ],
                babelrc: false,
                configFile: false,
            },
        }),
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
