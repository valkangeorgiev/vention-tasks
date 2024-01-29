import { assert } from 'chai';
import LoginPage from '../../pageobject/homepage/LoginPage.js';
import Waits from '../../framework/Waits.js';
import ErrorMessageForm from '../../pageobject/homepage/ErrorMessageForm.js';
import Browser from '../../framework/Browser.js';
const loginPage = new LoginPage();
const waits = new Waits();
const errorMessage = new ErrorMessageForm();


describe('Test case 3', () => {
    it('Check error message, username and password fields contains error icons,', async () => {
        await Browser.openPage('https://www.saucedemo.com/');
        await loginPage.clickLoginButton();
        const isErrorMessageDisplayed = await errorMessage.isFormDisplayed();
        assert.isTrue(isErrorMessageDisplayed, 'The error message is not displayed.');

        const isSvgUsernameErrorIconDisplayed = await loginPage.isUsernameErrorIconDisplayed();
        assert.isTrue(isSvgUsernameErrorIconDisplayed, 'The username error icon is not displayed');

        const isSvgPasswordErrorIconDisplayed = await loginPage.isPasswordErrorIconDisplayed();
        assert.isTrue(isSvgPasswordErrorIconDisplayed, 'The password error icon is not displayed');
        await errorMessage.clickErrorMessageCloseButton();

        await waits.waitUntil(async () => {
            return !(await loginPage.isUsernameErrorIconDisplayed(0)) && !(await loginPage.isPasswordErrorIconDisplayed(0)) && !(await errorMessage.isFormDisplayed(0));
        }, {
            timeoutMsg: 'Error icons were not hidden within the specified time.'
        });

        assert.isFalse(await errorMessage.isFormDisplayed(0), 'Error message is displayed');
        assert.isFalse(await loginPage.isUsernameErrorIconDisplayed(0), 'The username field does not contain error icon');
        assert.isFalse(await loginPage.isPasswordErrorIconDisplayed(0), 'The password field does not contain error icon');
    })
})