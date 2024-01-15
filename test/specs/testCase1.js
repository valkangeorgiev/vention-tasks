import { assert } from 'chai';

describe('Test case 1 ', () => {
    it('Swag Labs text, username field, password field, login button and credentiial info block should be present', async () => {
        await browser.url(`https://www.saucedemo.com/`)
        const swagLabs  = await $('//div[@class="login_logo"]');
        const swagLabsText = await swagLabs.getText();
        assert.equal(swagLabsText, 'Swag Labs', 'The text is not Swag Labs');
        const usernameField = await $('#user-name');
        assert.exists(usernameField, 'Username field does not exist.'); //isDisplayed
        const passwordField = await $('#password');
        assert.exists(passwordField, 'Password field does not exist.');
        const loginButton = await $('#login-button');
        const loginButtonEnabled = await loginButton.isEnabled() 
        assert.exists(loginButton, 'Login Button does not exist.');  
        assert.isTrue(loginButtonEnabled, 'Login Button is disabled.');  
    })
})

