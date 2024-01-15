import { assert } from 'chai';

describe('Test case 3 ', () => {
    it('Check error message, usernmae and password fields contains error icons,', async () => {
        await browser.url(`https://www.saucedemo.com/`) 
        const loginButton = await $('#login-button');
        await loginButton.click();
        const errorMessage = await $('//div[@class="error-message-container error"]');
        const isErrorMessageDisplayed = await errorMessage.isDisplayed();
        assert.isTrue(isErrorMessageDisplayed, 'The error message is not displayed.');

        const svgUsernameErrorIcon = await $('//div[@class="login-box"]//div[1]//*[name()="svg"]');
        const isSvgUsernameErrorIconDisplayed = await svgUsernameErrorIcon.isDisplayed();
        assert.isTrue(isSvgUsernameErrorIconDisplayed);
        const svgPasswordErrorIcon = await $('//div[@class="login-box"]//div[2]//*[name()="svg"]');
        const isSvgPasswordErrorIconDisplayed = await svgPasswordErrorIcon.isDisplayed();
        assert.isTrue(isSvgPasswordErrorIconDisplayed);
        const errorMessageCloseButton = await $('//button[@class="error-button"]//*[name()="svg"]//*[name()="path" and contains(@fill,"currentCol")]')
        await errorMessageCloseButton.click();
        
        await browser.waitUntil(async () => {
            return !(await svgUsernameErrorIcon.isDisplayed()) && !(await svgPasswordErrorIcon.isDisplayed());
        }, 
        { timeout: 5000,
          timeoutMsg: 'Error icons were not hidden within the specified time.'});
          
        assert.isFalse(await svgUsernameErrorIcon.isDisplayed());
        assert.isFalse(await svgPasswordErrorIcon.isDisplayed());  
    })
})
