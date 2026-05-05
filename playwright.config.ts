import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './app/e2e',
  webServer: {
    command: 'node .output/server/index.mjs',
    url: 'http://localhost:3000',
  },
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 4 : undefined,
  //reuseExistingServer: !process.env.CI,
  
})