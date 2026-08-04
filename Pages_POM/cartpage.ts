import {Page, Locator} from "@playwright/test";

export class CartPage{
    readonly page: Page;
    readonly continue_shop_btn : Locator;
    readonly removeItem_btn : Locator;
    readonly checkout_btn : Locator;
    constructor(page: Page){
        this.page = page;
        this.continue_shop_btn = page.getByRole('button', {name : 'Continue Shopping'});
        this.removeItem_btn = page.getByRole('button', {name : 'Remove'});
        this.checkout_btn = page.getByRole('button', {name : 'Checkout'});
    }

    async Checkout(){
        await this.checkout_btn.click();
        console.log('Clicked on checkout button');
    }
    async Remove(){
        await this.removeItem_btn.click();
    }
    async ContinueShopping(){
        await this.continue_shop_btn.click();
    }
}