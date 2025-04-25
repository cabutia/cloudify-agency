// @ts-check
import { defineConfig } from "astro/config";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

import tailwindcss from "@tailwindcss/vite";

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
    vite: {
        resolve: {
            alias: {
                "@": resolve(__dirname, "src"),
            },
        },

        plugins: [tailwindcss()],
    },
});
