import { test, Page,expect } from '@playwright/test';
import { LoginPage } from '../Pages_POM/sauce_login';
import { Homepage } from '../Pages_POM/homepage_login';
import { CartPage } from '../Pages_POM/cartpage';
import { CheckInfo } from '../Pages_POM/checkoutinfo';
import { CheckoutFinal } from '../Pages_POM/checkout_overview';

test('Login To SauceDemo', async ({ page }) => {
    const Login = new LoginPage(page);
    const Home = new Homepage(page);
    const Cart = new CartPage(page);
    const Checkout = new CheckInfo(page);
    const Checkout_confirmation = new CheckoutFinal(page);


    await Login.OpenSauceDemo();
    await Login.EnterUsername('standard_user');
    await Login.EnterPassword('secret_sauce');
    await Login.ClickLoginButton();
    await Home.ClickaddToCart();
    await Home.sortItems('lohi');
    await Home.ClickCartButton();
    await Cart.Checkout()
    await Checkout.fn_text('Saurabh');
    await Checkout.ln_text('Lala');
    await Checkout.pc_text('123456')
    await Checkout.continue_btn_click()
    await Checkout_confirmation.finish();
    await Home.SidebarButton();
    await Home.ClickLogoutButton();
    // await expect.soft(page).toBe(Login.OpenSauceDemo());
   console.log('Test completed successfully')
})
