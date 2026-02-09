import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Increase the warning limit to 1000kb (1MB) so it doesn't complain as easily
    chunkSizeWarningLimit: 1000, 
  }
})