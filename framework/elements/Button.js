import BaseElement from "./BaseElement";

class Button extends BaseElement{
    
    constructor(locator, name){
        super (locator, name);
    }

    async getText() {
        const buttonElement = await this.getElement();
        return buttonElement.getText();
    }
}
export default Button;