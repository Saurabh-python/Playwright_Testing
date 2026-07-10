import { test, expect } from '@playwright/test';
import { TestData } from '../data/testDataheroku';

const DDTest = TestData.Makeapptmt();

for (const data of DDTest) {
test.describe('HerokuAPP Flow', {tag:'@smoke', annotation: { type: "Story", description: "User can make an appointment" } }, () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("https://katalon-demo-cura.herokuapp.com/");
        await page.getByRole('link', { name: 'Make Appointment' }).click();
        await page.getByLabel('Username').fill('John Doe');
        await page.getByLabel('Password').fill('ThisIsNotAPassword');
        await page.getByRole('button', { name: 'Login' }).press('Enter');
    });

    test(`${data.testid}:Make appointment`, async ({ page }) => {
        await page.getByLabel('Facility').selectOption(data.dd);
        await page.getByText(data.facility).click();
        await page.getByRole('textbox', { name: 'Visit Date (Required)' }).fill(data.date);
        await page.getByRole('textbox', { name: 'Visit Date (Required)' }).press('Enter');
        await page.getByRole('textbox', { name: 'Comment' }).fill(data.comment);
        await page.getByRole('button', { name: 'Book Appointment' }).click();
        await expect(page.getByRole('heading', { name: 'Appointment Confirmation' })).toBeVisible();
        await expect(page.getByRole('link', { name: 'Go to Homepage' })).toBeVisible();
    });
});
}