import { Page , Locator } from "@playwright/test";
import {environment} from '../.env/env';

export class LoginPage{
readonly page: Page;
readonly username: Locator;
readonly password: Locator;
readonly login_btn: Locator;
constructor(page: Page){
    this.page = page;
    this.username = page.locator('#user-name');
    this.password = page.locator('[placeholder="Password"]');
    this.login_btn = page.locator('#login-button');
}
async OpenSauceDemo(){
    await this.page.goto(environment.baseUrl);
}
async EnterUsername(username: string){
    await this.username.fill(username);
}
async EnterPassword(password: string){
    await this.password.fill(password);
}
async ClickLoginButton(){
    await this.login_btn.click();
}

}
