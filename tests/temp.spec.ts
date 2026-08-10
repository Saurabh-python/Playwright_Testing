import { chromium, test, expect, request } from '@playwright/test';
// import fs from 'fs';

//Below test setup browser , then its context and then pages
test.skip('Browser envoke - Google', async () => {
  const browser = await chromium.launch({headless: false});
  const context = await browser.newContext({viewport: {width: 640, height:480}, ignoreHTTPSErrors: true});
  const pages = await context.newPage();
  const pages1 = await context.newPage();
  await pages.goto('https://www.google.com');
  await expect(pages).toHaveTitle('Google');
  await pages1.goto('https://www.facebook.com');
  await expect(pages1).toHaveTitle('Facebook')
  const cookies = await context.cookies();
  await console.log('Cookies:',cookies); 
  await console.log('Cookies Length :',cookies.length); 

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
test.skip('API TEST', async({request})=>{
  const response = await request.get('https://www.google.com/');
  await expect(response.status()).toBe(200);
  await console.log(await response.body());
  await console.log(await response.headers());
  await console.log(await response.ok());
})

test.describe.skip('Group : 1', async()=>{
  test('Keyboard Actions', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator('#input1').fill('Welcome');
    await page.keyboard.press('Control+A');
    await page.keyboard.press('Control+C');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Control+V');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Control+V');

  })

  test('Downloads Action & Verification', async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/download');
    const [downloads] = await Promise.all([page.waitForEvent('download'),
    page.getByRole('link', {name: 'some-file.txt'}).click()]);
    await downloads.saveAs('Downloads/lala.txt');  // Saving file with custom name
    const fileExists = fs.existsSync('Downloads/lala.txt');
    await console.log(fileExists);
    expect(fileExists).toBe(true);

    //Cleanup after file downloads 
    if(fileExists){
      fs.unlinkSync('Downloads/lala.txt')
    }
  })

  test('Uploads Action', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator('#singleFileInput').setInputFiles('Downloads/Uploads/Upload_File.html');
    await page.getByRole('button', {name: 'Upload Single File'}).click();
    const success_msg = await page.locator('#singleFileStatus').textContent();
    await expect(success_msg).toContain('Single file selected');
    console.log(`Upload Success:${success_msg}`);
  })
})

test.skip('JS Alert Handle', async({page})=>{
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
  //Method 1 using promise.all
  const [JSalert] = await Promise.all([page.waitForEvent('dialog'),
    page.getByRole('button', {name: 'Click for JS Alert'}).click()]);
  await JSalert.accept();
  await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');
  
  // Method 2 using page.on
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
  page.on('dialog', async dialog=>{
    await dialog.accept();
  });
  await page.getByRole('button', {name: 'Click for JS Alert'}).click();
  await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');



})

test.skip('Frames handling', async({page})=>{
  await page.goto('https://demo.automationtesting.in/Frames.html');
  console.log('No of frames:',page.frame.length);
  const textbox = await page.frameLocator('#singleframe').locator('//input[@type="text"]');
  await textbox.fill('HELLO');
})

test.skip('Nested Frame Handling', async({page})=>{
  await page.goto('https://demo.automationtesting.in/Frames.html');
  await page.getByRole('link', {name: 'Iframe with in an Iframe'}).click();
  const parentFrame = await page.frameLocator('iframe[src*="MultipleFrames.html"]');
  const childFrame =  await parentFrame.frameLocator('iframe[src*="SingleFrame.html"]');
  const child_textbox = await childFrame.locator('//input[@type="text"]');
  await child_textbox.pressSequentially('HELLO SAURABH PANDEY', {delay: 100});
 //best approach is: store parent frame because after doing operation in child frame and if you want to perform-
 // -operation in parent frame then it is easy to do.
})


// test.describe.configure({mode: 'parallel'})