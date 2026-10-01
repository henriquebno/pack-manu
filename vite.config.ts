import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, Plugin } from 'vite';

// Plugin to serve high-performance Cache-Control headers for assets and immutable resources
function cacheControlPlugin(): Plugin {
  return {
    name: 'cache-control-headers',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url || '';
        if (url === '/' || url.startsWith('/?') || url.includes('.html')) {
          res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
        } else if (
          url.match(/\.(jpg|jpeg|png|webp|avif|svg|ico|woff2?|ttf|eot|js|css)(\?.*)?$/i) ||
          url.startsWith('/assets/') ||
          url.startsWith('/images/')
        ) {
          res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
        }
        next();
      });
    },
    configurePreviewServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url || '';
        if (url === '/' || url.startsWith('/?') || url.includes('.html')) {
          res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
        } else if (
          url.match(/\.(jpg|jpeg|png|webp|avif|svg|ico|woff2?|ttf|eot|js|css)(\?.*)?$/i) ||
          url.startsWith('/assets/') ||
          url.startsWith('/images/')
        ) {
          res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
        }
        next();
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  const isProd = mode === 'production' || process.env.NODE_ENV === 'production';
  return {
    plugins: [react(), tailwindcss(), cacheControlPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    define: {
      'process.env.NODE_ENV': JSON.stringify(isProd ? 'production' : 'development'),
    },
    esbuild: {
      drop: isProd ? ['console', 'debugger'] : [],
      legalComments: 'none',
      target: 'es2020',
    },
    build: {
      target: 'es2020',
      minify: 'esbuild',
      cssMinify: true,
      reportCompressedSize: false,
      chunkSizeWarningLimit: 800,
    },
    optimizeDeps: {
      include: ['react', 'react-dom', 'lucide-react'],
    },
    server: {
      warmup: {
        clientFiles: ['./src/main.tsx', './src/App.tsx', './src/components/HeroSection.tsx'],
      },
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
