import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/dada/', // ← GitHub Pages 프로젝트 경로 (repo 이름)
})
