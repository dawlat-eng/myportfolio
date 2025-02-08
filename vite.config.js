// vite.config.js
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    tailwindcss(),
    // reactRouter(),
    // tsconfigPaths(),
  ],
  assetsInclude: ['**/*.jpg','**/*.JPG', '**/*.jpeg', '**/*.png', '**/*.gif', '**/*.svg', '**/*.webp'],
});
