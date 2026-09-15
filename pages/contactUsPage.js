
export class ContactUsPage {

    constructor(page) {
        this.page = page;
        this.getInTouchTitle = page.locator('.contact-form .title.text-center');
        this.nameInput = page.locator('input[data-qa="name"]');
        this.emailInput = page.locator('input[data-qa="email"]');
        this.subjectInput = page.locator('input[data-qa="subject"]');
        this.messageInput = page.locator('textarea[data-qa="message"]');
        this.uploadFileInput = page.locator('input[name="upload_file"]');
        this.submitBtn = page.locator('input[data-qa="submit-button"]');
        this.successMessage = page.locator('.status.alert-success');
        this.homeBtn = page.locator('a.btn.btn-success');
    }

    async visit() {
        await this.page.goto('/contact_us');
    }

    isGetInTouchTitle() {
        return this.getInTouchTitle;
    }

    async fillContactForm(name, email, subject, message) {
        await this.nameInput.fill(name);
        await this.emailInput.fill(email);
        await this.subjectInput.fill(subject);
        await this.messageInput.fill(message);
    }

    async uploadFile(filePath) {
        await this.uploadFileInput.setInputFiles(filePath);
    }

    async clickSubmitButton() {
        await Promise.all([
            this.page.waitForEvent('dialog').then(dialog => dialog.accept()),
            this.submitBtn.click(),
        ]);
    }

    isSuccessMessage() {
        return this.successMessage;
    }

    async clickHomeButton() {
        await this.homeBtn.click();
    }

}
