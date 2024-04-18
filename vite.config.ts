import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), svgr()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return 'vendor/' + id.toString().split("node_modules/")[1].split("/")[0].replace("@", "");
          } else if (id.includes("assets/icons")) {
            return 'icons/' + id.toString().split("assets/icons/")[1].split("/")[0].replace(".svg", "");
          }
        }
      }
    }
  }
})
