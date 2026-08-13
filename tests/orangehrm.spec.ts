import { test, expect, Page } from '@playwright/test';

async function selectAmazonMenu(page: Page, category: string,item: string) {
  await page.getByRole('button', {name: 'Open All Categories Menu'}).click();
  await page.getByRole('heading', {name: category }).click();
  await page.getByRole('button', {name: item }).click();
}

test('Amazon Menu', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await selectAmazonMenu(page,'Digital Content and Devices','Echo & Alexa');
});