import { resolve } from 'path' 
import { defineConfig } from 'vite'
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
    plugins: [
        viteCompression({
            deleteOriginFile: false,
            filter: /\.(js|mjs|json|css)$/i
        }),
    ],
    build: {
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                kahkow: resolve(__dirname, "kahkow.html"),
                cancercare: resolve(__dirname, "cancercare.html"),
                alphaexpress: resolve(__dirname, "alpha-express.html"),
            }
        }
    }
})