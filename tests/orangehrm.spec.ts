import { test, expect, Page } from '@playwright/test';

async function selectAmazonMenu(page: Page, category: string,item: string) {
  await page.getByRole('button', {name: 'Open All Categories Menu'}).click();
  await page.getByRole('heading', {name: category }).click();
  await page.getByRole('button', {name: item }).click();
}

test.skip('Amazon Menu', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await selectAmazonMenu(page,'Digital Content and Devices','Echo & Alexa');
});

test('Vivli Demo TEST',{tag : '@smoke',annotation: {type :'Writing plays for Vivli'}}, async({page})=>{
  await page.goto('https://vivli.org/');
  await page.getByRole('link', {name: 'SEARCH FOR STUDIES'}).click();
  await page.getByText('Close', {exact: true}).click();
  await page.locator('[data-test-id="search-box"]').first().fill('diabetes');
  await page.getByText('Studies', {exact: true}).click();
  await page.locator('#react-select-8-placeholder').click();
  await page.pause();
});
