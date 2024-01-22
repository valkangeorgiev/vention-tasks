import { assert } from 'chai';
import Browser from '../../framework/Browser.js';
import HomePage from '../../pageobject/homepage/HomePage.js';
const homepage = new HomePage();

describe('Test case 2', () => {
    it('Check username and password fields placeholders, color of the Login Button, list of usernames, password for all users', async () => {
        await homepage.openHomePage();
        const usernameFieldPlaceholder = await homepage.getUsernameFieldPlaceholder();
        assert.equal(usernameFieldPlaceholder, 'Username', "The expected placeholder is not 'Username'.");

        const passwordFieldPlaceholder = await homepage.getPasswordFieldPlaceholder();
        assert.equal(passwordFieldPlaceholder, 'Password', "The expected placeholder is not 'Password'.");

        const loginButtonText = await homepage.getLoginButtonValue();
        assert.equal(loginButtonText, 'Login', 'The name of the login button is different.')
        
        const loginButtonBackgroundColor = await homepage.getLoginButtonBackgroundColor();
        const colorGreen = '#3ddc91'
        assert.equal(loginButtonBackgroundColor.parsed.hex, colorGreen, 'The color of the login button is different.')

        const usernames = ['standard_user', 'locked_out_user', 'problem_user','performance_glitch_user', 'error_user', 'visual_user'];
        const usernamesToString = usernames.toString();
                                                                                                   
        const loginCredentialsWithoutFirstElement = homepage.removeFirstElementOfLoginCredentials();  // да се опитам да направя assert-a в цикъл. примерно правим цикъл, в който всеки елемент се отделя и се проверява, дали го има или не.
        const loginCredentialsTextToString = loginCredentialsWithoutFirstElement.toString();
        assert.equal(loginCredentialsTextToString, usernamesToString, 'The usernames are not the same.');
        
        const password = 'secret_sauce';
        const passwordBoxWithoutFirstElement = homepage.removeFirstElementOfPasswowrdBox();
        const passwordBoxToString = passwordBoxWithoutFirstElement.toString();
        assert.equal(passwordBoxToString, password, "The password is not 'secret_sauce'.");
    })
})