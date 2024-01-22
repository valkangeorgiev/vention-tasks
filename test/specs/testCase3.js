import { assert } from 'chai';
import Errors from '../../pageobject/homepage/Errors.js';
import HomePage from '../../pageobject/homepage/HomePage.js';
const homepage = new HomePage();
const error = new Errors();

describe('Test case 3', () => {
    it('Check error message, username and password fields contains error icons,', async () => {
        await homepage.openHomePage();
        await homepage.loginButton.click()
        const isErrorMessageDisplayed = await error.isErrorMessageDisplayed();
        assert.isTrue(isErrorMessageDisplayed, 'The error message is not displayed.');

        const isSvgUsernameErrorIconDisplayed = await error.isSvgUsernameErrorIconDisplayed();
        assert.isTrue(isSvgUsernameErrorIconDisplayed,'The username error icon is not displayed');

        const isSvgPasswordErrorIconDisplayed = await error.isSvgPasswordErrorIconDisplayed();
        assert.isTrue(isSvgPasswordErrorIconDisplayed, 'The password error icon is not displayed');
        await error.errorMessageCloseButton.click();

        await browser.waitUntil(async () => {
            return !(await error.isSvgUsernameErrorIconDisplayed()) && !(await error.isSvgPasswordErrorIconDisplayed()) && !(await error.isErrorMessageDisplayed());
        }, 
        { timeout: 5000,
          timeoutMsg: 'Error icons were not hidden within the specified time.'});

        assert.isFalse(await error.isErrorMessageDisplayed(), 'Error message is displayed');
        assert.isFalse(await error.isSvgUsernameErrorIconDisplayed(), 'The username field does not contain error icon');
        assert.isFalse(await error.isSvgPasswordErrorIconDisplayed(), 'The password field does not contain error icon'); 
    })
})