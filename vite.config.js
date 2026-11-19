import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Custom domains use '/', while the github.io project URL needs '/entremateycafe/'.
  base: process.env.GITHUB_PAGES_BASE_PATH
    ? `${process.env.GITHUB_PAGES_BASE_PATH.replace(/\/$/, '')}/`
    : '/',
  plugins: [vue(), tailwindcss()],
})
