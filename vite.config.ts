import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import UnoCSS from 'unocss/vite';

import packageJson from './package.json';

export default defineConfig({
    base: `/${packageJson.name}/`,
    build: {
        outDir: `./${packageJson.name}`,
    },
    plugins: [vue(), vueDevTools(), UnoCSS()],
    server: {
        port: 8080,
        open: true,
        proxy: {
            '/dev': {
                target: 'http://127.0.0.1:7070',
                changeOrigin: true,
                rewrite: path => path.replace(/^\/dev/, ''),
            },
        },
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
});
