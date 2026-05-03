import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './app/e2e',
  use: {
    baseURL: 'http://localhost:3000',
  },
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 4 : undefined,
  
})