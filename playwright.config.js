// @ts-check
import { defineConfig, devices } from '@playwright/test';
import path from 'path';

const authFile = path.join(__dirname, 'playwright/.auth/user.json');

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  // globalTimeout: 60000,
  /* Maximum time one test can run for. */
  timeout: 30 * 1000,
  expect:{timeout : 5000},
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 1 : undefined,
  /* Opt out of parallel tests on CI. */
  // workers: 2 /*process.env.CI ? 1 : undefined*/,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    // storageState: ".auth/user.json",
    screenshot: "only-on-failure",
    video: 'retain-on-failure',
    // actionTimeout : 3000,
    // baseURL: 'http://localhost:3000',
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on',
    launchOptions: {
      // slowMo: 500,
      headless: true,
      args: [
        '--disable-dev-shm-usage',
        '--disable-gpu',
        '--no-sandbox',
        '--disable-software-rasterizer',
      ]
    }

  },

  /* Configure projects for major browsers */
  projects: [
    // { name: 'setup', 
    //   testMatch : /.*\.setup\.ts/ 
    // },
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] ,
                // storageState: 'playwright/.auth/user.json',
      },
      // dependencies: ['setup'],
      // fullyParallel: true   -- This will run test parallel in chromium only
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

