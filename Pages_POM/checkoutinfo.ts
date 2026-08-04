import {Page , Locator} from "@playwright/test";

export class CheckInfo{
    readonly page : Page;
    readonly first_name : Locator;
    readonly last_name : Locator;
    readonly pincode : Locator;
    readonly cancel_btn : Locator;
    readonly continue_btn : Locator;
    constructor(page : Page){
        this.page = page;
        this.first_name = page.getByPlaceholder('First Name');
        this.last_name = page.getByPlaceholder('Last Name');
        this.pincode = page.getByPlaceholder('Zip/Postal Code');
        this.cancel_btn = page.getByRole('button', {name: 'Cancel'});
        this.continue_btn = page.getByRole('button', {name: 'Continue'});
    }


    async fn_text(first_name : string){
        await this.first_name.fill(first_name);
        console.log(`First name entered: ${first_name}`);
    }
    async ln_text(last_name : string){
        await this.last_name.fill(last_name);
        console.log(`Last name entered: ${last_name}`);
    }
    async pc_text(pincode: string){
        await this.pincode.fill(pincode);
        console.log('Pincode entered', pincode);
    }
    async continue_btn_click(){
        await this.continue_btn.click();
        console.log('Continue button clicked');
    }
    async cancel_btn_click(){
        await this.cancel_btn.click();
        console.log('Cancel button clicked');
    }
}