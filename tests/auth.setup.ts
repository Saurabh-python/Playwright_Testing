import {test as setup, expect, test} from '@playwright/test';
import path from 'path';


const authFile = path.join(__dirname, '../playwright/.auth/user.json');

setup('Add product', async({page})=>{
    await page.goto('https://www.saucedemo.com');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('[placeholder="Password"]').fill('secret_sauce');
    await page.locator('#login-button').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
    await page.context().storageState({path: authFile})
});
