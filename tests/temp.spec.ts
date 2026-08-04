import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.com/');
  await page.getByRole('searchbox', { name: 'Search Amazon' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon' }).fill('laptop');
  await page.getByRole('searchbox', { name: 'Search Amazon' }).press('Enter');
  await page.getByRole('link', { name: 'Samsung 14" Galaxy Chromebook' }).click();
  await page.getByRole('button', { name: 'Add to cart', exact: true }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon' }).click();
});