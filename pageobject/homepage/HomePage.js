import BaseForm from "../../framework/BaseForm";
import Browser from '../../framework/Browser';
import Button from "../../framework/elements/Button";
import Label from "../../framework/elements/Label";
import TextBox from "../../framework/elements/TextBox";
// const Label = require("../framework/elements/Label");
// const Button = require("../framework/elements/Button");
// const Browser = require("../framework/Browser");
// const TextBox = require("../framework/elements/TextBox");

// const BaseForm = require("../framework/BaseForm");

class HomePage extends BaseForm{

    constructor(){
        this.swagLabText = new Label('//div[@class="login_logo"]','SwagLab logo text');
        this.usernameField = new TextBox('#user-name', 'Username field');
        this.paswordField = new TextBox('#password', 'Pasword field');
        this.loginButton = new Button('#login-button', 'Login button');
        this.loginCredentials = new Label('//div[@id="login_credentials"]', 'Login credential text');
        this.passwordBox = new Label('//div[@class="login_password"]', 'Password box text'); 
    }

    async logIn(username, password){
        await this.usernameField.AddValue(username);
        await this.paswordField.AddValue(password);
        await this.loginButton.click();   
    }

    async openHomePage(){
        await Browser.openPage('https://www.saucedemo.com/')
    }

    async getSwagLabText(){
        return this.swagLabText.getText();
    }
    
    async isUsernameFieldDisplayed(){
        return this.usernameField.isDisplayed();
    }

    async isPasswordFieldDisplayed(){
        return this.paswordField.isDisplayed();
    }

    async isLoginButtonEnabled(){
        return this.loginButton.isEnabled();
    }

    async getUsernameFieldPlaceholder(){
        return this.usernameField.getPlaceholder();
    }

    async getPasswordFieldPlaceholder(){
        return this.paswordField.getPlaceholder();
    }

    async getLoginButtonValue(){
        return this.loginButton.getValue();
    }

    async getLoginButtonBackgroundColor(){
        return this.loginButton.getBackgroundColor();
    }

    async getLoginCredentialsText(){
         return this.loginCredentials.getText();   
    }

    async getLoginCredentialsTextSplitedByNewLine(){
        return this.getLoginCredentialsText.split('\n');
    }

    async removeFirstElementOfLoginCredentials(){
        let loginCredentials = await this.getLoginCredentialsTextSplitedByNewLine.shift();
        return loginCredentials;
    }
    async getPasswordBoxText(){
        return this.passwordBox.getText();   
   }

   async getPasswordBoxTextSplitedByNewLine(){
       return this.getPasswordBoxText.split('\n');
   }

   async removeFirstElementOfPasswowrdBox(){
       let passwordBox = await this.getLoginCredentialsTextSplitedByNewLine.shift();
       return passwordBox;
   }
}
export default HomePage;
// module.exports = HomePage;