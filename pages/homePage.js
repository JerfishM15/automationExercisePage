import { expect } from '@playwright/test';

export class HomePage {

    constructor(page) {
        this.page = page;
        this.homeImage = page.locator("a > img");
        this.signUpLoginBtn = page.locator("a[href='/login']");
        this.loggedInAsUsername = page.locator('b');
        this.deleteAccountBtn = page.locator('a[href="/delete_account"]');
        this.logOutBtn = page.locator('a[href="/logout"]');
        this.contactUsBtn = page.locator('a[href="/contact_us"]');
        this.productsBtn = page.locator('a[href="/products"]');
        this.testCasesBtn = page.locator('.navbar-nav a[href="/test_cases"]');
        this.subscriptionText = page.locator('.single-widget h2');
        this.subscribeEmailInput = page.locator('#susbscribe_email');
        this.subscribeBtn = page.locator('#subscribe');
        this.subscribeSuccessMessage = page.locator('#success-subscribe .alert-success');
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

    async clickContactUsButton() {
        await this.contactUsBtn.click();
    }

    async clickProductsButton() {
        await this.productsBtn.click();
    }

    async clickTestCasesButton() {
        await this.testCasesBtn.click();
    }

    isSubscriptionText() {
        return this.subscriptionText;
    }

    async fillSubscribeEmail(email) {
        await this.subscribeEmailInput.scrollIntoViewIfNeeded();
        await this.subscribeEmailInput.fill(email);
    }

    async clickSubscribeButton() {
        await this.subscribeBtn.click();
    }

    isSubscribeSuccessMessage() {
        return this.subscribeSuccessMessage;
    }







}
