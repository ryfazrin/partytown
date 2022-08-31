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
  testMatch: [
    'tests/integrations/adobe-launch/adobe-launch.spec.ts',
    'tests/integrations/facebook-pixel/facebook-pixel.spec.ts',
    'tests/integrations/gtm/gtm.spec.ts',
    'tests/integrations/jquery/jquery.spec.ts',
    'tests/integrations/main-window-accessors/main-window-accessors.spec.ts',
    'tests/integrations/mermaid/mermaid.spec.ts',
    'tests/integrations/twitter/twitter.spec.ts'
  ]
  // timeout: 60000,
  // testMatch: 'tests/integrations/**/**.standard.spec.ts',
  // testMatch: 'tests/integrations/gtm/gtm.spec.ts' // error in firefox
  // testMatch: 'tests/platform/event/event.spec.ts' // error in webkit
};

export default config;
