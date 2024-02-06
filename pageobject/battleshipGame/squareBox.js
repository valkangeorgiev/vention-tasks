import BaseForm from "../../framework/BaseForm.js";
import Button from "../../framework/elements/Button.js";
import Label from "../../framework/elements/Label.js";
import TextBox from "../../framework/elements/TextBox.js";

class SquareBox extends BaseForm {

    constructor() {
        super('#user-name', 'LogingPage')
        this.swagLabLabel = new Label('//div[@class="login_logo"]', 'SwagLab logo text');
        
    }
    
    async addUsername(username) {
        await this.usernameTextBox.clearAndType(username);
    }
}

export default new SquareBox;