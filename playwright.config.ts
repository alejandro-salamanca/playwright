import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 60 * 1000,
  expect: {
    timeout: 20000
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['html'], ['list']],
  use: {
    actionTimeout: 0,
    trace: 'on-first-retry',
  },

  projects: [
    {
       name: 'Google Chrome',
       use: { channel: 'chrome',
       ignoreHTTPSErrors: true,
       launchOptions: {
          args: ['--disable-blink-features=AutomationControlled'],
          slowMo: 0,
        }
      },
    },
  ],
});
