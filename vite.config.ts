import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';

export default defineConfig({
  plugins: [react(), tsconfigPaths(), nodePolyfills()],
  resolve: {
    alias: { '@': path.resolve(__dirname, 'src') }
  },
  server: { port: 3000, open: true },
  build: { outDir: 'dist' }
});