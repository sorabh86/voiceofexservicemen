import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const basePath = '/voiceofexservicemen';

function redirectBasePath(server) {
  server.middlewares.use((request, response, next) => {
    const requestUrl = new URL(request.url ?? '/', 'http://localhost');

    if (requestUrl.pathname === basePath) {
      response.statusCode = 308;
      response.setHeader('Location', `${basePath}/${requestUrl.search}`);
      response.end();
      return;
    }

    next();
  });
}

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'redirect-base-path',
      configureServer: redirectBasePath,
      configurePreviewServer: redirectBasePath
    }
  ],
  base: `${basePath}/`,
  publicDir: 'public',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    assetsDir: 'assets'
  }
});
