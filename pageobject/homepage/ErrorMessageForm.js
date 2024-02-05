import BaseForm from "../../framework/BaseForm.js";
import Label from "../../framework/elements/Label.js";
import Button from "../../framework/elements/Button.js";

class ErrorMessageForm extends BaseForm {
    constructor() {
        super('//h3[@data-test="error"]', 'Error message form')
        this.errorMessage = new Label('//h3[@data-test="error"]', 'Error message text');
        this.errorMessageCloseButton = new Button("//button[@class='error-button']", 'Error message close button.');
    }

    async clickErrorMessageCloseButton(){
        await this.errorMessageCloseButton.click();
    }
}
export default ErrorMessageForm;

