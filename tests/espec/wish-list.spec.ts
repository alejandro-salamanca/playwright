import { WishListPage } from './../pom/wishlist-page';
import { ResultsPage } from './../pom/results-page';
import { HomePage } from '../pom/home-page';
import { ProductPage } from '../pom/product-page';
import { test, expect } from "@playwright/test";


test('Select item and add to wish list', async ({ page}) => {
    const homePage = new HomePage(page);
    const resultsPage = new ResultsPage(page);
    const productPage = new ProductPage(page);
    const wishListPage = new WishListPage(page);

    await homePage.goto();
    await homePage.scrollTendencias();
    await homePage.selectionTendencias();
    await resultsPage.closePopUp();
    await resultsPage.selectFirstProduct();
    await productPage.addItemToWishList();
    await productPage.login();
    await productPage.closePanelAccount();
    await productPage.clickWishList();

    await expect(wishListPage.titleListaDeseos).toBeVisible();
    await expect(wishListPage.numberArticles).toBeVisible();
    await expect(wishListPage.firstCardWish).toBeVisible();
    await expect(wishListPage.firstCardWishTitle).toBeVisible();

    await wishListPage.removeWishCard();
    await expect(wishListPage.noArticles).toBeVisible();
})