# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: browserlaunch.spec.ts >> launch saucedemo
- Location: tests\browserlaunch.spec.ts:3:5

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "https://www.saucedemo.com/"
Received: "https://www.saucedemo.com/inventory.html"
Timeout:  5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    14 × unexpected value "https://www.saucedemo.com/inventory.html"

```

```yaml
- button "Open Menu"
- img "Open Menu"
- text: Swag Labs Products Name (A to Z)
- combobox:
  - option "Name (A to Z)" [selected]
  - option "Name (Z to A)"
  - option "Price (low to high)"
  - option "Price (high to low)"
- link "Sauce Labs Backpack":
  - /url: "#"
  - img "Sauce Labs Backpack"
- link "Sauce Labs Backpack":
  - /url: "#"
- text: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection. $29.99
- button "Add to cart"
- link "Sauce Labs Bike Light":
  - /url: "#"
  - img "Sauce Labs Bike Light"
- link "Sauce Labs Bike Light":
  - /url: "#"
- text: A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included. $9.99
- button "Add to cart"
- link "Sauce Labs Bolt T-Shirt":
  - /url: "#"
  - img "Sauce Labs Bolt T-Shirt"
- link "Sauce Labs Bolt T-Shirt":
  - /url: "#"
- text: Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt. $15.99
- button "Add to cart"
- link "Sauce Labs Fleece Jacket":
  - /url: "#"
  - img "Sauce Labs Fleece Jacket"
- link "Sauce Labs Fleece Jacket":
  - /url: "#"
- text: It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office. $49.99
- button "Add to cart"
- link "Sauce Labs Onesie":
  - /url: "#"
  - img "Sauce Labs Onesie"
- link "Sauce Labs Onesie":
  - /url: "#"
- text: Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel. $7.99
- button "Add to cart"
- link "Test.allTheThings() T-Shirt (Red)":
  - /url: "#"
  - img "Test.allTheThings() T-Shirt (Red)"
- link "Test.allTheThings() T-Shirt (Red)":
  - /url: "#"
- text: This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton. $15.99
- button "Add to cart"
- contentinfo:
  - list:
    - listitem:
      - link "Twitter":
        - /url: https://twitter.com/saucelabs
    - listitem:
      - link "Facebook":
        - /url: https://www.facebook.com/saucelabs
    - listitem:
      - link "LinkedIn":
        - /url: https://www.linkedin.com/company/sauce-labs/
  - text: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
  1  | import{test, expect} from '@playwright/test';
  2  | 
  3  | test('launch saucedemo', async ({ page }) => {
  4  |     await page.goto('https://www.saucedemo.com');
  5  |     await page.pause() //This will open play inspector
  6  |     await page.locator('#user-name').fill('standard_user');
  7  |     await page.locator('[placeholder="Password"]').fill('secret_sauce');
  8  |     await page.locator('#login-button').click();
> 9  |     await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
     |                        ^ Error: expect(page).toHaveURL(expected) failed
  10 |     await expect(page).toHaveTitle('Swag Labs');
  11 | 
  12 |     
  13 | });
  14 | 
  15 | 
  16 | 
  17 | 
  18 | 
  19 | 
  20 | 
  21 | 
  22 | 
  23 | 
  24 | 
  25 | // test('enter username', async ({ page }) => {
  26 | //     await page.locator('#user-name').fill('standard_user');
  27 | // });
  28 | 
  29 | // test('enter password', async ({ page }) => {
  30 | //     await page.locator('[placeholder="Password"]').fill('secret_sauce');
  31 | // });
  32 | 
  33 | // test('login button pressed', async ({page}) =>{
  34 | //     await page.locator('#login-button').click();
  35 | 
  36 | // });
  37 | 
```