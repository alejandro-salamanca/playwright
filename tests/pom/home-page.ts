import { Locator, Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly titleTendencias: Locator;
    readonly carouselStanSmith: Locator;

    constructor(page: Page){
        this.page = page;
        this.titleTendencias = page.getByRole('heading', { name: 'TENDENCIAS' });
        this.carouselStanSmith = page.locator("a[href='/blue_version'][aria-label='Content Card With Link']");
    }

    async goto(){
        await this.page.goto('https://www.adidas.co/');
    }

    async scrollTendencias(){
        await this.titleTendencias.scrollIntoViewIfNeeded();
    }

    async selectionTendencias(){
        await this.carouselStanSmith.hover();
        await this.carouselStanSmith.click();
    }

}


