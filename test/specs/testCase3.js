import { assert } from 'chai';

describe('Test case 3', () => {
    it('Check error message, username and password fields contains error icons,', async () => {
        await browser.url(`https://www.saucedemo.com/`)
        let loginButton = await $('#login-button');
        await loginButton.click();

        const errorMessage = await $('//h3[@data-test="error"]');   
        const isErrorMessageDisplayed = await errorMessage.isDisplayed();
        assert.isTrue(isErrorMessageDisplayed, 'The error message is not displayed.');

        const svgUsernameErrorIcon = await $('//div[@class="login-box"]//div[input[@id="user-name"]]//*[name()="svg"]');
        const isSvgUsernameErrorIconDisplayed = await svgUsernameErrorIcon.isDisplayed();
        assert.isTrue(isSvgUsernameErrorIconDisplayed,'The username error icon is not displayed');

        const svgPasswordErrorIcon = await $('//div[@class="login-box"]//div[input[@id="password"]]//*[name()="svg"]');
        const isSvgPasswordErrorIconDisplayed = await svgPasswordErrorIcon.isDisplayed();
        assert.isTrue(isSvgPasswordErrorIconDisplayed, 'The password error icon is not displayed');

        const errorMessageCloseButton = await $("//button[@class='error-button']");
        await errorMessageCloseButton.click();

        await browser.waitUntil(async () => {
            return !(await svgUsernameErrorIcon.isDisplayed()) && !(await svgPasswordErrorIcon.isDisplayed()) && !(await errorMessage.isDisplayed());
        }, 
        { timeout: 5000,
          timeoutMsg: 'Error icons were not hidden within the specified time.'});

        assert.isFalse(await errorMessage.isDisplayed(), 'Error message is displayed');
        assert.isFalse(await svgUsernameErrorIcon.isDisplayed(), 'The username field does not contain error icon');
        assert.isFalse(await svgPasswordErrorIcon.isDisplayed(), 'The password field does not contain error icon'); 
    })
})
