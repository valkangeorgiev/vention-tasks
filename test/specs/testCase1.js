import { assert } from 'chai';

describe('Test case 1 ', () => {
    it('Swag Labs text, username field, password field, login button and credentiial info block should be present', async () => {
        await browser.url(`https://www.saucedemo.com/`)
        const swagLabs = await $('//div[@class="login_logo"]');
        const swagLabsText = await swagLabs.getText();
        assert.equal(swagLabsText, 'Swag Labs', 'The text is not Swag Labs');
        const usernameField = await $('#user-name');
        const isUsernameFieldDisplayed = await usernameField.isDisplayed();
        assert.isTrue(isUsernameFieldDisplayed, 'Username field is not displayed.');
        const passwordField = await $('#password');
        const isPasswordFieldDisplayed = await passwordField.isDisplayed();
        assert.isTrue(isPasswordFieldDisplayed, 'Password field is not displayed.');
        const loginButton = await $('#login-button');
        const loginButtonEnabled = await loginButton.isEnabled()
        assert.exists(loginButton, 'Login Button does not exist.');
        assert.isTrue(loginButtonEnabled, 'Login Button is disabled.');
    })
})

