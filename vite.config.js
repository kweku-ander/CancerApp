import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import inject from '@rollup/plugin-inject' 

export default defineConfig({
  plugins: [react(), inject({
      Buffer: ['buffer', 'Buffer'], // Polyfill Buffer
    })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },  
  optimizeDeps: {
    include: ['buffer'], // Ensure buffer is pre-bundled
  },
  base: "./",
});
