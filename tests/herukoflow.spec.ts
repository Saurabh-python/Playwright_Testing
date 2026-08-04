import { test, expect } from '@playwright/test';
import { TestData } from '../data/testDataheroku';
import { log } from '../logs/logger';

const DDTest = TestData.Makeapptmt();

for (const data of DDTest) {
test.describe('HerokuAPP Flow', {tag:'@smoke', annotation: { type: "Story", description: "User can make an appointment" } }, () => {
    test.beforeEach(async ({ page }) => {
        await log("log", "Starting test case: " + data.testid);
        await page.goto("https://katalon-demo-cura.herokuapp.com/");
        await page.getByRole('link', { name: 'Make Appointment' }).click();
        await page.getByLabel('Username').fill('John Doe');
        await page.getByLabel('Password').fill('ThisIsNotAPassword');
        await page.getByRole('button', { name: 'Login' }).press('Enter');
        await log("info", "User logged in successfully for test case: " + data.testid);
    });

    test(`${data.testid}:Make appointment`, async ({ page }) => {
        const cookies  = await page.context().cookies();
        console.log("Cookies for test case: " + data.testid + " are: ", cookies);
        await log("log", "Executing test case: " + data.testid);
        await page.getByLabel('Facility').selectOption(data.dd);
        await log("info", "Selected facility: " + data.dd + " for test case: " + data.testid);
        await page.getByText(data.facility).click();
        await page.getByRole('textbox', { name: 'Visit Date (Required)' }).fill(data.date);
        await page.getByRole('textbox', { name: 'Visit Date (Required)' }).press('Enter');
        await page.getByRole('textbox', { name: 'Comment' }).fill(data.comment);
        await log("info", "Filled appointment details for test case: " + data.testid);
        await page.getByRole('button', { name: 'Book Appointment' }).click();
        await expect(page.getByRole('heading', { name: 'Appointment Confirmation' })).toBeVisible();
        await expect(page.getByRole('link', { name: 'Go to Homepage' })).toBeVisible();
        await log("info", "Appointment booked successfully for test case: " + data.testid + " with details: Facility - " + data.dd + ", Date - " + data.date + ", Comment - " + data.comment);

    });
});
}