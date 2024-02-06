import { assert } from 'chai';
import LoginPage from '../../../pageobject/homepage/LoginPage.js';
import Browser from '../../../framework/Browser.js';
const loginPage = new LoginPage();
import Logger from '../../../framework/log/Logger.js';


describe('Test case 2', () => {
    it('Check username and password fields placeholders, color of the Login Button, list of usernames, password for all users', async () => {
        Logger.logStep(1,'Open page https://www.saucedemo.com.')
        await Browser.openPage('https://www.saucedemo.com/');

        Logger.logStep(2,'Get username field placeholder.')
        const usernameFieldPlaceholder = await loginPage.getUsernameFieldPlaceholder();
        assert.equal(usernameFieldPlaceholder, 'Username', "The expected placeholder is not 'Username'.");

        Logger.logStep(3,'Get pasword field placeholder.')
        const passwordFieldPlaceholder = await loginPage.getPasswordFieldPlaceholder();
        assert.equal(passwordFieldPlaceholder, 'Password', "The expected placeholder is not 'Password'.");

        Logger.logStep(4,'Get the text of the Login Button.')
        const loginButtonText = await loginPage.getLoginButtonText();
        assert.equal(loginButtonText, 'Login', 'The name of the login button is different.');

        Logger.logStep(5,'Get the background color of the Login Button.')
        const loginButtonBackgroundColor = await loginPage.getLoginButtonBackgroundColor();
        const colorGreen = '#3ddc91'
        assert.equal(loginButtonBackgroundColor.parsed.hex, colorGreen, 'The color of the login button is different.');

        const usernames = ['standard_user', 'locked_out_user', 'problem_user', 'performance_glitch_user', 'error_user', 'visual_user'];
        const usernamesToString = usernames.toString();

        Logger.logStep(6,'Get the users of username block text.')
        const usernameBlockText = await loginPage.getUsernameBlockText();
        const splitedUsernameBlockText = usernameBlockText.split('\n')
        splitedUsernameBlockText.shift();
        const usernameBlockTextToString = splitedUsernameBlockText.toString();
        assert.equal(usernameBlockTextToString, usernamesToString, 'The usernames are not the same.');

        const password = 'secret_sauce';

        Logger.logStep(7,'Get the paswords of password block text.')
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