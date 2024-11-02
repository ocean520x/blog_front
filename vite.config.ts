import { defineConfig } from 'vite'
import runViteAllPlugins from './viteConfig'
import path from 'path'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const isBuild = command === 'build'
  return {
    plugins: runViteAllPlugins(),
    base: isBuild ? '/' : '/',
    resolve: {
      alias: { '@': path.resolve(__dirname, 'src') }
    },
    build: {
      emptyOutDir: true,
      rollupOptions: {
        output: {
          manualChunks(id: string) {
            if (id.includes('node_modules')) {
              return id.split('/node_modules/').pop()?.split('/')[0]
            }
          }
        }
      }
    }
  }
})
