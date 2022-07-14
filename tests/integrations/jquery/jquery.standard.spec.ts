import { test, expect } from '@playwright/test';

test('JQuery', async ({ page }) => {
  await page.goto('/tests/integrations/jquery/standard.html');
  await page.waitForSelector('.completed');
  const element = await page.waitForSelector('#errors');

  expect(await element.textContent()).toEqual('NO ERROR');
});
