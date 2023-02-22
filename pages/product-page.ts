import { Locator, Page } from "@playwright/test";

export class ProductPage{
    readonly page: Page;
    readonly firstSize: Locator;
    readonly addWishList: Locator;
    readonly inputEmail: Locator;
    readonly continuar: Locator;
    readonly inputPassword: Locator;
    readonly iniciarSesion: Locator;
    readonly titlePuntos: Locator;
    readonly closeWelcomeAccount: Locator;
    readonly wishList: Locator;
    
    constructor(page: Page){
        this.page = page;
        this.firstSize = page.locator("button[class='gl-label size___2lbev']").nth(0);
        this.addWishList = page.locator("div[data-testid='add-wishlist-container']");
        this.inputEmail = page.locator("input[aria-label='Correo electrónico']");
        this.continuar = page.locator("button[aria-label='Continuar']");
        this.inputPassword = page.locator('#login-password');
        this.iniciarSesion = page.locator("button[aria-label='Iniciar sesión']");
        this.titlePuntos = page.getByText('Puntos para gastar');
        this.closeWelcomeAccount = page.getByTestId('close').first();
        this.wishList = page.locator("a[data-auto-id='wishlist-button-desktop']");
    }

    async addItemToWishList(){
        await this.firstSize.click();
        await this.addWishList.click();
    }

    async login(email: string, password: string){
        await this.inputEmail.click();
        await this.page.keyboard.type(email);
        await this.continuar.waitFor();
        await this.continuar.click();
        await this.inputPassword.type(password);
        await this.iniciarSesion.click();
    }

    async closePanelAccount(){
        await this.titlePuntos.waitFor();
        await this.closeWelcomeAccount.click();
    }

    async clickWishList(){
        await this.wishList.click();
    }


}