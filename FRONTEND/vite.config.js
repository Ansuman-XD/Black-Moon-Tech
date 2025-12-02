import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss(), react()],

  build: {
    target: "es2017",
    minify: "esbuild",
    sourcemap: false,
    chunkSizeWarningLimit: 600,

    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          router: ["react-router-dom"],
        },
      },
    },

    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },

  server: {
    port: 5173,
    open: true,
  },

  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
  },
});
