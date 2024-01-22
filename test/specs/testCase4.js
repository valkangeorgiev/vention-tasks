import { assert } from 'chai';
import ProductPage from '../../pageobject/productpage/ProductPage.js';
import HomePage from '../../pageobject/homepage/HomePage.js';
const homepage = new HomePage();
const productpage = new ProductPage();

describe('Test case 4', () => {
    it('Check login', async () => {
        await homepage.openHomePage();
        await homepage.logIn('performance_glitch_user','secret_sauce');
        await browser.waitUntil(async () =>{
            return productpage.isProductTitleDisplayed();
        });
        assert.isTrue(await productpage.isProductTitleDisplayed(), "The title 'Products' is not displayed");
    })
})