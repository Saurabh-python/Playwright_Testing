import { Page, Locator } from "@playwright/test";

export class CheckoutFinal {
    readonly page: Page;
    readonly finish_btn: Locator;
    readonly back_btn: Locator;
    constructor(page: Page) {
        this.page = page;
        this.finish_btn = page.getByRole('button', { name: 'Finish' });
        this.back_btn = page.getByRole('button', { name: 'Cancel' });
    }

    async finish() {
        await this.finish_btn.click();
        console.log('Final confirmation page loaded')
    }
    async back() {
        await this.back_btn.click();
    }
}