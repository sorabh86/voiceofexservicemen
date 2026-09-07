// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    integrations: [],
    outDir: "../",
    base: "./",
    build: {
        format: 'file',
        assetsPrefix: './'
    },
    vite: {
        plugins: [/* tailwindcss() */],
        build: {emptyOutDir: false}
    },
});