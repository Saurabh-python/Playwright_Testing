import {test, expect} from '@playwright/test';

test('Launch Amazon', async({page}) =>{
    console.log('Test started');
    await page.goto('https://www.amazon.in/');
    await page.getByRole('searchbox', {name: 'Search Amazon.in'}).fill('dell laptop');
    await page.locator('#nav-search-submit-text').press('Enter');
    await page.waitForTimeout(3000);
    const products = page.locator('h2');

    const count = await products.count();
    console.log('Total products found: ' + count);

    for (let i = 0; i < count; i++) {
        const ariaLabel = await products.nth(i).getAttribute('aria-label');
        console.log(ariaLabel);
}

})