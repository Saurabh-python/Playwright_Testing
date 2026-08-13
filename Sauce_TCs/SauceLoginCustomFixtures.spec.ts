import { My_test, expect } from '../custom_fixtures/basefixtures';
import { SauceData } from '../data/testDataheroku';
import { log } from '../logs/logger';


const custom_data = SauceData.Data();
for(const data of custom_data){
    My_test('Test Scenario: Login To SauceDemo with User: ' + data.Username, async ({ loginpage_fixture,
        homepage_fixture,cartpage_fixture, checkinfo_fixture, checkfinal_fixture,page}) => {
        await log("log", "Executing Test Case: " + data.TestId);
        await loginpage_fixture.OpenSauceDemo();
        await loginpage_fixture.EnterUsername(data.Username);
        await loginpage_fixture.EnterPassword(data.Password);
        await loginpage_fixture.ClickLoginButton();
        await homepage_fixture.items();
        await homepage_fixture.ClickaddToCart();
        await homepage_fixture.sortItems('lohi');
        await homepage_fixture.ClickCartButton();
        await cartpage_fixture.Checkout();
        await checkinfo_fixture.fn_text(data.name);
        await checkinfo_fixture.ln_text(data.lname);
        await checkinfo_fixture.pc_text(data.pcode)
        await checkinfo_fixture.continue_btn_click()
        await checkfinal_fixture.finish();
        await homepage_fixture.SidebarButton();
        await homepage_fixture.ClickLogoutButton();
        await expect(page).toHaveScreenshot();// Verification of the page using screenshots

    })
}
// aj isme data ko data driven banaya aur env set kiye
// 1-2 cheeze aur fir ye demo ke liye ready

// see
// han 
