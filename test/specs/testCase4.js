import { assert } from 'chai';
import ProductPage from '../../pageobject/productpage/ProductPage.js';
import LoginPage from '../../pageobject/homepage/LoginPage.js';
import Waits from '../../framework/Waits.js';
const loginPage = new LoginPage();
const productpage = new ProductPage();
const waits = new Waits();

describe('Test case 4', () => {
    it('Check login', async () => {
        await loginPage.openLoginPage();
        await loginPage.logIn('performance_glitch_user','secret_sauce');
        await waits.waitUntil(async () => {
                   return productpage.isFormDisplayed();
                  }, { timeout: 5000 });
        assert.isTrue(await productpage.isFormDisplayed(), "The title 'Products' is not displayed");
    })
})