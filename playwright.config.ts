import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './app/e2e',
  use: {
    baseURL: 'http://localhost:3000',
  },
  retries: process.env.CI ? 2 : 0,
  
})