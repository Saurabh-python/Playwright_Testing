// import {test, expect} from '@playwright/test';
// import chalk from 'chalk';

// test('Launch Amazon', async({page}) =>{
//     console.log(chalk.red('Test started'));
//     await page.goto('https://www.amazon.in/');
//     await page.getByRole('searchbox', {name: 'Search Amazon'}).fill('dell laptop');
//     await page.locator('#nav-search-submit-text').press('Enter');
//     await page.waitForTimeout(3000);
//     const products = page.locator('h2');

//     const count = await products.count();
//     console.log(chalk.green('Total products found: ' + count));

//     for (let i = 0; i < count; i++) {
//         const ariaLabel = await products.nth(i).getAttribute('aria-label');
//         console.log(ariaLabel);
// }

// })