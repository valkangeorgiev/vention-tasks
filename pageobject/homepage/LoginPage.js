import BaseForm from "../../framework/BaseForm.js";
import Browser from '../../framework/Browser.js';
import Button from "../../framework/elements/Button.js";
import Label from "../../framework/elements/Label.js";
import TextBox from "../../framework/elements/TextBox.js";

class LoginPage extends BaseForm {

    constructor() {
        super('#user-name', 'LoingPage')
        this.swagLabLabel = new Label('//div[@class="login_logo"]', 'SwagLab logo text');
        this.usernameTextBox = new TextBox('#user-name', 'Username field');
        this.passwordTextBox = new TextBox('#password', 'Pasword field');
        this.loginButton = new Button('#login-button', 'Login button');
        this.usernameBlockLable = new Label('//div[@id="login_credentials"]', 'Login credential text');
        this.passwordBlockLable = new Label('//div[@class="login_password"]', 'Password box text');
        this.svgUsernameErrorIconLabel = new Label('//div[@class="login-box"]//div[input[@id="user-name"]]//*[name()="svg"]', 'Username error icon.');
        this.svgPasswordErrorIconLabel = new Label('//div[@class="login-box"]//div[input[@id="password"]]//*[name()="svg"]', 'Password error icon.');
    }

    async addUsername(username) {
        await this.usernameTextBox.addValue(username);
    }

    async addPassword(password) {
        await this.passwordTextBox.addValue(password);
    }

    async addUsernameAndClick(username) {
        await this.usernameTextBox.AddValue(username);
        await this.loginButton.click();
    }

    async addPasswordAndClick(password) {
        await this.passwordTextBox.AddValue(password);
        await this.loginButton.click();
    }

    async logIn(username, password) {
        await this.addUsername(username);
        await this.addPassword(password);
        await this.loginButton.click();
    }

    async openLoginPage() {
        await Browser.openPage('https://www.saucedemo.com/')
    }

    async getSwagLabText() {
        return this.swagLabLabel.getText();
    }

    async getLoginButton() {
        return this.loginButton;
    }

    async isSvgUsernameErrorIconDisplayed(timeout) {
        return this.svgUsernameErrorIconLabel.isDisplayed(timeout);
    }

    async isSvgPasswordErrorIconDisplayed(timeout) {
        return this.svgPasswordErrorIconLabel.isDisplayed(timeout);
    }

    async isUsernameFieldDisplayed() {
        return this.usernameTextBox.isDisplayed();
    }

    async isPasswordFieldDisplayed() {
        return this.passwordTextBox.isDisplayed();
    }

    async isLoginButtonEnabled() {
        return this.loginButton.isEnabled();
    }

    async getUsernameFieldPlaceholder() {
        return this.usernameTextBox.getPlaceholder();
    }

    async getPasswordFieldPlaceholder() {
        return this.passwordTextBox.getPlaceholder();
    }

    async getLoginButtonText() {
        return this.loginButton.getValue();
    }

    async getLoginButtonBackgroundColor() {
        return this.loginButton.getBackgroundColor();
    }

    async getUsernameBlockText() {
        return this.usernameBlockLable.getText();
    }

    async getPasswordBlockText() {
        return this.passwordBlockLable.getText();
    }

    async isErrorMessageDisplayed() {
        return this.errorMessage.isDisplayed();
    }
}
export default LoginPage;

