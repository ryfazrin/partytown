import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  reporter: 'html',
  use: {
    viewport: {
      width: 520,
      height: 600,
    },
    contextOptions: {
      recordVideo: {
        dir: 'tests/videos/',
      },
    },
  },
  webServer: {
    command: 'npm run serve.test',
    port: 4001,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
  // timeout: 60000,
  testMatch: 'tests/integrations/**/**.standard.spec.ts',
  // testMatch: 'tests/integrations/gtm/gtm.spec.ts' // error in firefox
  // testMatch: 'tests/platform/event/event.spec.ts' // error in webkit
};

export default config;
