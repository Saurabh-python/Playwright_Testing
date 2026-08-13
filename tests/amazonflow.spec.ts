import {test} from '@playwright/test';

test('Open URL and Use storageState', async({page})=>{
    await page.goto('https://www.saucedemo.com/inventory.html');
    await page.locator('#add-to-cart-sauce-labs-bike-light').click();
    await console.log('product added');
});

// test.skip('Add product', async({page})=>{
//     await page.locator('#add-to-cart-sauce-labs-bike-light').click();
//     await console.log('product added');
// })
