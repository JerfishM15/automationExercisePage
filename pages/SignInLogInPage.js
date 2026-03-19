
export class SignInLogInPage {


    constructor(page) {
        this.page = page;
        this.newUserSignupText = page.locator('.signup-form > h2');
        this.loginToYourAccountText = page.locator('.login-form > h2');
        this.signupNameInput = page.locator('[data-qa="signup-name"]');
        this.signupEmailInput = page.locator('[data-qa="signup-email"]');
        this.signupBtn = page.locator('[data-qa="signup-button"]');
        this.loginEmailInput = page.locator('[data-qa="login-email"]');
        this.loginPasswordInput = page.locator('[data-qa="login-password"]');
        this.loginBtn = page.locator('[data-qa="login-button"]');
        this.incorrectLoginError = page.locator('.login-form > form > p');
    }

    isNewUserSignupText() {
         return this.newUserSignupText;
    }

     isLoginToYourAccountText() {
        return this.loginToYourAccountText;
    }

    isIncorrectLoginErrortext() {
        return this.incorrectLoginError;
    }

    async fillSignupName(name) {
        await this.signupNameInput.fill(name);
    }

    async fillSignupEmail(email) {
        await this.signupEmailInput.fill(email);
    }

    async clickSignupButton() {
        await this.signupBtn.click();
    }

    async fillLoginEmail(email) {
        await this.loginEmailInput.fill(email);
    }

    async fillLoginPassword(password) {
        await this.loginPasswordInput.fill(password);
    }

    async clickLoginButton() {
        await this.loginBtn.click();
    }




}