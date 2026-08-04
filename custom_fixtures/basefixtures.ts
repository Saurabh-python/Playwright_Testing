import {test as Base ,Page , expect} from '@playwright/test';
import { LoginPage } from '../Pages_POM/sauce_login';
import { Homepage } from '../Pages_POM/homepage_login';
import { CartPage } from '../Pages_POM/cartpage';
import { CheckInfo } from '../Pages_POM/checkoutinfo';
import { CheckoutFinal } from '../Pages_POM/checkout_overview';


type MyFixtures ={
    loginpage_fixture : LoginPage;
    homepage_fixture : Homepage;
    cartpage_fixture : CartPage;
    checkinfo_fixture : CheckInfo;
    checkfinal_fixture : CheckoutFinal;
}

export const Custom_test = Base.extend<MyFixtures>({
    loginpage_fixture : async ({page}, use)=>{
        await use(new LoginPage(page));
    },
    homepage_fixture : async ({page}, use)=>{
        await use(new Homepage(page));
    },
    cartpage_fixture : async ({page}, use)=>{
        console.log('Cart page loaded coming before Use')
        await use(new CartPage(page));
        console.log('Cart page loaded coming after Use')
    },
    checkinfo_fixture : async({page}, use)=>{
        await use(new CheckInfo(page));
    },
    checkfinal_fixture : async({page},use)=>{
        await use(new CheckoutFinal(page));
    }
});

export {expect};