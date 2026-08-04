import { test, expect } from '@playwright/test';


test('OrangeHRM Login', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page).toHaveTitle('OrangeHRM')
    console.log("Page title : " + await page.title());
    const username = await page.getByRole('textbox', { name: 'Username' });
    await expect(username).toBeEditable();
    await username.fill('Admin');
    const password = await page.getByRole('textbox', { name: 'Password' });
    await expect(password).toBeEditable();
    const login_btn = await page.getByRole('button', { name: "Login" });
    await login_btn.click();
    const p_tags = await page.locator('//p').allTextContents()
    console.log(`${p_tags}`)
    await page.waitForLoadState('networkidle');
    await page.screenshot({ path: 'manual screenshots/ screenshot_' + new Date().getTime() + '.png', fullPage: true });


})
