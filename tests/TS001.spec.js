import { test, expect } from '@playwright/test';
import { generalDataFixed, generalDataRandom } from '../utils/data.js';
import { SignInLogInPage } from '../pages/SignInLogInPage.js';
import { AccountStatusPage } from '../pages/accountStatusPage.js';
import { InformationPage } from '../pages/informationPage.js';
import { HomePage } from '../pages/homePage.js';

const data = generalDataFixed();
const randomData = generalDataRandom();


test.describe('Test cases from Automation Exercise', () => {




    test('Test Case 1: Register User', async ({ page }) => {

        const signInLogInPage = new SignInLogInPage(page);
        const accountStatusPage = new AccountStatusPage(page);
        const informationPage = new InformationPage(page);
        const homePage = new HomePage(page);


        // Visit the automation exercise website
        await homePage.visit();

        // Verify that the home page is visible successfully
        await expect(homePage.homePagelogo()).toBeVisible();

        // Click on 'Signup / Login' button
        await homePage.clickSignupLoginButton();

        // Verify 'New User Signup!' is visible
        await expect(signInLogInPage.isNewUserSignupText()).toBeVisible();

        // Enter name and email address
        await signInLogInPage.fillSignupName(randomData.name);
        await signInLogInPage.fillSignupEmail(randomData.email);

        // Click 'Signup' button
        await signInLogInPage.clickSignupButton();

        // Verify that 'ENTER ACCOUNT INFORMATION' is visible
        await expect(informationPage.isEnterInfoTitle()).toBeVisible();

        // Fill details: Title, Password, Date of birth
        await informationPage.selectGender();
        await informationPage.fillPassword(randomData.password);
        await informationPage.fillAccountInfo(
            randomData.name, 
            randomData.day, 
            randomData.month, 
            randomData.year);

        // Select checkbox 'Sign up for our newsletter!'
        await informationPage.checkNewsletter();

        // Select checkbox 'Receive special offers from our partners!'
        await informationPage.checkSpecialOffers();

        // Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
        await informationPage.fillAddressInfo(
            randomData.firstName, 
            randomData.lastName, 
            randomData.company, 
            randomData.address, 
            data.country, 
            randomData.state, 
            randomData.city, 
            randomData.zipcode, 
            randomData.mobileNumber);

        // Click 'Create Account button'
        await informationPage.clickCreateAccountButton();

        // Verify that 'ACCOUNT CREATED!' is visible
        await expect(accountStatusPage.isAccountCreatedText()).toBeVisible();

        // Click 'Continue' button
        await accountStatusPage.clickContinueButton();

        // Verify that 'Logged in as username' is visible
        await expect(homePage.isLoggedInAsUsernameText()).toBeVisible();

        // Click 'Delete Account' button
        await homePage.clickDeleteAccountButton();

        // Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
        await expect(accountStatusPage.isAccountDeletedText()).toBeVisible();
        await accountStatusPage.clickContinueButton();

    });



    test('Test Case 2: Login User with correct email and password', async ({ page }) => {

        const signInLogInPage = new SignInLogInPage(page);
        const homePage = new HomePage(page);


        // Visit the automation exercise website
        await homePage.visit();

        // Click on 'Signup / Login' button
        await homePage.clickSignupLoginButton();

        // Verify 'Login to your account' is visible
        await expect(signInLogInPage.isLoginToYourAccountText()).toBeVisible();

        // Enter correct email address and password
        await signInLogInPage.fillLoginEmail(data.valideEmail);
        await signInLogInPage.fillLoginPassword(data.password);

        // Click 'Login' button
        await signInLogInPage.clickLoginButton();

        // Verify that 'Logged in as username' is visible
        await expect(homePage.isLoggedInAsUsernameText()).toBeVisible();
        await expect(homePage.isLoggedInAsUsernameText()).toHaveText(data.name);

    });



    test('Test Case 3: Login User with incorrect email and password', async ({ page }) => {

        const signInLogInPage = new SignInLogInPage(page);
        const homePage = new HomePage(page);

        // Visit the automation exercise website
        await homePage.visit();

        // Click on 'Signup / Login' button
        await homePage.clickSignupLoginButton();

        // Verify 'Login to your account' is visible
        await expect(signInLogInPage.isLoginToYourAccountText()).toBeVisible();


        // Enter incorrect email address and password
        await signInLogInPage.fillLoginEmail(randomData.email);
        await signInLogInPage.fillLoginPassword(randomData.password);

        // Click 'Login' button
        await signInLogInPage.clickLoginButton();

        // Verify error 'Your email or password is incorrect!' is visible
        await expect(signInLogInPage.isIncorrectLoginErrortext()).toBeVisible();


    });


    test('Test Case 4: Logout User', async ({ page }) => {

        const signInLogInPage = new SignInLogInPage(page);
        const homePage = new HomePage(page);

        // Visit the automation exercise website
        await homePage.visit();

        // Click on 'Signup / Login' button
        await homePage.clickSignupLoginButton();

        // Verify 'Login to your account' is visible
        await expect(signInLogInPage.isLoginToYourAccountText()).toBeVisible();

        // Enter correct email address and password
        await signInLogInPage.fillLoginEmail(data.valideEmail);
        await signInLogInPage.fillLoginPassword(data.password);

        // Click 'Login' button
        await signInLogInPage.clickLoginButton();

        // Verify that 'Logged in as username' is visible
        await expect(homePage.isLoggedInAsUsernameText()).toBeVisible();
        await expect(homePage.isLoggedInAsUsernameText()).toHaveText(data.name);

        // Click 'Logout' button
        await homePage.clickLogoutButton();

        //  Verify that user is navigated to login page
        await expect(signInLogInPage.isLoginToYourAccountText()).toBeVisible();

    });


});