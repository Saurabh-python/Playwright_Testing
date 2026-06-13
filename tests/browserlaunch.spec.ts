import{test} from '@playwright/test';

test('launch saucedemo', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
    await page.pause() //This will open play inspector
    await page.locator('#user-name').fill('standard_user');
    await page.locator('[placeholder="Password"]').fill('secret_sauce');
    await page.locator('#login-button').click();
    
});











// test('enter username', async ({ page }) => {
//     await page.locator('#user-name').fill('standard_user');
// });

// test('enter password', async ({ page }) => {
//     await page.locator('[placeholder="Password"]').fill('secret_sauce');
// });

// test('login button pressed', async ({page}) =>{
//     await page.locator('#login-button').click();

// });
