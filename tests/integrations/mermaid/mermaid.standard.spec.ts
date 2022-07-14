import { test, expect } from '@playwright/test';

test('Mermaid', async ({ page }) => {
  await page.goto('/tests/integrations/mermaid/standard.html');
  const element = await page.waitForSelector('#errors');

  expect(await element.textContent()).toEqual('NO ERROR');
});
