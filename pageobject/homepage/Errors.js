
import Icon from "../../framework/elements/Icon";
import Button from "../../framework/elements/Button";
import Label from "../../framework/elements/Label";
import HomePage from "../../HomePage";
// const Icon = require("../framework/elements/Icon");
// const Label = require("../framework/elements/Label");
// const Button = require("../framework/elements/Button");
// const HomePage = require("../pageobject/homepage/HomePage");



class Errors extends HomePage{

    constructor(){
        this.errorMessage = new Label('//h3[@data-test="error"]', 'Error message text');
        this.svgUsernameErrorIcon = new Icon('//div[@class="login-box"]//div[input[@id="user-name"]]//*[name()="svg"]', 'Username error icon.');
        this.svgPasswordErrorIcon = new Icon('//div[@class="login-box"]//div[input[@id="password"]]//*[name()="svg"]', 'Password error icon.');
        this.errorMessageCloseButton = new Button("//button[@class='error-button']", 'Error message close button.');
    }
    
    async isErrorMessageDisplayed(){
        return this.errorMessage.isDisplayed();
    }
    async isSvgUsernameErrorIconDisplayed(){
        return this.svgUsernameErrorIcon.isDisplayed();
    }
    async isSvgPasswordErrorIconDisplayed(){
        return this.svgPasswordErrorIcon.isDisplayed();
    }

}
export default Errors;
// module.exports = Errors;
