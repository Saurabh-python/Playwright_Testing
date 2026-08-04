import { Page, Locator } from "@playwright/test";

export class Homepage{
readonly page: Page;
readonly addtoCart: Locator;
readonly cart_btn : Locator;
readonly sidebar_btn: Locator;
readonly logout_btn : Locator;
readonly sort_btn : Locator;
readonly items_count : Locator;

    constructor(page: Page) {
        this.page = page;
        this.addtoCart= page.locator('#add-to-cart-sauce-labs-backpack')
        this.cart_btn = page.locator('#shopping_cart_container')
        this.sidebar_btn = page.locator('#react-burger-menu-btn')
        this.logout_btn = page.getByRole('link', {name: 'Logout'})
        this.sort_btn= page.locator('.product_sort_container')
        this.items_count = page.locator('.inventory_item_name')
    }
    async ClickaddToCart(){
        await this.addtoCart.click();
        console.log('Item added to cart');
    }
    async ClickCartButton(){
        await this.cart_btn.click();
        console.log('Clicked on cart button');
    }
    async SidebarButton(){
        await this.sidebar_btn.click();
        console.log('Clicked on sidebar button');
    }
    async ClickLogoutButton(){
        await this.logout_btn.click();
        console.log('Clicked on logout button');
    }
    async sortItems(sort_btn: string){
        await this.sort_btn.selectOption({value: sort_btn});

    }
    async items(){
        const items = await this.items_count.count();
        console.log('Total No. of items :',items)
        for (let i =0; i<items; i++){
            console.log('Items are : ',await this.items_count.nth(i).textContent())
        }
    }

}