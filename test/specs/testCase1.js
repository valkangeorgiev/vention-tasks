import { assert } from 'chai';
import Browser from '../../framework/Browser.js';
import LoginPage from '../../pageobject/homepage/LoginPage.js';
const loginPage = new LoginPage();

describe('Test case 1', () => {
    it('Swag Labs text, username field, password field, login button and credentiial info block should be present', async () => {
        await Browser.openPage('https://www.saucedemo.com/');
        const swagLabsText = await loginPage.getSwagLabText();
        assert.equal(swagLabsText, 'Swag Labs', 'The text is not Swag Labs');

        const isUsernameFieldDisplayed = await loginPage.isUsernameFieldDisplayed();
        assert.isTrue(isUsernameFieldDisplayed, 'Username field is not displayed.');

        const isPasswordFieldDisplayed = await loginPage.isPasswordFieldDisplayed();
        assert.isTrue(isPasswordFieldDisplayed, 'Password field is not displayed.');

        const loginButton = await loginPage.getLoginButton();
        const isLoginButtonEnabled = await loginPage.isLoginButtonEnabled();
        assert.exists(loginButton, 'Login Button does not exist.');
        assert.isTrue(isLoginButtonEnabled, 'Login Button is disabled.');
    })
})