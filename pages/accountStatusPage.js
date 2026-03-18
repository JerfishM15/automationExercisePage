import { expect } from '@playwright/test';

export class AccountStatusPage {



    constructor(page) {
        this.page = page;
        this.accountCreatedText = page.locator('h2[data-qa="account-created"]');
        this.continueBtn = page.locator('[data-qa="continue-button"]');
        this.accountDeletedText = page.locator('h2[data-qa="account-deleted"]');
    }


    async isAccountCreatedTextVisible() {
        await expect(this.accountCreatedText).toBeVisible();
    }

    async clickContinueButton() {
        await this.continueBtn.click();
    }

    async isAccountDeletedTextVisible() {
        await expect(this.accountDeletedText).toBeVisible();
    }





}
