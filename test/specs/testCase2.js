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

        const loginCredentials = await $('//div[@id="login_credentials"]');
        const loginCredentialsText = await loginCredentials.getText();
        const loginCredentialsToTextString = await loginCredentialsText.toString();

        assert.isTrue(loginCredentialsToTextString.includes('standard_user'), 'The list of usernames does not contain standard_user.');
        assert.isTrue(loginCredentialsToTextString.includes('locked_out_user'), 'The list of usernames does not contain locked_out_user.');
        assert.isTrue(loginCredentialsToTextString.includes('problem_user'), 'The list of usernames does not contain problem_user.');
        assert.isTrue(loginCredentialsToTextString.includes('performance_glitch_user'), 'The list of usernames does not contain performance_glitch_user.');
        assert.isTrue(loginCredentialsToTextString.includes('error_user'), 'The list of usernames does not contain error_user.');
        assert.isTrue(loginCredentialsToTextString.includes('visual_user'), 'The list of usernames does not contain visual_user.');

        const passwordBox = await $('//div[@class="login_password"]');
        const passwordText = await passwordBox.getText();
        assert.isTrue(passwordText.includes('secret_sauce'), 'The password is not secret_sauce.');
    })
})
