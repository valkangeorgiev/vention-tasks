import { assert } from 'chai';
import Browser from '../../framework/Browser.js';
import HomePage from '../../pageobject/homepage/HomePage.js';
//const Browser = require("../../framework/Browser");
// const HomePage = require("../pageobject/homepage/HomePage");
const homepage = new HomePage();

describe('Test case 1', () => {
    it('Swag Labs text, username field, password field, login button and credentiial info block should be present', async () => {
        //await homepage.openHomePage();
       // await browser.url(`https://www.saucedemo.com/`);
        await Browser.openPage('https://www.saucedemo.com/');
        const swagLabsText = await homepage.getSwagLabText();
        assert.equal(swagLabsText, 'Swag Labs', 'The text is not Swag Labs');

        const isUsernameFieldDisplayed = await homepage.isUsernameFieldDisplayed();
        assert.isTrue(isUsernameFieldDisplayed, 'Username field is not displayed.');

        const isPasswordFieldDisplayed = await homepage.isPasswordFieldDisplayed();
        assert.isTrue(isPasswordFieldDisplayed, 'Password field is not displayed.');

        const loginButton = await homepage.loginButton();
        const loginButtonEnabled = await homepage.isLoginButtonEnabled();
        assert.exists(loginButton, 'Login Button does not exist.');
        assert.isTrue(loginButtonEnabled, 'Login Button is disabled.');

        // await Browser.openPage(`https://www.saucedemo.com/`);
        // assert.equal(homepage.getSwagLabText(), 'Swag Labs', 'The text is not Swag Labs');
        // assert.isTrue(homepage.isUsernameFieldDisplayed(), 'Username field is not displayed.');
        // assert.isTrue(homepage.isPasswordFieldDisplayed(), 'Password field is not displayed.');
        // assert.exists(homepage.loginButton, 'Login Button does not exist.');
        // assert.isTrue(homepage.isLoginButtonEnabled(), 'Login Button is disabled.');
    })
})