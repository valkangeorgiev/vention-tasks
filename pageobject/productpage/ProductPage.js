// import BaseForm from "../framework/BaseForm";
// import Browser from '../../framework/Browser';
// import Label from "../framework/elements/Label";
const Label = require("../framework/elements/Label");
const Browser = require("../framework/Browser");
const BaseForm = require("../framework/BaseForm");



class ProductPage extends BaseForm{

    constructor(){
        // this.usernameField = new TextBox('#user-name', 'Username field');
        // this.paswordField = new TextBox('#password', 'Pasword field');
        // this.loginButton = new Button('#login-button', 'Login button');
        this.poruductTitle = new Label('//span[contains(text(),"Products")]', 'Product title text');
        
    }

    async openProductPage(){
        await Browser.openPage('https://www.saucedemo.com/');

    }

    async isProductTitleDisplayed(){
        return this.poruductTitle.isDisplayed();
    }

    

}
//export default ProductPage;
module.exports = ProductPage;