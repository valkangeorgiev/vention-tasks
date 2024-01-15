import { assert } from 'chai';

describe('Test case 2 ', () => {
    it('Check usernmae and password fields placeholders, color of the Login Button, list of usernames, password for all users', async () => {
        await browser.url(`https://www.saucedemo.com/`)
        const usernameField = await $('#user-name');
        const usernameFieldPlaceholder = await usernameField.getAttribute('placeholder');
        assert.equal(usernameFieldPlaceholder, 'Username', "The expected placeholder is not 'Username'.");
        const passwordField = await $('#password');
        const passwordFieldPlaceholder = await passwordField.getAttribute('placeholder');
        assert.equal(passwordFieldPlaceholder, 'Password', "The expected placeholder is not 'Password'.");
        const loginButton = await $('#login-button');
        const loginButtonText = await loginButton.getAttribute('value');
        assert.equal(loginButtonText, 'Login', 'The name of the login button is different.')
        const loginButtonBackgroundColor = await loginButton.getCSSProperty('background-color');
        assert.equal(loginButtonBackgroundColor.parsed.hex, '#3ddc91', 'The color of the login button is different.')

        const loginCredentials = await $$('//div[@id="login_credentials"]');
        const credentialArray = [];
        for (let credentials of loginCredentials) {

            credentialArray.push(await credentials.getText());

        }
        const credentialArrayToString = credentialArray.toString();
        assert.isTrue(credentialArrayToString.includes('standard_user'));
        assert.isTrue(credentialArrayToString.includes('locked_out_user'));
        assert.isTrue(credentialArrayToString.includes('problem_user'));
        assert.isTrue(credentialArrayToString.includes('performance_glitch_user'));
        assert.isTrue(credentialArrayToString.includes('error_user'));
        assert.isTrue(credentialArrayToString.includes('visual_user'));

        const passwordBox = await $('//div[@class="login_password"]');
        const passwordText = await passwordBox.getText();
        assert.isTrue(passwordText.includes('secret_sauce'));
    })
})
