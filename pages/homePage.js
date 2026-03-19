import { expect } from '@playwright/test';

export class HomePage {

    constructor(page) {
        this.page = page;
        this.homeImage = page.locator("a > img");
        this.signUpLoginBtn = page.locator("a[href='/login']");
        this.loggedInAsUsername = page.locator('b');
        this.deleteAccountBtn = page.locator('a[href="/delete_account"]');
        this.logOutBtn = page.locator('a[href="/logout"]');
    }

    async visit() {
        await this.page.goto('/');
    }

    homePagelogo() {
       return this.homeImage;
    }

    async clickSignupLoginButton() {
        await this.signUpLoginBtn.click();
    }

     isLoggedInAsUsernameText() {
        return this.loggedInAsUsername;
    }


    async clickDeleteAccountButton() {
        await this.deleteAccountBtn.click();
    }

    async clickLogoutButton() {
        await this.logOutBtn.click();
    }







}
