import { assert } from 'chai';
import Browser from '../../../framework/Browser.js';
import LoginPage from '../../../pageobject/homepage/LoginPage.js';
const loginPage = new LoginPage();
import Logger from '../../../framework/log/Logger.js';



describe('Test case 1', () => {
    it('Swag Labs text, username field, password field, login button and credentiial info block should be present', async () => {
        Logger.logStep(1,'Open page https://www.saucedemo.com');
        await Browser.openPage('https://www.saucedemo.com/');

        Logger.logStep(2,'Get the title ("SwagLab") text.')
        const swagLabsText = await loginPage.getSwagLabText();
        assert.equal(swagLabsText, 'Swag Labs', 'The text is not Swag Labs');

        Logger.logStep(3,'Check if username field is displayed.')
        const isUsernameFieldDisplayed = await loginPage.isUsernameFieldDisplayed();
        assert.isTrue(isUsernameFieldDisplayed, 'Username field is not displayed.');

        Logger.logStep(4,'Check if password field is displayed.')
        const isPasswordFieldDisplayed = await loginPage.isPasswordFieldDisplayed();
        assert.isTrue(isPasswordFieldDisplayed, 'Password field is not displayed.');

        Logger.logStep(5,'Check if Login Button exists.')
        const loginButton = await loginPage.isLoginButtonExists();

        Logger.logStep(6,'Check if Login Button is enabled.')
        const isLoginButtonEnabled = await loginPage.isLoginButtonEnabled();

        assert.exists(loginButton, 'Login Button does not exist.');
        assert.isTrue(isLoginButtonEnabled, 'Login Button is disabled.');
    })
})