import { expect, Locator, Page } from "@playwright/test";

export class ResultsPage {
    readonly page: Page;
    readonly buttonClose: Locator;
    readonly firstProduct: Locator;
    readonly firstProductPhoto: Locator;

    constructor(page: Page){
        this.page = page;
        this.buttonClose = page.locator("button[aria-label='Cerrar']");
        this.firstProduct = page.locator("div[data-auto-id='product_container'] > div > div:nth-child(5)");
        this.firstProductPhoto = page.locator("div[data-auto-id='product_container'] > div > div:nth-child(5) > div > div > div > div > div > div > div:nth-child(1) > a:nth-child(1) > img:nth-child(1)");
    }

    async closePopUp(){
        await this.buttonClose.click();
        await expect(this.page).toHaveURL('https://www.adidas.co/blue_version');
    }

    async hoverFirstProduct(){
        await this.firstProductPhoto.waitFor();
        await this.firstProduct.hover();
    }

    async selectFirstProduct(){
        await this.firstProduct.click();
    }

}