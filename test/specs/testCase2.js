import { assert } from 'chai';

describe('Test case 2', () => {
    it('Check username and password fields placeholders, color of the Login Button, list of usernames, password for all users', async () => {
        await browser.url(`https://www.saucedemo.com/`)
        const usernameField = await $('#user-name');
        const usernameFieldPlaceholder = await usernameField.getAttribute('placeholder');
        assert.equal(usernameFieldPlaceholder, 'Username', "The expected placeholder is not 'Username'.");
        const passwordField = await $('#password');
        const passwordFieldPlaceholder = await passwordField.getAttribute('placeholder');
        assert.equal(passwordFieldPlaceholder, 'Password', "The expected placeholder is not 'Password'.");
        const loginButton = await $('#login-button');
        const loginButtonText = await loginButton.getValue();
        assert.equal(loginButtonText, 'Login', 'The name of the login button is different.')
        const loginButtonBackgroundColor = await loginButton.getCSSProperty('background-color');
        const colorGreen = '#3ddc91'
        assert.equal(loginButtonBackgroundColor.parsed.hex, colorGreen, 'The color of the login button is different.')

        const usernames = ['standard_user', 'locked_out_user', 'problem_user','performance_glitch_user', 'error_user', 'visual_user'];
        const usernamesToString = usernames.toString();

        const loginCredentials = await $('//div[@id="login_credentials"]');
        const loginCredentialsText = await loginCredentials.getText();
        const loginCredentialsTextSplited = loginCredentialsText.split('\n');
        loginCredentialsTextSplited.shift();
        const loginCredentialsTextToString = loginCredentialsTextSplited.toString();
        assert.equal(loginCredentialsTextToString, usernamesToString, 'The usernames are not the same.');
        
        const password = 'secret_sauce';
        const passwordBox = await $('//div[@class="login_password"]');
        const passwordText = await passwordBox.getText();
        const passwordTextSplited = passwordText.split('\n')
        passwordTextSplited.shift();
        const passwordTextToString = passwordTextSplited.toString();
        assert.equal(passwordTextToString, password, "The password is not 'secret_sauce'.");
    })
})
