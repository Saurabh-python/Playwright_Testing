import{test, expect} from '@playwright/test';

test('launch saucedemo', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
    await page.pause() //This will open play inspector
    /// Sauce Demo functionality moved to SauceLogin.spec.ts file for POM implementation
    
    
    


    
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
