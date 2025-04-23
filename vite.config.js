import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Papiro-Inteligente/', // Isso já está correto
  build: {
    outDir: 'dist', // Garantir que o diretório de build esteja correto
    emptyOutDir: true, // Limpa o diretório antes de construir
  },
});
