import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from "url";

export default defineConfig(({ mode }) => {
  return {
    plugins: [vue()],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: 'src/setupTests.ts',
      coverage: {
        reporter: ['text', 'html', 'lcov'],
        exclude: ['node_modules/', 'src/setupTests.ts']
      }
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
      mainFields: ['browser', 'module', 'main'], // Add this line
    },
    base: '/onboarding',
    esbuild: {
      drop: mode === 'production' ? ['console', 'debugger'] : []
    }
  }
})
