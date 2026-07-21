import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    site: 'https://jtyoung.me',
    integrations: [mdx(), sitemap()],
    vite: {
        plugins: [tailwindcss()],
        ssr: {
            noExternal: ['@tailwindcss/vite'],
        },
    },
});