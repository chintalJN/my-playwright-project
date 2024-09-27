import { test, expect } from '@playwright/test';

test('get started', async ({ page }) => {
  await page.goto('https://app.jobnimbus.com');

  // // Click the get started link.
  // await page.getByRole('link', { name: 'Get started' }).click();

  // // Expects page to have a heading with the name of Installation.
  // await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
