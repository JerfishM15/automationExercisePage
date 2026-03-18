import { test } from '@playwright/test';
import { generalDataFixed } from '../utils/data.js';
import { SignInLogInPage } from '../pages/SignInLogInPage.js';
import { AccountStatusPage } from '../pages/accountStatusPage.js';
import { InformationPage } from '../pages/informationPage.js';
import { HomePage } from '../pages/homePage.js';

const data = generalDataFixed();


test.describe('Test cases from Automation Exercise', () => {




    test('Test Case 1: Register User', async ({ page }) => {

        const signInLogInPage = new SignInLogInPage(page);
        const accountStatusPage = new AccountStatusPage(page);
        const informationPage = new InformationPage(page);
        const homePage = new HomePage(page);


        // Visit the automation exercise website
        await homePage.visit();

        // Verify that the home page is visible successfully
        await homePage.isHomePageVisible();

        // Click on 'Signup / Login' button
        await homePage.clickSignupLoginButton();

        // Verify 'New User Signup!' is visible
        await signInLogInPage.isNewUserSignupTextVisible();

        // Enter name and email address
        await signInLogInPage.fillSignupName(data.name);
        await signInLogInPage.fillSignupEmail(data.email);

        // Click 'Signup' button
        await signInLogInPage.clickSignupButton();

        // Verify that 'ENTER ACCOUNT INFORMATION' is visible
        await informationPage.isEnterInfoTitleVisible();

        // Fill details: Title, Password, Date of birth
        await informationPage.selectGender();
        await informationPage.fillPassword(data.password);
        await informationPage.fillAccountInfo(
            data.name, 
            data.day, 
            data.month, 
            data.year);

        // Select checkbox 'Sign up for our newsletter!'
        await informationPage.checkNewsletter();

        // Select checkbox 'Receive special offers from our partners!'
        await informationPage.checkSpecialOffers();

        // Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
        await informationPage.fillAddressInfo(
            data.firstName, 
            data.lastName, 
            data.company, 
            data.address, 
            data.country, 
            data.state, 
            data.city, 
            data.zipcode, 
            data.mobileNumber);

        // Click 'Create Account button'
        await informationPage.clickCreateAccountButton();

        // Verify that 'ACCOUNT CREATED!' is visible
        await accountStatusPage.isAccountCreatedTextVisible();

        // Click 'Continue' button
        await accountStatusPage.clickContinueButton();

        // Verify that 'Logged in as username' is visible
        await homePage.isLoggedInAsUsernameVisible();

        // Click 'Delete Account' button
        await homePage.clickDeleteAccountButton();

        // Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
        await accountStatusPage.isAccountDeletedTextVisible();
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
        await signInLogInPage.isLoginToYourAccountTextVisible();

        // Enter correct email address and password
        await signInLogInPage.fillLoginEmail(data.valideEmail);
        await signInLogInPage.fillLoginPassword(data.password);

        // Click 'Login' button
        await signInLogInPage.clickLoginButton();

        // Verify that 'Logged in as username' is visible
        await homePage.isLoggedInAsUsernameVisible();

    });



    test('Test Case 3: Login User with incorrect email and password', async ({ page }) => {

        const signInLogInPage = new SignInLogInPage(page);
        const homePage = new HomePage(page);

        // Visit the automation exercise website
        await homePage.visit();

        // Click on 'Signup / Login' button
        await homePage.clickSignupLoginButton();

        // Verify 'Login to your account' is visible
        await signInLogInPage.isLoginToYourAccountTextVisible();


        // Enter incorrect email address and password
        await signInLogInPage.fillLoginEmail(data.email);
        await signInLogInPage.fillLoginPassword(data.password);

        // Click 'Login' button
        await signInLogInPage.clickLoginButton();

        // Verify error 'Your email or password is incorrect!' is visible
        await signInLogInPage.isIncorrectLoginErrorVisible();


    });


    test('Test Case 4: Logout User', async ({ page }) => {

        const signInLogInPage = new SignInLogInPage(page);
        const homePage = new HomePage(page);

        // Visit the automation exercise website
        await homePage.visit();

        // Click on 'Signup / Login' button
        await homePage.clickSignupLoginButton();

        // Verify 'Login to your account' is visible
        await signInLogInPage.isLoginToYourAccountTextVisible();

        // Enter correct email address and password
        await signInLogInPage.fillLoginEmail(data.valideEmail);
        await signInLogInPage.fillLoginPassword(data.password);

        // Click 'Login' button
        await signInLogInPage.clickLoginButton();

        // Verify that 'Logged in as username' is visible
        await homePage.isLoggedInAsUsernameVisible();

        // Click 'Logout' button
        await homePage.clickLogoutButton();

        //  Verify that user is navigated to login page
        await signInLogInPage.isLoginToYourAccountTextVisible();

    });


});