import { expect } from '@playwright/test';

export class  InformationPage {


    constructor(page) {
        this.page = page;
        this.enterInfoTitle = page.locator('.login-form >h2');
        this.mrTitle = page.locator('#id_gender1');
        this.mrsTitle = page.locator('#id_gender2');
        this.passwordInput = page.locator('#password');
        this.selectDay = page.locator('#days');
        this.monthSelect = page.locator('#months');
        this.yearSelect = page.locator('#years');
        this.newsletterCheckbox = page.locator('#newsletter');
        this.specialOffersCheckbox = page.locator('#optin');
        this.nameField = page.locator('input[data-qa=name]');
        this.firstNameInput = page.locator('#first_name');
        this.lastNameInput = page.locator('#last_name');
        this.emailInput = page.locator('#email');
        this.companyInput = page.locator('#company');
        this.addressInput = page.locator('#address1');
        this.countrySelect = page.locator('#country');
        this.stateInput = page.locator('#state');
        this.cityInput = page.locator('#city');
        this.zipcodeInput = page.locator('#zipcode');
        this.mobileNumberInput = page.locator('#mobile_number');
        this.createAccountBtn = page.locator('[data-qa="create-account"]');
    }




    async isEnterInfoTitleVisible() {
        await expect(this.enterInfoTitle).toBeVisible();
    }

    async selectGender() {
        await this.mrTitle.check();

    }

    async fillPassword(password) {
        await this.passwordInput.fill(password);
    }

    async checkNewsletter() {
        await this.newsletterCheckbox.check();
    }


    async checkSpecialOffers() {
        await this.specialOffersCheckbox.check();
    }

    async fillAccountInfo(name, day, month, year) {
        await this.nameField.fill(name);
        await this.selectDay.selectOption(day);
        await this.monthSelect.selectOption(month);
        await this.yearSelect.selectOption(year);
    }

    async fillAddressInfo(firstName, lastName, company, address, country, state, city, zipcode, mobileNumber) {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.companyInput.fill(company);
        await this.addressInput.fill(address);
        await this.countrySelect.selectOption(country);
        await this.stateInput.fill(state);
        await this.cityInput.fill(city);
        await this.zipcodeInput.fill(zipcode);
        await this.mobileNumberInput.fill(mobileNumber);
    }

    
    async clickCreateAccountButton() {
        await this.createAccountBtn.click();
    }
























}