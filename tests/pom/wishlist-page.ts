import { Locator, Page } from "@playwright/test";

export class WishListPage{
    readonly page: Page;
    readonly titleListaDeseos: Locator;
    readonly numberArticles: Locator;
    readonly firstCardWish: Locator;
    readonly firstCardWishTitle: Locator;
    readonly removeWish: Locator;
    readonly noArticles: Locator

    constructor(page: Page){
        this.page = page;
        this.titleListaDeseos = page.getByRole('heading', { name: 'Mi lista de deseos' });
        this.numberArticles = page.getByText('1 ARTÍCULO');
        this.firstCardWish =  page.locator("div[class^='wishlist-card']");
        this.firstCardWishTitle = page.getByRole('link', { name: 'Tenis Stan Smith' }).nth(1);
        this.removeWish = page.getByRole('button', { name: 'Remove from wishlist' }).first();
        this.noArticles = page.getByText('0 ARTÍCULO');
    }

    async removeWishCard(){
        this.removeWish.dblclick();
    }
    
}