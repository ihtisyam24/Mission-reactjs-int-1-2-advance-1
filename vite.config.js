import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  server: {
    proxy: {
      '/api/cards': {
        target: 'https://6860db468e74864084442b2a.mockapi.io',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api\/cards/, '/api/v1/cards'),
      },
    },
  },
});
