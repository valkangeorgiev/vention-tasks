import BaseElement from "./BaseElement.js";

class TextBox extends BaseElement{

    constructor(locator, name){
        super (locator, name);
    }
    async getText() {
        const textBoxElement = await this.getElement();
        return textBoxElement.getText();
    }

    async clearAndType(value) {
        let element = await this.getElement();
        await element.setValue(value);
    }

    async addValue(value) {
        let element = await this.getElement();
        await element.addValue(value);
    }

    async getPlaceholder() {
        return this.getAttribute('placeholder');
    }  
}
export default TextBox;
