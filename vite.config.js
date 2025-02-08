import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  assetsInclude: ['**/*.jpg','**/*.JPG', '**/*.jpeg', '**/*.png', '**/*.gif', '**/*.svg', '**/*.webp'],
  build: {
    outDir: 'build/client',
    emptyOutDir: true, // also necessary
  }
});
