import { chromium, test, expect } from '@playwright/test';
//Below test setup browser , then its context and then pages
test.skip('Browser envoke - Google', async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const pages = await context.newPage();
  const pages1 = await context.newPage();
  await pages.goto('https://www.google.com');
  await expect(pages).toHaveTitle('Google');
  await pages1.goto('https://www.facebook.com');
  await expect(pages1).toHaveTitle('Facebook')

})
test.skip('Child Window', async({page})=>{
  const parent = page;
  await page.goto('https://testautomationpractice.blogspot.com/')
  const [child] = await Promise.all([page.waitForEvent('popup'), page.getByRole('button', {name: 'New Tab'}).click()])
  await child.waitForLoadState();
  const total_page = page.context().pages();
  await console.log(total_page.length);
  await expect(child).toHaveURL('https://www.pavantestingtools.com/');
  await parent.bringToFront();
  await child.close();
})
test.skip('Entering details in JS POP UP', async()=>{
  const browser = await chromium.launch();
  const context = await browser.newContext({httpCredentials: {username: 'admin', password: 'admin'}});
  const page = await context.newPage();
  await page.goto('https://the-internet.herokuapp.com/basic_auth');
  await page.waitForLoadState();
  await expect(page.locator('text= Basic Auth')).toBeVisible();
})
