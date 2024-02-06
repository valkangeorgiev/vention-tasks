import { assert } from 'chai';
import LoginPage from '../../../pageobject/homepage/LoginPage.js';
import Waits from '../../../framework/Waits.js';
import ErrorMessageForm from '../../../pageobject/homepage/ErrorMessageForm.js';
import Browser from '../../../framework/Browser.js';
const loginPage = new LoginPage();
const waits = new Waits();
const errorMessage = new ErrorMessageForm();
import Logger from '../../../framework/log/Logger.js';


describe('Test case 3', () => {
    it('Check error message, username and password fields contains error icons,', async () => {
        Logger.logStep(1,'Open page https://www.saucedemo.com.')
        await Browser.openPage('https://www.saucedemo.com/');

        Logger.logStep(2,'Click the Login Button.')
        await loginPage.clickLoginButton();

        Logger.logStep(3,'Check if error message is displayed.');
        const isErrorMessageDisplayed = await errorMessage.isFormDisplayed();
        assert.isTrue(isErrorMessageDisplayed, 'The error message is not displayed.');

        Logger.logStep(4,'Check if username error icon is displayed');
        const isSvgUsernameErrorIconDisplayed = await loginPage.isUsernameErrorIconDisplayed();
        assert.isTrue(isSvgUsernameErrorIconDisplayed, 'The username error icon is not displayed.');

        
        Logger.logStep(5,'Check if password error icon is displayed.');
        const isSvgPasswordErrorIconDisplayed = await loginPage.isPasswordErrorIconDisplayed();
        assert.isTrue(isSvgPasswordErrorIconDisplayed, 'The password error icon is not displayed');

        Logger.logStep(6,'Click the error message close button.');
        await errorMessage.clickErrorMessageCloseButton();

        Logger.logStep(7,'Wait unit error message, error username icon and error password icon are not displayed anymore.');
        await waits.waitUntil(async () => {
            return !(await errorMessage.isFormDisplayed(0));
        }, {
            timeoutMsg: 'Error icons were not hidden within the specified time.'
        });

        assert.isFalse(await errorMessage.isFormDisplayed(0), 'Error message is displayed');
        assert.isFalse(await loginPage.isUsernameErrorIconDisplayed(0), 'The username field does not contain error icon');
        assert.isFalse(await loginPage.isPasswordErrorIconDisplayed(0), 'The password field does not contain error icon');
    })
})