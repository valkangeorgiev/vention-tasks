import { assert } from 'chai';

describe('Test case 4', () => {
    it('Check login', async () => {
        await browser.url(`https://www.saucedemo.com/`) 
        const usernameField = await $('#user-name');
        await usernameField.addValue('performance_glitch_user');
        const passwordField = await $('#password');
        await passwordField.addValue('secret_sauce');
        const loginButton = await $('#login-button');
        await loginButton.click();
        
        await browser.waitUntil(async () =>{
            const productsTitle = await $('//span[@class="title"]');
            return productsTitle.isDisplayed();
        });
        const productsTitle = await $('//span[contains(text(),"Products")]');
        assert.isTrue(await productsTitle.isDisplayed(), "The title 'Products' is not displayed");
    })
})
