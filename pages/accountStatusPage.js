

export class AccountStatusPage {



    constructor(page) {
        this.page = page;
        this.accountCreatedText = page.locator('[data-qa="account-created"]');
        this.continueBtn = page.locator('[data-qa="continue-button"]');
        this.accountDeletedText = page.locator('h2[data-qa="account-deleted"]');
    }


     isAccountCreatedText() {
        return this.accountCreatedText;
    }

    async clickContinueButton() {
        await this.continueBtn.click();
    }

    isAccountDeletedText() {
        return this.accountDeletedText;
    }





}
