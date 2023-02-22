import { expect, Locator, Page } from "@playwright/test";

export class ResultsPage {
    readonly page: Page;
    readonly buttonClose: Locator;
    readonly firstProduct: Locator;

    constructor(page: Page){
        this.page = page;
        this.buttonClose = page.locator("button[aria-label='Cerrar']");
        this.firstProduct = page.locator("div[data-auto-id='product_container'] > div > div:nth-child(5)");
    }

    async closePopUp(){
        await this.buttonClose.click();
        await expect(this.page).toHaveURL('https://www.adidas.co/blue_version');
    }

    async selectFirstProduct(){
        await this.firstProduct.hover();
        await this.firstProduct.click();
    }

}