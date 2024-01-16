import { assert } from 'chai';

describe('Test case 3', () => {
    it('Check error message, username and password fields contains error icons,', async () => {
        await browser.url(`https://www.saucedemo.com/`) 
        let loginButton = await $('#login-button');
        await loginButton.click();

        const errorMessage = await $('//div[@class="error-message-container error"]');
        const isErrorMessageDisplayed = await errorMessage.isDisplayed();
        assert.isTrue(isErrorMessageDisplayed, 'The error message is not displayed.');

        const svgUsernameErrorIcon = await $('//div[@class="login-box"]//div[1]//*[name()="svg"]');
        const isSvgUsernameErrorIconDisplayed = await svgUsernameErrorIcon.isDisplayed();
        assert.isTrue(isSvgUsernameErrorIconDisplayed,);

        const svgPasswordErrorIcon = await $('//div[@class="login-box"]//div[2]//*[name()="svg"]');
        const isSvgPasswordErrorIconDisplayed = await svgPasswordErrorIcon.isDisplayed();
        assert.isTrue(isSvgPasswordErrorIconDisplayed);

        const errorMessageCloseButton = await $("//button[@class='error-button']");
        await errorMessageCloseButton.click();

        const newErrorMessage = await $('//div[@class="error-message-container error"]');
        const isNewErrorMessageDisplayed = await newErrorMessage.isDisplayed();
        assert.isFalse(isNewErrorMessageDisplayed, 'The error message is not displayed.');
        
        const newSvgUsernameErrorIcon = await $('//div[@class="login-box"]//div[1]//*[name()="svg"]');
        const isSvgUsernameErrorIconDisplayedOrNot = await newSvgUsernameErrorIcon.isDisplayed();
        assert.isFalse(isSvgUsernameErrorIconDisplayedOrNot,);

        const newSvgPasswordErrorIcon = await $('//div[@class="login-box"]//div[2]//*[name()="svg"]');
        const isSvgPasswordErrorIconDisplayedOrNot = await newSvgPasswordErrorIcon.isDisplayed();
        assert.isFalse(isSvgPasswordErrorIconDisplayedOrNot);     
    })
})
