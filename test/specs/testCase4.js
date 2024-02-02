import { assert } from 'chai';
import ProductPage from '../../pageobject/productpage/ProductPage.js';
import LoginPage from '../../pageobject/homepage/LoginPage.js';
import Waits from '../../framework/Waits.js';
import Browser from '../../framework/Browser.js';
const loginPage = new LoginPage();
const productpage = new ProductPage();
const waits = new Waits();
import Logger from '../../framework/log/Logger.js';

describe('Test case 4', () => {
    it('Check login', async () => {
        Logger.logStep(1,'Open page https://www.saucedemo.com.')
        await Browser.openPage('https://www.saucedemo.com/');

        Logger.logStep(2,'Enter username and password to Log In.')
        await loginPage.logIn('performance_glitch_user','secret_sauce');

        Logger.logStep(3,'Wait until you log in.')
        await waits.waitUntil(async () => {
                   return productpage.isFormDisplayed();
        });

        assert.isTrue(await productpage.isFormDisplayed(), "The title 'Products' is not displayed");
    })
})