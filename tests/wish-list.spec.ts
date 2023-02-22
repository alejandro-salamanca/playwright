import { WishListPage } from '../pages/wishlist-page';
import { ResultsPage } from '../pages/results-page';
import { HomePage } from '../pages/home-page';
import { ProductPage } from '../pages/product-page';
import { ScreenCapture } from '../actions/screen-capture';
import { test, expect } from "@playwright/test";
import { loginData } from '../data/login-data';

test.afterEach(async ({page}) =>{
    const wishListPage = new WishListPage(page);

    await wishListPage.removeWishCard();
    await expect(wishListPage.noArticles).toBeVisible();
})

test('Select item and add to wish list', async ({page}, testInfo) => {
    let testName = testInfo.title;
    const homePage = new HomePage(page);
    const resultsPage = new ResultsPage(page);
    const productPage = new ProductPage(page);
    const wishListPage = new WishListPage(page);
    const screenCapture = new ScreenCapture(page);

    await homePage.goto();
    await screenCapture.screencapture(testName,1);
    await homePage.scrollTendencias();
    await screenCapture.screencapture(testName,2);
    await homePage.selectionTendencias();
    await resultsPage.closePopUp();
    await screenCapture.screencapture(testName,3);
    await resultsPage.hoverFirstProduct();
    await screenCapture.screencapture(testName,4);
    await resultsPage.selectFirstProduct();
    await productPage.selectFirstAvailableSize();
    await screenCapture.screencapture(testName,5);
    await productPage.addItemToWishList();
    await screenCapture.screencapture(testName,6);
    await productPage.login(loginData.email,loginData.password);
    await screenCapture.screencapture(testName,7);
    await productPage.closePanelAccount();
    await productPage.clickWishList();

    await expect(wishListPage.titleListaDeseos).toBeVisible();
    await expect(wishListPage.numberArticles).toBeVisible();
    await expect(wishListPage.firstCardWish).toBeVisible();
    await expect(wishListPage.firstCardWishTitle).toBeVisible();

    await screenCapture.screencapture(testName,8);

})