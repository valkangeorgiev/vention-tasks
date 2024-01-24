import { assert } from 'chai';
import LoginPage from '../../pageobject/homepage/LoginPage.js';
import Waits from '../../framework/Waits.js';
import ErrorMessageForm from '../../pageobject/homepage/ErrorMessageForm.js';
const loginPage = new LoginPage();
const waits = new Waits();
const errorMessage = new ErrorMessageForm();


describe('Test case 3', () => {
    it('Check error message, username and password fields contains error icons,', async () => {
        await loginPage.openLoginPage();
        await loginPage.loginButton.click()
        const isErrorMessageDisplayed = await errorMessage.isErrorMessageDisplayed();
        assert.isTrue(isErrorMessageDisplayed, 'The error message is not displayed.');

        const isSvgUsernameErrorIconDisplayed = await loginPage.isSvgUsernameErrorIconDisplayed();
        assert.isTrue(isSvgUsernameErrorIconDisplayed, 'The username error icon is not displayed');

        const isSvgPasswordErrorIconDisplayed = await loginPage.isSvgPasswordErrorIconDisplayed();
        assert.isTrue(isSvgPasswordErrorIconDisplayed, 'The password error icon is not displayed');
        await errorMessage.errorMessageCloseButton.click();

        await waits.waitUntil(async () => {
            return !(await loginPage.isSvgUsernameErrorIconDisplayed()) && !(await loginPage.isSvgPasswordErrorIconDisplayed()) && !(await errorMessage.isErrorMessageDisplayed());
        }, {
            timeout: 5000,
            timeoutMsg: 'Error icons were not hidden within the specified time.'
        });

        assert.isFalse(await errorMessage.isErrorMessageDisplayed(), 'Error message is displayed');
        assert.isFalse(await loginPage.isSvgUsernameErrorIconDisplayed(0), 'The username field does not contain error icon');
        assert.isFalse(await loginPage.isSvgPasswordErrorIconDisplayed(), 'The password field does not contain error icon');
    })
})