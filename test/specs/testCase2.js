import { assert } from 'chai';
import LoginPage from '../../pageobject/homepage/LoginPage.js';
const loginPage = new LoginPage();

describe('Test case 2', () => {
    it('Check username and password fields placeholders, color of the Login Button, list of usernames, password for all users', async () => {
        await loginPage.openLoginPage();
        const usernameFieldPlaceholder = await loginPage.getUsernameFieldPlaceholder();
        assert.equal(usernameFieldPlaceholder, 'Username', "The expected placeholder is not 'Username'.");

        const passwordFieldPlaceholder = await loginPage.getPasswordFieldPlaceholder();
        assert.equal(passwordFieldPlaceholder, 'Password', "The expected placeholder is not 'Password'.");

        const loginButtonText = await loginPage.getLoginButtonText();
        assert.equal(loginButtonText, 'Login', 'The name of the login button is different.');

        const loginButtonBackgroundColor = await loginPage.getLoginButtonBackgroundColor();
        const colorGreen = '#3ddc91'
        assert.equal(loginButtonBackgroundColor.parsed.hex, colorGreen, 'The color of the login button is different.');

        const usernames = ['standard_user', 'locked_out_user', 'problem_user', 'performance_glitch_user', 'error_user', 'visual_user'];
        const usernamesToString = usernames.toString();

        const usernameBlockText = await loginPage.getUsernameBlockText();
        const splitedUsernameBlockText = usernameBlockText.split('\n')
        splitedUsernameBlockText.shift();
        const usernameBlockTextToString = splitedUsernameBlockText.toString();
        assert.equal(usernameBlockTextToString, usernamesToString, 'The usernames are not the same.');

        const password = 'secret_sauce';

        const passwordBlockText = await loginPage.getPasswordBlockText();
        const splitedPassWordBlockText = passwordBlockText.split('\n')
        splitedPassWordBlockText.shift();
        const passwordBlockTextToString = splitedPassWordBlockText.toString();
        assert.equal(passwordBlockTextToString, password, "The password is not 'secret_sauce'.");

        // const usernames = ['standard_user', 'locked_out_user', 'problem_user', 'performance_glitch_user', 'error_user', 'visual_user'];
        // const usernameBlockText = await loginPage.getUsernameBlockText();
        // const splitedUsernameBlockText = usernameBlockText.split('\n');
        // const expectedUsernames = [];

        // for (let i = 0; i < splitedUsernameBlockText.length; i++) {
        //     const currentUsername = splitedUsernameBlockText[i];
        //     if (currentUsername === 'standard_user' || currentUsername === 'locked_out_user'
        //         || currentUsername === 'problem_user' || currentUsername === 'performance_glitch_user'
        //         || currentUsername === 'error_user' || currentUsername === 'visual_user') {
        //         expectedUsernames.push(currentUsername)
        //     }
        // }
        // assert.deepEqual(usernames, expectedUsernames, "The list of usernames are not the same!");
    })
})