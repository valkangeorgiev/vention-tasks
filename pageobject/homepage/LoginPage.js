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
        this.usernameErrorIconLabel = new Label('//div[@class="login-box"]//div[input[@id="user-name"]]//*[name()="svg"]', 'Username error icon.');
        this.passwordErrorIconLabel = new Label('//div[@class="login-box"]//div[input[@id="password"]]//*[name()="svg"]', 'Password error icon.');
    }
    
    async addUsername(username) {
        await this.usernameTextBox.clearAndType(username);
    }

    async addPassword(password) {
        await this.passwordTextBox.clearAndType(password);
    }

    async logIn(username, password) {
        await this.addUsername(username);
        await this.addPassword(password);
        await this.loginButton.click();
    }

    async getSwagLabText() {
        return this.swagLabLabel.getText();
    }

    async getLoginButton() {
        return this.loginButton;
    }

    async clickLoginButton(){
        await this.loginButton.click();
    }

    async isUsernameErrorIconDisplayed(timeout) {
        return this.usernameErrorIconLabel.isDisplayed(timeout);
    }

    async isPasswordErrorIconDisplayed(timeout) {
        return this.passwordErrorIconLabel.isDisplayed(timeout);
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
}
export default LoginPage;

