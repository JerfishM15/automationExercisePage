import { test, expect } from '@playwright/test';
import { generalDataFixed, generalDataRandom } from '../utils/data.js';
import { SignInLogInPage } from '../pages/SignInLogInPage.js';
import { AccountStatusPage } from '../pages/accountStatusPage.js';
import { InformationPage } from '../pages/informationPage.js';
import { HomePage } from '../pages/homePage.js';
import { ContactUsPage } from '../pages/contactUsPage.js';
import { ProductsPage } from '../pages/productsPage.js';
import { ProductDetailPage } from '../pages/productDetailPage.js';

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



    test('Test Case 5: Register User with existing email', async ({ page }) => {

        const signInLogInPage = new SignInLogInPage(page);
        const homePage = new HomePage(page);

        // Visit the automation exercise website
        await homePage.visit();

        // Verify that home page is visible successfully
        await expect(homePage.homePagelogo()).toBeVisible();

        // Click on 'Signup / Login' button
        await homePage.clickSignupLoginButton();

        // Verify 'New User Signup!' is visible
        await expect(signInLogInPage.isNewUserSignupText()).toBeVisible();

        // Enter name and already registered email address
        await signInLogInPage.fillSignupName(randomData.name);
        await signInLogInPage.fillSignupEmail(data.valideEmail);

        // Click 'Signup' button
        await signInLogInPage.clickSignupButton();

        // Verify error 'Email Address already exist!' is visible
        await expect(signInLogInPage.isEmailAlreadyExistError()).toBeVisible();
        await expect(signInLogInPage.isEmailAlreadyExistError()).toHaveText(data.emailAlreadyExistText);

    });



    test('Test Case 6: Contact Us Form', async ({ page }) => {

        const homePage = new HomePage(page);
        const contactUsPage = new ContactUsPage(page);

        // Visit the automation exercise website
        await homePage.visit();

        // Verify that home page is visible successfully
        await expect(homePage.homePagelogo()).toBeVisible();

        // Click on 'Contact Us' button
        await homePage.clickContactUsButton();

        // Verify 'GET IN TOUCH' is visible
        await expect(contactUsPage.isGetInTouchTitle()).toBeVisible();
        await expect(contactUsPage.isGetInTouchTitle()).toHaveText(data.getInTouchText);

        // Enter name, email, subject and message
        await contactUsPage.fillContactForm(randomData.name, randomData.email, randomData.subject, randomData.message);

        // Upload file
        await contactUsPage.uploadFile('./utils/sampleUpload.txt');

        // Click 'Submit' button and click OK on the confirmation dialog
        await contactUsPage.clickSubmitButton();

        // Verify success message 'Success! Your details have been submitted successfully.' is visible
        await expect(contactUsPage.isSuccessMessage()).toBeVisible();
        await expect(contactUsPage.isSuccessMessage()).toHaveText(data.contactUsSuccessText);

        // Click 'Home' button and verify that landed to home page successfully
        await contactUsPage.clickHomeButton();
        await expect(homePage.homePagelogo()).toBeVisible();

    });



    test('Test Case 7: Verify Test Cases Page', async ({ page }) => {

        const homePage = new HomePage(page);

        // Visit the automation exercise website
        await homePage.visit();

        // Verify that home page is visible successfully
        await expect(homePage.homePagelogo()).toBeVisible();

        // Click on 'Test Cases' button
        await homePage.clickTestCasesButton();

        // Verify user is navigated to test cases page successfully
        await expect(page).toHaveURL(/\/test_cases$/);

    });



    test('Test Case 8: Verify All Products and product detail page', async ({ page }) => {

        const homePage = new HomePage(page);
        const productsPage = new ProductsPage(page);
        const productDetailPage = new ProductDetailPage(page);

        // Visit the automation exercise website
        await homePage.visit();

        // Verify that home page is visible successfully
        await expect(homePage.homePagelogo()).toBeVisible();

        // Click on 'Products' button
        await homePage.clickProductsButton();

        // Verify user is navigated to ALL PRODUCTS page successfully
        await expect(productsPage.isPageTitle()).toBeVisible();
        await expect(productsPage.isPageTitle()).toHaveText(data.allProductsText);

        // The products list is visible
        await expect(productsPage.isProductsListVisible()).toBeVisible();

        // Click on 'View Product' of first product
        await productsPage.clickViewProduct(0);

        // User is landed to product detail page
        // Verify that product details are visible: product name, category, price, availability, condition, brand
        await expect(productDetailPage.isProductNameText()).toBeVisible();
        await expect(productDetailPage.isProductCategoryText()).toBeVisible();
        await expect(productDetailPage.isProductPriceText()).toBeVisible();
        await expect(productDetailPage.isProductAvailabilityText()).toBeVisible();
        await expect(productDetailPage.isProductConditionText()).toBeVisible();
        await expect(productDetailPage.isProductBrandText()).toBeVisible();

    });



    test('Test Case 9: Search Product', async ({ page }) => {

        const homePage = new HomePage(page);
        const productsPage = new ProductsPage(page);

        // Visit the automation exercise website
        await homePage.visit();

        // Verify that home page is visible successfully
        await expect(homePage.homePagelogo()).toBeVisible();

        // Click on 'Products' button
        await homePage.clickProductsButton();

        // Verify user is navigated to ALL PRODUCTS page successfully
        await expect(productsPage.isPageTitle()).toBeVisible();

        // Enter product name in search input and click search button
        await productsPage.searchProduct(data.productName);

        // Verify 'SEARCHED PRODUCTS' is visible
        await expect(productsPage.isPageTitle()).toHaveText(data.searchedProductsText);

        // Verify all the products related to search are visible
        await expect(productsPage.isProductsListVisible()).toBeVisible();

    });



    test('Test Case 10: Verify Subscription in home page', async ({ page }) => {

        const homePage = new HomePage(page);

        // Visit the automation exercise website
        await homePage.visit();

        // Verify that home page is visible successfully
        await expect(homePage.homePagelogo()).toBeVisible();

        // Scroll down to footer
        // Verify text 'SUBSCRIPTION'
        await expect(homePage.isSubscriptionText()).toBeVisible();
        await expect(homePage.isSubscriptionText()).toHaveText(data.subscriptionText);

        // Enter email address in input and click arrow button
        await homePage.fillSubscribeEmail(randomData.email);
        await homePage.clickSubscribeButton();

        // Verify success message 'You have been successfully subscribed!' is visible
        await expect(homePage.isSubscribeSuccessMessage()).toBeVisible();
        await expect(homePage.isSubscribeSuccessMessage()).toHaveText(data.subscribeSuccessText);

    });


});