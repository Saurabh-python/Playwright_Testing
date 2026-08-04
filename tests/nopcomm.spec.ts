import { test, expect } from '@playwright/test';

test('Launch Practice Automation', async ({ page }) => {
    console.log('Test started');
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    console.log('Page title: '+ await page.title());
    await page.getByRole('textbox', { name: "Username" }).fill('student ');
    await page.getByRole('textbox', { name: "Password" }).fill('Password123');
    await page.getByRole('button', { name: 'Submit' }).click();
})