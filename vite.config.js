import { resolve } from 'path' 
import { defineConfig } from 'vite'
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
    plugins: [
        viteCompression({
            filter: /\.(js|mjs|json|css)$/i
        }),
    ],
})